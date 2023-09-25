import { useLoaderData } from "react-router-dom";
import HomeCards from "../../Components/HomeCards/HomeCards";

import Banner from "../../Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const allData = useLoaderData();
  const [displayName, setDisplayName] = useState([])
//   console.log(allData);


const handleData = data =>{
  let searchName = data
  if(searchName == '')
  {
    setDisplayName(allData)
  }
  else{
    const filterName = allData.filter( card => card.category.toLowerCase() === searchName.toLowerCase())
    setDisplayName(filterName)
  }

}

useEffect(()=>{
  setDisplayName()

} ,[])

useEffect(()=>{
  setDisplayName(allData)

} ,[allData])



  return (
    <div>
       
        <Banner handleSubmit={handleData}></Banner>
      <div className="grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {displayName.map((card) => (
          <HomeCards key={card.id} card={card}></HomeCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
