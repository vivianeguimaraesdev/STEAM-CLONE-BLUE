import "./Home.css";
import Sidenav from "../../components/sidenav/Sidenav.js";
import Subheader from "../../components/subheader/Subheader.js";
import Slidermain from "../../components/slidermain/Slidermain.js";
import Subfooter from "../../components/foooter/Subfooter";
import Card from "../../components/card/card";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Home() {

  const[games,setGames] = useState([]);
  const [mounted,setMounted]=useState(false);

  const getData = async ()=>{
    await axios.get('/game/findMany')
    .then(response =>{
      if(mounted){
      setGames(response.data)}
    })
  }
  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])
   
 
  return (
    <div>
      <main>
        <div className="TotalBody">
          <div className="Sidebody">
            <Sidenav></Sidenav>
          </div>
          <div className="MainBody">
            <Subheader></Subheader>
            <div className="SliderSection">
            <h4>Destaques e Recomendados</h4>
            {
                  <Slidermain
                    id='4f969d05-ee63-4153-8bb4-66a55818e2ef'                    
                    id2='98508fea-7b83-4a20-ae3d-0e0abf2bb117'
                    id3='949c61f7-49fe-4007-84ba-d6c1e1435a40'
                    id4='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
                    preco='12.00'
                    /> 
            }
            </div>
            <h4>Itens da Loja</h4>

            <div className="CardsSection">
            
              {
                games.map( game => (
                  <Card
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    preco={game.price}
                    key={game.name}
                    />
                ))
              } 
            </div>
          </div>
        </div>
        <Subfooter/>
      </main>
    </div>
  );
}
