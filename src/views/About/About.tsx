import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimatedPage from 'components/AnimatedPage'
import FirstSection from '../../assets/newaboutpage/daniel-eliashevskyi-T3Neg57nlYs-unsplash-1.jpg'
import SecondSection from '../../assets/newaboutpage/How-does-the-STA-1.jpg'
import ThirdSection from '../../assets/newaboutpage/geetanjal-khanna-8CwoHpZe3qE-unsplash-1.jpg'
import ArtistsImage from '../../assets/newaboutpage/launchpad-artists-.png'


export default function About(){
return(
    // <AnimatedPage>
    <>
        <div className='h-screen' style={{backgroundImage: `url(${FirstSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='h-full w-full'>
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <span>About</span>
                    <h1 className='text-4xl md:text-6xl font-bold text-heading uppercase'>The Zion Experience</h1>
                </div>
            </div>
        </div>
        <div className='h-screen' style={{backgroundImage: `url(${SecondSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <div className='h-full w-full grid md:grid-cols-2 items-center'>
                <div className='flex items-center justify-center'>
                    <LazyLoadImage src={ArtistsImage} alt="" effect="blur" className="about-image" />
                </div>
                <div className='flex flex-col items-center md:items-start justify-center px-5 text-center md:text-left md:px-0 gap-y-4'>
                    <span>About the</span>
                    <h2 className='text-4xl text-heading font-bold'>Zion launch Pad</h2>

                    <p>
                    The Zion Launchpad is an NFT based utility minting / launchpad for artists. 
                    </p>

                    <p>
                    Artists that come to the launchpad are able to earn revenue from NFT sales which the user can further more
                    </p>

                    <p>
                    stake their purchased NFT from the music artists on the Zion Labs platform.
                    </p>
                </div>
            </div>
        </div>
        <div className='h-screen' style={{backgroundImage: `url(${ThirdSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='h-full w-full'>
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <span>From us</span>
                    <h1 className='text-4xl md:text-6xl font-bold text-heading'>For You</h1>

                    <p className='break-words'>
                        Since our conception in 2020, we have been studying and discovering novel ways of revolutionizing the music industry, 
                    </p>
                    <p className='break-words'>
                        We want to help empower artists, to expand their horizons and reach an audience without borders.
                    </p>
                    <p className='break-words'>
                        Using novel Web3 protocols, we seek to bring transparent innovation to the masses.
                    </p>
                </div>
            </div>
        </div>
    {/* </AnimatedPage> */}
    </>
)
}