import React, { useEffect, useState } from "react";
import axios from "axios";




const Tecknologi = () =>{

    const[Data, SeData] = useState("");
    const FectData = async () =>{

        await axios.get(
            
            "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=52449f0304f04c0aaed45cac5de1f995"
        
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
            
                <div className="informasi" >
                    {Data 
                    ? Data.map((items, index)  => (
                    <>

                        <div className="container-2" style={{width:"600px", 
                        boxShadow:"2px 2px 10px silver", marginTop:"40px", borderRadius:"10px"}}>
                            
                    
                        <h5 style={{fontFamily:"Roboto" , fontSize:"16px", marginLeft:"20px", paddingTop:"10px"}}>{items.title}</h5>
                    

                        <div style={{justifyContent:"center" , alignItems:"center"}}>
                        <img src={items.urlToImage} alt="Image not Found"
                        style={{width:"100%", 
                                height:"300px",
                                objectFit:"cover"}}/>
                        </div>
                        <h5 style={{fontFamily:"Roboto" , fontSize:"15px", 
                        fontWeight:"400", marginLeft:"10px"}}>{items.content}</h5>

                        <div style={{paddingBottom:"10px"}}>
                        <button style={{padding:"5px 15px" , background:"#1363DF", 
                        marginLeft:"10px", borderRadius:"10px"}}> 
                        <a href={items.url} target="blank" style={{color:"white" 
                            , fontFamily:"Roboto" , fontSize:"15px" , textDecoration:"none"}}>Views More</a></button>
                        </div> 
                        </div>
                    </>
                    ))
                    :"Loading..."}
                
                </div>
       </div>
        

   

);


};

export default Tecknologi;