const CardImage = ({image,desc}) => {
    return(
        <div className="card-image-container">
            <img src={image}></img>
            <p>{desc}</p>
        </div>
    )
}

export default CardImage;