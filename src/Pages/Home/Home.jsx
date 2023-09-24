import { useLoaderData } from "react-router-dom";
import HomeCards from "../../Components/HomeCards/HomeCards";


const Home = () => {
const allData = useLoaderData()
console.log(allData)
    
    return (
        <div className="grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                allData.map( card => <HomeCards key={card.id} card={card}></HomeCards>)
            }
        </div>
    );
};

export default Home;