import React, { useEffect, useState } from 'react'
import { LinkExternal, Skeleton } from 'rasta-uikit'
import useI18n from 'hooks/useI18n'
import { GiCheckMark } from 'react-icons/all'
import BigNumber from 'bignumber.js'

interface DepositModalProps {
  onConfirm: (tokens: any) => void
  onDismiss?: () => void
  tokenName?: string
  addLiquidityUrl?: string
  tokens?: any
  type?: any
}

const StakeModal: React.FC<DepositModalProps> = ({ onConfirm, tokens = [], onDismiss, tokenName = '', type }) => {
  const [balance, setBalance] = useState(tokens)
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [smartLen, setSmartLen] = useState([]);

  const handleLoadMore = () => {
    const tarr = [];
    for (let i = 20 * page; i < 20 + 20 * page; i++) {
      if (i === balance.length) break;
      tarr.push(balance[i]);
    }
    setSmartLen([...smartLen, ...tarr]);
    setPage(page + 1)
  }

  const handleAdd = (id: number) => {
    if(pendingTx) return;
    
    setSelected(prev => {
      const fResult = prev.filter(e => e !== id);
      if (fResult.length === prev.length) {
        return [...fResult, id];
      }
      return [...fResult];
    });
  }

  useEffect(() => {
    const tarr = [];
    for (let i = 0; i < 20; i++) {
      if (i === balance.length) break;
      tarr.push(balance[i]);
    }
    setSmartLen(tarr);
  }, [balance])


  const handleStake = async () => {
    setPendingTx(true)
    const tx: any = await onConfirm(selected);
    if (tx?.status) {
      setBalance(prev => {
        const tp = prev.filter(e => selected.indexOf(String(e)) === -1);
        return [...tp];
      });
      setSelected([]);
    }
    setPendingTx(false)
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const res = balance.map(item => new BigNumber(item).toJSON());
      setSelected(res);
    } else {
      setSelected([]);
    }
  }

  return (
    <div
      className="bg-white w-full md:w-2/3 lg:w-2/3 xl:w-1/2 z-50 px-2 xl:px-12 py-6 xl:py-12 flex flex-col justify-between rounded-lg"
      style={{ maxHeight: 'calc(100% - 100px)' }}
    >
      <div className='flex flex-col lg:flex-row relative items-center justify-center gap-3'>
        <div className="text-2xl font-bold text-center">{type || "Stake"} {tokenName}</div>
        <div className="flex items-center right-0 lg:absolute">
          <input id="orange-checkbox" onChange={handleSelectAll} type="checkbox" value="" className="cursor-pointer w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="orange-checkbox" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SELECT ALL</label>
        </div>
      </div>

      <div className="bg-white overflow-auto h-full mt-5 mb-3">
        <div className="w-full">
          {
            balance.length ? (
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {smartLen.map((item, index) => <ItemCard handleAdd={handleAdd} selected={selected} item={item} key={index} />)}
              </div>
            ) : (
              <p className="my-8 text-sm text-center font-medium text-gray-900">There is no NFTs you purchased</p>
            )
          }
          <div className='flex items-center w-full justify-center'>
            {
              smartLen.length < balance.length ? (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="w-1/2 my-8 bg-gradient-to-l text-white from-green-rasta to-yellow-rasta  rounded-lg px-3 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer"
                >
                  Load More
                </button>
              ) : null
            }
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-2 xl:mb-2 gap-5">
        <button
          type="button"
          className="w-1/2 bg-gradient-to-l border-2 text-gray-700 rounded-lg px-12 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer"
          onClick={onDismiss}
        >
          {TranslateString(462, 'Cancel')}
        </button>
        <button
          type="button"
          className={`${(pendingTx || !selected.length ? 'disabled ' : "")} w-1/2 bg-gradient-to-l text-white from-green-rasta to-yellow-rasta  rounded-lg px-3 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer`}
          disabled={pendingTx || !selected.length}
          onClick={handleStake}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </button>
      </div>
      <LinkExternal href='/mint' style={{ alignSelf: 'center', color: 'darkorange' }}>
        {TranslateString(999, 'Get')} {tokenName}
      </LinkExternal>
    </div>
  )
}

const ItemCard = (props) => {
  const { item, selected, handleAdd } = props;
  const inValue = new BigNumber(item).toJSON();
  const [url, setUrl] = useState("");
  const is = selected.indexOf(inValue);

  useEffect(() => {

    (async () => {
      try {
        const res = await fetch(`https://zionlions.meta.rareboard.com/api/${inValue}.json`);
        const json = await res.json();
        setUrl(`https://zionlabs.mypinata.cloud/ipfs/${json?.image.slice(7)}`);
      } catch (error) {
        console.log('error :>> ', error);
      }
    })()
  }, [inValue])


  return (
    <div onClick={() => handleAdd(inValue)} className="group hover:opacity-75 relative cursor-pointer ">
      <div className="relative min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-48">

        {
          url ? (
            <img
              src={url}
              alt="Zion Explorer"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          ) : (
            <Skeleton width='100%' height="100%" />
          )
        }
        {
          is !== -1 ?
            <div
              style={{ background: '#ffffffa6' }}
              className='flex items-center justify-center top-0 h-full w-full absolute z-50'
            >
              <GiCheckMark fontSize={80} className="text-green-rasta" />
            </div> : null
        }
      </div>
      <div className="mt-3 px-1 flex justify-between">
        <p className="text-sm font-medium text-gray-900">TOKEN ID</p>
        <p className="text-sm font-medium text-gray-900">#{inValue}</p>
      </div>
    </div>
  )
}

export default StakeModal
