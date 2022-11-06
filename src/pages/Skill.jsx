import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SkillStyle.css'

function Skill() {
    const [skill, setSkill] = useState(["Adobe Premiere Pro", "Mobile Programing", "Corel Draw X7", "Bahasa C", "Bahasa Java"])

    return(
        <>
        <Navbar/>
        <h2>Skill yang <span>Dikuasai</span></h2>
        <div className="skills container-fluid">
            <div className="skills1">
                <img src="/images/adobepremiere.png" alt="logo adobe premiere pro" />
                <h3>{skill[0]}</h3>
            </div>

            <div className="skills2">
                <img src="/images/androidstudio.webp" alt="logo android studio" />
                <h3>{skill[1]}</h3>
            </div>

            <div className="skills3">
                <img src="/images/coreldraw.jpg" alt="logo corel draw" />
                <h3>{skill[2]}</h3>
            </div>

            <div className="skills4">
                <img src="/images/devc.png" alt="logo dev c" />
                <h3>{skill[3]}</h3>
            </div>

            <div className="skills5">
                <img src="/images/java.jpg" alt="logo bahasa java" />
                <h3>{skill[4]}</h3>
            </div>
        </div>

        <Footer/>
        </>
        
    )
}

export default Skill