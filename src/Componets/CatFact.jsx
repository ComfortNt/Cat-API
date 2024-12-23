import { useEffect, useState } from 'react'
import '../Styles/Cat.css'
import axios from 'axios';


export const CatApi=()=>{

  const [Fact, setFact] = useState("");

  const GetFact=()=>{
    axios.get("https://catfact.ninja/fact").then(({data})=>{setFact(data.fact);});
  };


useEffect(()=> GetFact() , []);

  return (<UI generate={GetFact}  fact={Fact}/>);

};


const UI =({generate , fact})=>{
   return(
     <div className='cat'>

        <div className="catfact">
            <h1>Get Cat Fact</h1>
            {fact}
        </div>

        <button onClick={generate}>
            generate
        </button>
      </div>
      

)};