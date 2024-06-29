import React from "react";
import experience from './Data/experience.json'
import image from '../Components/images/flair.jpeg'
const Experience = () =>{
    return(
        <>
            <div className="experience ex">
                <h1>EXPERIENCE</h1>
                {
                    experience.map((data)=>{
                        return(
                            <>
                            <div key={data.id} className="ex-items text-center" id="experience">
                                <div className="left">
                                    <img src={image} alt=""/>
                                </div>
                                <div className="right">
                                    <h2>{data.role}</h2>
                                    <h4>
                                    <span style={{color: "yellowgreen"}}>
                                    {data.startDate} {" to "} {data.endDate}
                                    </span>
                                    <span style={{color: "yellow"}}>
                                    {" "} {data.location}
                                    </span>
                                    </h4>
                                    <h5 style={{color: "yellow"}}>{data.experiences[0]}</h5>
                                    <h5 style={{color: "yellow"}}>{data.experiences[1]}</h5>

                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Experience;