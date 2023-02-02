import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimatedPage from 'components/AnimatedPage'
import FirstSection from '../../assets/newaboutpage/daniel-eliashevskyi-T3Neg57nlYs-unsplash-1.jpg'
import SecondSection from '../../assets/newaboutpage/How-does-the-STA-1.jpg'
import ThirdSection from '../../assets/newaboutpage/geetanjal-khanna-8CwoHpZe3qE-unsplash-1.jpg'
import ArtistsImage from '../../assets/newaboutpage/launchpad-artists-.png'


export default function About(){
return(
    <AnimatedPage>
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
                    <span>lipsum</span>
                    <h2 className='text-4xl text-heading font-bold'>LIPSUM DOLOR</h2>

                    <p>
                        lipsum dolor sit amet aajsdjasdjladjsladjslajdlkjasdlkjasdklj
                    </p>
                </div>
            </div>
        </div>
        <div className='h-screen' style={{backgroundImage: `url(${ThirdSection})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='h-full w-full'>
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <span>Lipsum dolor</span>
                    <h1 className='text-4xl md:text-6xl font-bold text-heading'>Lorem ipsum</h1>
                </div>
            </div>
        </div>
    </AnimatedPage>
)
}