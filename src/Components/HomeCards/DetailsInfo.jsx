

const DetailsInfo = ({data}) => {
    const{picture,cture,price,description} = data
    console.log(data)
    return (
        <div>
            <div>
                <img src={picture} alt="" />
                <p> {price} </p>
                <p> description {description} </p>
            </div>
        </div>
    );
};

export default DetailsInfo;