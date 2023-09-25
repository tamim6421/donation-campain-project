

const DetailsInfo = ({data}) => {
    const{picture,title,price,description,text_color,id} = data
    // console.log(data)

const handleDonation = () =>{
    console.log('donation')
    const donateItems = []
    const getDonateItems = JSON.parse(localStorage.getItem('items'))
    if(!getDonateItems){
        donateItems.push(data)
        localStorage.setItem('items', JSON.stringify(donateItems))
        alert('added')
    }
    else{

        const exist = getDonateItems.find( item => item.id === id)
        if(!exist){
            donateItems.push(...getDonateItems, data)
            localStorage.setItem('items', JSON.stringify(donateItems))
            alert('added')
        }
        else{
            alert('already added')
        }
    }
}



    const btnBg = {
        backgroundColor: text_color,
    }
    return (
        <div>
            <div className="mb-20">
                <div className=" relative">
                <img className="w-full max-h-[60vh]" src={picture} alt="" />
                <button 
                onClick={handleDonation}
                style={btnBg} className="px-3 py-2 rounded-lg text-white absolute left-5 bottom-5" >Donate$ {price}</button>
                </div>
                
                <p className=" text-2xl font-semibold my-3"> {title} </p>
                <p >  {description} </p>
            </div>
        </div>
    );
};

export default DetailsInfo;