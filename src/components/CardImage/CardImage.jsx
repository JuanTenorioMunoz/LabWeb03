import { useEffect, useState } from "react"
import "./CardImage.css"

const CardImage = ({image,desc}) => {

    const [shortDesc, setShortDesc] = useState();

    const descShortener = (desc) => {
        return desc.split(" ").slice(0, 4).join(" ");
    }

    useEffect(()=>{
        setShortDesc(descShortener(desc))
    }, [image])

    return(
        <div className="card-image-container">
            <img className="card-image" src={image}></img>
            <p>{shortDesc}</p>
        </div>
    )
}

export default CardImage;