import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";

const Card = (image,desc) => {
    return(

    <div className="card-container">
        <CardInfo></CardInfo>
        <CardImage image={image} desc={desc}></CardImage>
    </div>
    
    )
}

export default Card;