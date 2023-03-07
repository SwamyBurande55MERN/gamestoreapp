import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from '../header/header';
import Item from '../item/item';

const Main = () => {
      const [bestSeller, setBestSeller] = useState([]);
      const [fppGame, setFppGame] = useState([]);
      const [retro, setRetro] = useState([]);

      useEffect(()=> {
            axios
            .get("http://localhost:1337/api/best-sellerss")
            .then((bestSeller)=> {
                  setBestSeller(bestSeller.data.data);
            })
            .catch(()=> {

            })
            .finally(()=> {

            });
            axios
            .get("http://localhost:1337/api/fpp-game")
            .then((fppGame)=> {
                  setFppGame(fppGame.data.data);
            })
            .catch(()=> {

            })
            .finally(()=> {

            });
            axios
            .get("http://localhost:1337/api/retro")
            .then((retro)=> {
                  setRetro(retro.data.data);
            })
            .catch(()=> {

            })
            .finally(()=> {

            })
      }, []) // arr of dependency.
      return (
    <>
      <Header />
      <setion>
            <article>Best-Sellers</article>
            {bestSeller.map((item, key)=> {
                 return <Item item={item.attributes} />
            })}
            <article>Fpp-Games</article>
            {fppGame.map((item, key)=> {
                 return <Item item={item.attributes} />
            })}
            <article>retro</article>
            {retro.map((item, key)=> {
                 return <Item item={item.attributes}  />
            })}
      </setion>
    </>
  )
}

export default Main;
