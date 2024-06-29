import React, {useEffect,useRef} from "react";
import pdf from '../Components/pdf/resume.pdf';
import image from '../Components/images/Mypicture.jpeg'
import Typed from 'typed.js'
// import { useEffect, useRef } from 'react';

const Home = () =>{
    const typedRef = useRef(null);
    useEffect(() =>{

        const options = {
            strings:[
                "Welcome to my profile",
                "HI! My Name is Muhammad Qasim",
                "I am full stack developer"
            ],
            typedSpeed:50,
            backSpeed:50,
            loop:true
        }

        const typed = new Typed(typedRef.current,options);
        return () =>{
            typed.destroy();
        }
    },[])
    return(
        <>
        <div className="home" id="home">
            <div className="left">
            <h1 ref={typedRef} style={{color:"deeppink"}}></h1>
            <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
            </div>
            <div className="right">
                <div className="img">
                    <img src={image} alt="Error"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;