import { useEffect, useState } from "react";
import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";

const Card = () => {

    const [image, setImage] = useState("RRRR");
    const [desc, setDesc] = useState("mamaguevo");

    const fetchDesc = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact")
            const data = await response.json()

            setDesc(data.fact)
            console.log(desc, "DESC!!!")

        } catch (error) {
            console.error(error)
        }
    }

    const fetchImage = async () => {
        try {
            const response = await fetch("https://cataas.com/cat?json=true");
    
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
            const data = await response.json();
    
            setImage(data.url);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };
    

    const otherImage = () => {
        fetchDesc();
        fetchImage();
        console.log("CLIIII")
    }

    useEffect(() => {
        fetchDesc();
        fetchImage();
    }, [])

    return(

    <div className="card-container">
        <CardInfo info={desc}></CardInfo>
        <CardImage image={image} desc={desc}></CardImage>
        <button onClick={() => otherImage()}>Next Cat fact</button>
    </div>

    )
}

export default Card;