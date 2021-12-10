



import dynamic from 'next/dynamic'
import { useMemo } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import contectarDB from '../lib/dbConnect';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('');
    const [numero, cantidad] = useState('');

    const [items, setItems] = useState([]);
    const [NumeroFocus, setfocus] = useState(0);
    const [img, setimg] = useState("");
    const [morInfo, setMorInfo] = useState([]);
    const divdes = useRef();
    const [info, setinfo] = useState([]);
  
    var datos= new Map();


  
  
   
    useEffect(() => {
     
        resourceType -= 1;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numero}&offset=${resourceType}`)

            .then(response => response.json())
            .then(json => setItems(json))
      console.log(items)

           
           
         
    }, [resourceType , numero]);
   
    useEffect(() => {
      if(NumeroFocus >0){
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${NumeroFocus}/`)
          .then(response => response.json())
          .then(json => setMorInfo(json))
          setinfo(morInfo["height"])
          
          console.log((stats))
          for (const i in stats) {
           datos.set(stats[i]["stat"]["name"],stats[i]["base_stat"]);
            //console.log( stats[i]["stat"]["name"])
          // datos.push(stats[i]["base_stat"])
          
          }
          
          //console.log((morInfo["stats"][0]["name"]))
           /*datos.push(morInfo["stats"][1]["name"])
          datos.push(morInfo["stats"][2]["name"])
          datos.push(morInfo["stats"][3]["name"])
          datos.push(morInfo["stats"][4]["name"])
          */

       //
       // console.log(morInfo)

      }
        setimg( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumeroFocus}.png`)
       
       
   
      }, [NumeroFocus])

      let pies = useMemo(() => {
        return info* 0.32808398950131
      });
    const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectComp'), {
        ssr: false,
      });
    let cont= resourceType ;
   

    let objeto =  items["results"]
    let nombrePochimon= [];
    let listasmagenes= []
   // console.log(items)
    for (const i in objeto) {
        nombrePochimon.push(objeto[i]);
        
      }
      let stats = morInfo["stats"]
      for (const i in stats) {
        datos.set(stats[i]["stat"]["name"],stats[i]["base_stat"]);
         //console.log( stats[i]["stat"]["name"])
       // datos.push(stats[i]["base_stat"])
       
       }
      
    function aparecer(n){
      setfocus(n)
      divdes.current.style.display = "block"
    }

console.log(datos)

    return (
        <> 
        
        <h1> Poke APIacidos</h1>
        <div id="al">
        <div id="div" className= "">
           <form>
                numero de la pokedex: 
               <input type="text"value ={resourceType} onChange={(e) => setResourceType(e.target.value)}></input><br></br>
               Cantidad
               <input type="text" value ={numero} onChange={(e) => cantidad(e.target.value)}></input><br></br>
               
              
           </form>
           <img src={img}></img>
           </div>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <div id="img" ref={divdes}>
altura del bicho:        
dm: {info} <br></br>
pies: {pies}
          </div>
           <div id="respuesta">
           {nombrePochimon.map((post) => (
             
          <p onMouseEnter={(e) => aparecer(e.target.id)} id={cont}>{cont++} {post["name"]}</p>
      ))}

      </div>
      <ComponentUE />
      
      </div>
      
        </>

    )

}

export async function getServerSideProps(){
try{
  await contectarDB()
  

 return {props: { title: 'My Title', content: '...' }}
}
catch(error){
  console.log(error)
  console.log("nooooooooooooo")

  process.exit(1)
}
}








/*  Cosa que deberia funcionar y no funciona
{datos.forEach((valor,clave)=> {
           
            <p> kgugul </p>
     
})}*/