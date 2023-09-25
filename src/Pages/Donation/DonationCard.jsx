import React from 'react';

const DonationCard = ({item}) => {
    const {
        card_bg_color,
        category,
        category_bg_color,
        picture,
        text_color,
        title,
        price,
        id
      } = item;
    
      const cardBgStyle = {
        backgroundColor: card_bg_color,
       
      };
      const text ={
        color: text_color,
      }
      const cateBg = {
        backgroundColor:category_bg_color,
        color: text_color,
      }
      const btnBg ={
        backgroundColor: text_color,
      }
    console.log(item)
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-xl p-2">
          <figure>
            <img
              src={picture}
              alt="Movie"
            />
          </figure>
          <div style={cardBgStyle} className="card-body p-2">
           <span style={cateBg} className='max-w-max px-4 py-2 font-bold rounded-lg'> {category} </span>
            <p className='text-xl font-semibold'>{title} </p>
            <p style={text} className='text-xl font-semibold'>${price} </p>
            <div className="card-actions">
              <button style={btnBg} className="text-white px-3 py-1 rounded-sm ">View Details</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default DonationCard;