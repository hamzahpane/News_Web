import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';



const Fetch = () =>{

    const[Data, SeData] = useState("");
    const FectData = async () =>{

        await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=52449f0304f04c0aaed45cac5de1f995"
        
        )
        .then((res) => SeData(res.data.articles));

    }

useEffect(() =>{


    FectData();
} ,[]);

return (

    
       <div >
            <div className="container">
                <h3> <u>TOP HEADLINESS  </u> </h3>
            </div>
            
                <div className="informasi">
                    {Data 
                    ? Data.map((items, index)  => (
                    <>

                        <div className="container-2" style={{width:"600px", 
                        boxShadow:"2px 2px 10px silver", marginTop:"40px", borderRadius:"10px"}}>

                        <h5 style={{fontFamily:"Roboto" , fontSize:"18px" , marginTop:"10px"}}>{items.title}</h5>

                        <div style={{justifyContent:"center" , alignItems:"center"}}>
                        <img src={items.urlToImage} alt="Image not Found"
                        style={{width:"100%", 
                                height:"300px",
                                objectFit:"cover"}}/>
                        </div>
                        <p>{items.content}</p>
                        <a href={items.url} target="blank">Views More</a>
                        </div>
                    </>
                    ))
                    :"Loading..."}
                
                </div>
       </div>
        

   

);


};

export default Fetch;