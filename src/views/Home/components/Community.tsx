import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import CommunityImage from '../../../assets/community-lion.png'
import SectionImage from '../../../assets/section-background.jpg'
import ButtonImage from '../../../assets/ZionLion-SAGA.png'
import OldPaper from '../../../assets/OldPaperzion-lab.png'

export default function Community() {
  return (
    <div>
      <div
        className="flex w-full py-20 bg-white text-white flex-col md:px-8"
        style={{
          backgroundColor: '#00000030',
          backgroundImage: `url(${SectionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="flex flex-col w-full mb-1 md:max-w-screen-xl md:mx-auto items-center px-4 md:px-0 md:flex-row md:mb-0">
          {/* left section */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="images md:w-6/12 text-center md:px-20"
          >
            <div className="sectionTitle">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-4xl md:text-4xl font-bold pr-0 md:pr-48 text-center md:text-left leading-tight font-lora"
              >
                ZionLion SAGA - Chapter #1
              </h1>
            </div>
            <div className="sectionContent flex flex-col">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="pt-8 text-center md:text-left"
              >
                Legend has it that when the Imperial Army began its ruthless invasion of The Caribbean, Lions that were
                once native to the islands were cast away and left for dead on the wild and unforgiving waters of the
                Atlantic Ocean.
              </p>
            </div>
            <div className="sectionFooter flex my-8 justify-center md:justify-start">
              <a
                href="https://docs.zionlabs.info/introduction/zion-lions-of-zion-island-nfts"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <LazyLoadImage src={ButtonImage} alt="t4-professor" className="w-48" effect="blur" />
              </a>
            </div>
          </div>

          {/* right section */}
          <div
            className="leftSection md:w-6/12 py-12 px-12 md:py-20 md:px-12"
            style={{
              backgroundImage: `url(${OldPaper})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
            }}
          >
            <div className="text-black">
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-4xl md:text-5xl font-bold pr-0 text-center leading-tight font-lora"
                >
                  A Legend Prevails
                </h1>
              </div>

              <div className="sectionContent flex flex-col space-y-5">
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    className="mt-8 text-center md:text-left"
                  >
                    After a torturous sea crossing, our Lions have arrived on the island of ZION. In the arrival memos,
                    following survivors are listed by their skill rarities;
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <h3 className="font-bold">T1 - Farmer</h3>
                  <p>
                    The humblest and modest of all lions. Farmers are hard-working and essential for creating supplies
                    for the whole lion family.
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <h3 className="font-bold">T2 - Explorer</h3>
                  <p>
                    Courage and Bold, The explorer takes it to the limit finding new paths and meadows. Legend has it
                    the explorer are the reason we found ZION island.
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h3 className="font-bold">T3 - Builder</h3>
                  <p>
                    After surviving the flee from the imperial army, and losing cities of magical treasures, The
                    Builders are ready to build a new empire on ZION island.
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <h3 className="font-bold">T4 - Professor</h3>
                  <p>
                    Born into magical biotech, The professors continue to create technology. Thanks to the help of the
                    Farms, Explorers, and Builders a new empire begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
