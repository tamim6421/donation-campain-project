
import { useEffect, useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';



const Statistics = () => {
  const [myDonation, setMyDonation] = useState(0)

  const getDonateItems = JSON.parse(localStorage.getItem("items"));
useEffect(()=>{
    if(getDonateItems !== null){
            setMyDonation(getDonateItems.length)}
} ,[getDonateItems])

  const data = [
    { label: "TotalDonation", value: 12-myDonation , color:'red' },
    { label: "MyDonation", value: myDonation ,color:'orange'},
  ];
 
  const size = {
    width: 310,
    height: 200,
  };
  const getArcLabel = (params) => {
    const percent = params.value / 12;
    return `${(percent * 100).toFixed(0)}%`;
};

  return (
    <div className="flex h-screen items-center justify-center p-1 ">  

<PieChart
       series={[
        {
          arcLabel:getArcLabel,
         
          arcLabelMinAngle: 45,
          data,
        },
      ]}
   
      {...size}
    />


    </div>
  );
};

export default Statistics;

