import { useEffect, useState } from "react";
import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import apiFetching from "../../services/apiFetching";

const Card = () => {
    const [image, setImage] = useState("RRRR");
    const [desc, setDesc] = useState("mamaguevo");

    const fetchData = async () =>{
        try {
           const newDesc = await apiFetching.fetchDesc();
           const newImage = await apiFetching.fetchImage();

           setDesc(newDesc);
           setImage(newImage);

        } catch (error) {
            console.error(error);
        }
    }

    const otherImage = () => {
        fetchData();       
        console.log("CLIIII")
    }

    useEffect(() => {
        fetchData();
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