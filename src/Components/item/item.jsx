import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/Context';

const Item = ({item}) => {

      const {cartData, addCartData} = useContext(cartContext)
  return (
    <div>
      <section className="cardSection">
            <img className="cardImg" src={item?.image} alt="gameImg" />
            <article className="cardtitle" >{item.title}</article>
            <article className="cardDescription" >{item.description}</article>
            <section className="cardfooting" >
                  <article className="gameprice" >{item.price}</article>
                  <article className="cardBtn" onClick={()=> {addCartData(item)}}>Add-to-Cart</article>
            </section>
      </section>
    </div> // structure done.s
  )
}

export default Item;
