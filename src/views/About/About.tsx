import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className='lg:h-screen' style={{backgroundImage: `url(${SecondSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <div className='h-full w-full grid md:grid-cols-2 items-center'>
                <div className='flex items-center justify-center'>
                    <LazyLoadImage src={ArtistsImage} alt="" effect="blur" className="about-image" />
                </div>
                <div className='flex flex-col items-center md:items-start justify-center px-5 text-center md:text-left md:px-0'>
                    <span>About the</span>
                    <h2 className='text-4xl text-heading font-bold'>Zion launch Pad</h2>
                    
                    <div className='flex flex-col gap-4 mt-4 md:pr-16'>
                    <p>
                    {/* The Zion Launchpad is an NFT based utility minting / launchpad for artists.  */}
                    Welcome to Zion Labs, the ultimate NFT-based utility minting and launchpad platform for artists!
                    </p>

                    <p>
                    {/* Artists that come to the launchpad are able to earn revenue from NFT sales which the user can further more */}
                    Our platform provides a space for artists to showcase their work and earn revenue from NFT sales. With our innovative launchpad, artists can easily mint and sell their NFTs to a global audience of art collectors and enthusiasts.
                    </p>

                    <p>
                    {/* stake their purchased NFT from the music artists on the Zion Labs platform. */}
                    Not only can artists earn revenue from their NFT sales, but users can also further monetize their purchases by staking them on our platform. By staking NFTs from music artists on Zion Labs, users can earn even more revenue and contribute to the growth of the art community.
                    </p>

                    <p>
                    Join our community of artists and art enthusiasts today and experience the power of Zion Labs for yourself!
                    </p>

                    </div>

                    <a className='p-3 border-white border-1 mt-5 hover:bg-white hover:text-black' href="https://www.zionlp.com/launchpad-artists">Go to Launchpad</a>
                </div>
            </div>
        </div>
        <div className='h-screen' style={{backgroundImage: `url(${ThirdSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='h-full w-full'>
                <div className='h-full w-full flex items-center justify-center flex-col px-5'>
                    <span>From us</span>
                    <h1 className='text-4xl md:text-6xl font-bold text-heading'>For You</h1>

                    <div className='flex flex-col gap-y-8 md:px-32'>
                        <p className='break-words text-center'>
                            {/* Since our conception in 2020, we have been studying and discovering novel ways of revolutionizing the music industry,  */}
                            Our platform utilizes innovative Web3 protocols to bring transparent and decentralized solutions to the masses. We believe that by leveraging blockchain technology, we can help create a more equitable and accessible music industry that benefits artists and fans alike.
                        </p>
                        <p className='break-words text-center'>
                            {/* We want to help empower artists, to expand their horizons and reach an audience without borders. */}
                            Our mission is to empower artists to take control of their careers and connect with fans on a global scale. We provide a range of services to help artists succeed, including NFT minting, launchpad, and staking features.
                        </p>
                        <p className='break-words text-center'>
                            {/* Using novel Web3 protocols, we seek to bring transparent innovation to the masses. */}
                            Join us on our journey to revolutionize the music industry and create a more transparent and equitable future for artists!
                        </p>
                    </div>

                    <div className='mt-10'>
                        <Link className='border-white border-1 p-3 md:w-1/3 text-center hover:bg-white hover:text-black' to="/">Go to Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    {/* </AnimatedPage> */}
    </>
)
}