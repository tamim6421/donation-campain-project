import { useNavigate } from "react-router-dom";

const HomeCards = ({ card }) => {
    const navigate = useNavigate()
  const {
    card_bg_color,
    category,
    category_bg_color,
    picture,
    text_color,
    title,
    id
  } = card;

  const cardBgStyle = {
    backgroundColor: card_bg_color,
    color: text_color,
  };
  const cateBg = {
    backgroundColor:category_bg_color,
  }

const handleNavigate = () =>{
    navigate(`/details/${id}`)
}

  
  return (
    <div>
      <div 
      onClick={handleNavigate}
       style={cardBgStyle}  className="relative flex h-72 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md cursor-pointer">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            className=" w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span style={cateBg} className="block font-sans text-base px-3 rounded-lg font-medium leading-relaxed antialiased">
             {category}
            </span>
            
          </div>
          <p className="block text-xl font-semibold font-sans leading-normal antialiased opacity-75">
           {title}
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default HomeCards;
