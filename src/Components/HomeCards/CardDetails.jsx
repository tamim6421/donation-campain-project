import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsInfo from "./DetailsInfo";

const CardDetails = () => {
    const [data, setData] = useState([])
    const allData = useLoaderData()
    const {id} = useParams()

useEffect(()=>{
    const findData= allData?.find( item => item.id === id)
    setData(findData)
    
} ,[id, allData])

// console.log(data, allData)
// console.log(id)
    return (
        <div>
            <DetailsInfo data={data}></DetailsInfo>
        </div>
    );
};

export default CardDetails;