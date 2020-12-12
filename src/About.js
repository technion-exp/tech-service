import React from 'react';
import { Wave } from 'react-animated-text';
import './About.css';


class About extends React.Component{

    render(){
        return (
            <div className="about-flex-content">
                <Wave style={{color: "#0f4c81"}}
                    text="Technion – Israel Institute of Technology"
                    effect="verticalFadeOut"
                    effectChange={3}
                    effectDirection='down'
                    effectDuration={60}
                    delay={2}
                />
            </div>
        )
        
    }

}

export default About;