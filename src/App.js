import React, { useState, useEffect } from 'react';

const App = () => {
const [data,setData] = useState([])

useEffect(()=>{
async function find(){
const res = await fetch("https://jsonplaceholder.typicode.com/todos")
const json = await res.json()
setData(json)
}find()
},[])
 console.log(data)
    return (
        <div>
            { data.length > 0 ?
                data.map((el)=>(
                    <div style={{backgroundColor:"gray", border:"1px solid gray", padding:"5px", margin:"5px",color:"white"}} key={el.id}>
                        <h1>{el.title}</h1>
                    </div>
                ))
                :
                <div style={{display:"flex", height:"100vh", alignItems:"center",justifyContent:"center"}}>
                    <p style={{fontSize:"3rem",}}>Loading...</p>
                </div>
            }
        </div>
    );
};

export default App;
