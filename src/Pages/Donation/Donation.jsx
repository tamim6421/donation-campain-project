import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
const [donate, setDonate] = useState([])
const [empty, setEmpty] = useState('')
const [dataLength, setDataLength] = useState(4)

useEffect( ()=>{

    const getDonateItems = JSON.parse(localStorage.getItem('items'))
    if(getDonateItems){
        setDonate(getDonateItems)
    }else{
        setEmpty('Empty')
    }
   
} ,[])

// console.log(donate.length)
  return (
    <div>
      {
        empty ? <p className="h-[60vh] flex items-center text-3xl font-bold text-red-500 justify-center"> {empty} </p> :
        <div>
            <h1 className="text-xl font-bold my-10 text-center">Total Donation : {donate.length} </h1>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 mt-4">
                {
                   
                  donate.slice(0, dataLength).map(item => <DonationCard key={item.id} item={item}></DonationCard>)
                }
            </div>
            <div className={dataLength === donate.length && 'hidden'}>
            {
                donate.length > 4 && <div>
                <button 
                onClick={()=>setDataLength(donate.length)}
                className="bg-green-500 text-white px-5 py-1 rounded-md block mx-auto my-10">
                See All</button>
            </div>
            }
            </div>
            
      </div>
      }
    </div>
  );
};

export default Donation;
