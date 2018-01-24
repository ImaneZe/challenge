import React from 'react';
import Shop from "./Shop"


const ShopList = props => {
    return <div>
        {props.shops.map((shop, index) => {
          
          return <div key={shop.id}>
              <Shop
                {...shop}
                onDisLike={() => { props.dislike(shop.id) }}
                onLike={() => { props.like(shop.id) }}
              />
              
            </div>;
        })}
      </div>;
};

export default ShopList;