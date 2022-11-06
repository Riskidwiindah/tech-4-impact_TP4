import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './HomepageStyle.css'

function AboutMe(props){
    const [department, setDepartment] = useState("Pendidikan ilmu Komputer")
    const [univ, setUniv] = useState("Universitas Pendidikan Indonesia")

    return(
        <>
        <Navbar/>
        <section className="home container-fluid">
            <div className="home-text">
                <h1>Hay i'm <span>{props.name}</span></h1>
                <article>
                    Saya seorang mahasiswi dari Bandung tepatnya {univ}. Asal 
                    saya dari Ciamis, sekarang sedang menempuh studi
                    semester 7 di jurusan {department}.
                    Saya memiliki hobi yaitu menonton, apapun yang sifatnya
                    menonton saya menyukainya. Cita-cita saya ingin bekerja
                    di perfilman, dipemerintahan dan sebagai web development.
                </article>
            </div>
            <div className="home-img blob">
                <img src="/images/aku_final.png" alt="myphoto" width={500}/>
            </div>
        </section>

        <Footer/>
        </>
        
    )
}

export default AboutMe