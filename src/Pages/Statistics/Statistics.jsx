
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { PieChart,Cell, Pie,Tooltip,Legend} from "recharts";
import { PieChart } from '@mui/x-charts/PieChart';



const Statistics = () => {
//   const allData = useLoaderData();
//   const [allTotal, setAllTotal] = useState(0);
//   const [totalDonation, setTotalDonation] = useState(0);
  const [myDonation, setMyDonation] = useState(0)

  const getDonateItems = JSON.parse(localStorage.getItem("items"));
useEffect(()=>{
    if(getDonateItems !== null){
            setMyDonation(getDonateItems.length)}
} ,[])

//   useEffect(() => {
//     const totalPrice = allData.reduce((c, p) => c + p.price, 0);
//     const total = getDonateItems.reduce((c, p) => c + p.price, 0);
//     setAllTotal(totalPrice);
//     setTotalDonation(total);
//   }, [getDonateItems, allData]);

//   const myDonation = (totalDonation / allTotal) * 100;

//   console.log(totalDonation, allTotal);

  const data = [
    { label: "TotalDonation", value: 12-myDonation , color:'red' },
    { label: "MyDonation", value: myDonation ,color:'orange'},
  ];
 
  const size = {
    width: 350,
    height: 200,
  };
  const getArcLabel = (params) => {
    const percent = params.value / 12;
    return `${(percent * 100).toFixed(0)}%`;
};

  return (
    <div className="flex h-screen items-center justify-center ">
        {/* <div>
      <PieChart width={500} height={500}>
        <Pie
        
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="orange"
        />
       
       
       <Tooltip></Tooltip>
       <Legend></Legend>
      </PieChart>
    </div> */}

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


// import * as React from 'react';
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// const data = [
//   { value: 5, label: 'A' },
//   { value: 10, label: 'B' },
//   { value: 15, label: 'C' },
//   { value: 20, label: 'D' },
// ];

// const size = {
//   width: 400,
//   height: 200,
// };

// export default function PieArcLabel() {
//   return (
//     <PieChart
//       series={[
//         {
//           arcLabel: (item) => ${item.label} (${item.value}),
//           arcLabelMinAngle: 45,
//           data,
//         },
//       ]}
//       sx={{
//         [`& .${pieArcLabelClasses.root}`]: {
//           fill: 'white',
//           fontWeight: 'bold',
//         },
//       }}
//       {...size}
//     />
//   );
// }