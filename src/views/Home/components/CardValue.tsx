import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'

export interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  lineHeight?: string
  prefix?: string
  bold?: boolean
  color?: string
  isStats?: boolean
}

const CardValue: React.FC<CardValueProps> = ({ value, decimals, prefix = '', isStats = false }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    // <Text bold={bold} fontSize={fontSize} style={{ lineHeight }} color={color}>
    //   {prefix}
    //   {isStats ? value : countUp}
    // </Text>
    <span className="text-md font-bold text-red-rasta">
      {prefix}
      {isStats ? value : countUp}
    </span>
  )
}

export default CardValue
