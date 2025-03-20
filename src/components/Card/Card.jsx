import { useEffect, useState } from "react";
import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import apiFetching from "../../services/apiFetching";
import "./Card.css"

const Card = () => {
    const [image, setImage] = useState("RRRR");
    const [desc, setDesc] = useState("mamaguevo");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        setLoading(true); 

        try {
            const newDesc = await apiFetching.fetchDesc();
            const newImage = await apiFetching.fetchImage();

            setDesc(newDesc);
            setImage(newImage);
            
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    const otherImage = () => {
        fetchData();       
        console.log("CLIIII")
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div className="card-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <CardInfo info={desc} />
                    <CardImage image={image} desc={desc} />
                    <button onClick={otherImage}>Next Cat Fact</button>
                </>
            )}
        </div>

    );
}

export default Card;