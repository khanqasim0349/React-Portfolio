import React, { useState, useEffect } from 'react';

// Import the JSON data
import skillsData from './Data/skills.json';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Set the skills data from the JSON file
        setSkills(skillsData);
    }, []);

    return (
        <div className='container skills' id='skills'>
          <h1>SKILLS</h1>
          <div className="items">
            {skills.map((data) => (
                    <div className="item" key={data.id}>
                        <img src={`/assets/${data.imageSrc}`} alt={data.title} />
                        <h3>{data.title}</h3>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Skills;

