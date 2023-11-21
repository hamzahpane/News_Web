import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Scince (){

    const[myScince , SetMyscince] = useState([]);

    const fecthData =  async () =>{

        let resonse =  await fetch("https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=52449f0304f04c0aaed45cac5de1f995 ");
        
        let data =  await  resonse.json();

        SetMyscince(data.articles);


    }


    useEffect(() => {
    
        fecthData();

    }, [])
    
    return(
        <> 
        <div style={{display:"flex" , flexWrap:"wrap"}}>
                { myScince.map((ele) => {
                return (
                    <>
                    <Card style={{ width: "300px" , height:"300px" , marginLeft: "7rem", marginTop:"2rem" }}>
                    <Card.Text style={{margin:"10px 15px", fontFamily:"Newsreader, serif", fontWeight:"700",
                    fontSize:"20px"}}>{ele.author}</Card.Text>    
                    <Card.Body>
                    <Card.Title style={{fontFamily:"Newsreader, serif", fontWeight:"500",
                    fontSize:"18px"}}>{ele.title}</Card.Title>
                    <Card.Text> {ele.publishedAt}</Card.Text>
                    <Button href={ele.url} target="_blank"  variant="primary">Read More</Button>
                    </Card.Body>
                    </Card>
                </> 

                );
            })}

            </div>  
            </>            
    );
}

export default Scince;