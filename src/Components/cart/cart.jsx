import React, { useCallback, useContext, useRef } from 'react'
import { cartContext } from '../context/Context';
import useRazorpay from "react-razorpay";

const Cart = () => {
      const {cartData} = useContext(cartContext);
      let totalPrice = useRef();
      totalPrice.current.price = 0;
      const RazorPay = useRazorpay();
      const razorPayDisp = useCallback(async(totalPrice) => {
          const options = {
            key : "rzp_test_nGy5l8IA0cJaTI",
            amount : totalPrice,
            name : "GameStore-app",
            description : "In-game transaction",
            handler: (res) => {
                  console.log(res);
            },
            prefill : {
                  name: "Swamy Burande",
                  email : "swamyburande55@gmail.com",
                  contact : "1234567899",
            }, 
            notes: {
                  address : "Work-address"
            },
            theme: {
                  color : "#aaaaa",
            },
          }  
      const rzpl = new RazorPay(options);
      rzpl.open();
      }, [RazorPay]);

  return (
    <>
    <section>
    <section>
      {cartData.map((cartItem)=> {
            return(
                  <article>
                  <img src="" alt="" />
                  <article>{cartItem.title}</article>
                  <article>{cartItem.price}</article>
                  <button >Remove from Cart</button>
                  </article>
            )
      })}
      </section>
      <section>
            <article>Billing Details</article>
            <article>Total Cash : 5000 </article>
            {cartData.map((cart)=> {
                  totalPrice.current.price = totalPrice.current.price + cart.price;
                  return ( // shows cart - title & cart - price total
                        <article>
                              <span>{cart.title}</span>
                              <span>{cart.price}</span>
                        </article>
                  )
            })}
            <article >Total Amount: {totalPrice.current.price}</article>
            <button onClick={()=> {razorPayDisp(5000)}}>Check out</button>
      </section>
    </section>
    </>
  )
}

export default Cart;
