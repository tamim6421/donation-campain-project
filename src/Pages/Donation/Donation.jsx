import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
const [donate, setDonate] = useState([])
const [empty, setEmpty] = useState('')

useEffect( ()=>{

    const getDonateItems = JSON.parse(localStorage.getItem('items'))
    if(getDonateItems){
        setDonate(getDonateItems)
    }else{
        setEmpty('Empty')
    }
   
} ,[])

console.log(donate , empty)
  return (
    <div>
      {
        empty ? <p className="h-[60vh] flex items-center justify-center"> {empty} </p> :
        <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-4">
                {
                    donate.map(item => <DonationCard key={item.id} item={item}></DonationCard>)
                }
            </div>
      </div>
      }
    </div>
  );
};

export default Donation;
