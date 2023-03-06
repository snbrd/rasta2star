/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"

export default function FlippingCard({card}){

    const [flip, setFlip] = useState(false)

    const flipTheCard = () => {
        if(card.win === true){
            setFlip(true)
        }
    }

    const FrontCard = () => {
        return(
            <div data-aos="flip-up" data-aos-duration="1500" className={`front shadow-lg ${flip ? 'block' : 'hidden' }`}> {card.front} </div>
        )
    }

    return(
        <div className="p-3 bg-white text-black text-md">
            <div className={`back shadow-lg ${flip ? 'hidden' : 'block' }`} onClick={flipTheCard}> {card.back} </div>
            {flip ? <FrontCard/> : null}
        </div>  
        
    )
}