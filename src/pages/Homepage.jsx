import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./HomepageStyle.css"

function Homepage(props) {
    return(
        <>
        <Navbar/>
        <section className="home container-fluid">
            <div className="home-text">
                <h1>Hay i'm <span>{props.name}</span></h1>
                <article>
                    I'm a Web Development Specialish Front End.
                    <br />
                    I have more than 1 month of experience working as a web development
                    <br />
                    at startups, e-commerce and goverment.
                </article>
                <a className="btn" href="#">Hire Me</a>
            </div>
            <div className="home-img blob">
                <img src="/images/aku_final.png" alt="myphoto" />
            </div>
        </section>

        <Footer/>
        </>
        
    )
}

export default Homepage