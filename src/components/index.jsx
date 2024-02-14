
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

// eslint-disable-next-line react/prop-types
export default function StartRating ({noOfStarts = 5}) {

    const [rating, setRating]= useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex)
       
    }

    function handleMouseLeave(){
        // eslint-disable-next-line no-undef
        console.log(getCurrentIndex)
        setHover(rating)
    }


    return <div className="start-rating">
        {
            [...Array(noOfStarts)].map((_,index) => {
                index += 1

                return <FaStar 
                key={index}
                className={index <= (hover || rating ) ? 'active' : 'inactive' }
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}                
                />
            })
        }

    </div>
}