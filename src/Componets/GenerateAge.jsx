
import { useState , useEffect } from "react";
import axios from "axios";
import "../Styles/Age.css"

export const GetAge=()=>{

    const [age , SetAge] = useState();
    const [name, SetName] = useState();

    const generateAge=()=>{

        axios.get(`https://api.agify.io/?name=${name}`).then(({data}) => {
            
            SetAge(data.age);
            console.log(data);
            
        }) 
    }

    return(
        <div className='age'>
   
           <div className="age-input">

                <h1>Input your Name to Get Your Age:</h1>
               <input type="text" name="" id="" placeholder="...Name" onChange={(event)=> SetName(event.target.value)}/>   
               <h1>Predicted Age:{age}</h1>  
           </div>
  
           <button onClick={generateAge}>
               Predict Age
           </button>
         </div>)


;}



   
       
 
