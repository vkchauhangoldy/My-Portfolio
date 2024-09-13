import { Link } from "react-router-dom"
import profile from "../../assets/icons/profile2.png"
import "./Home.css"
import Skills from "../../components/skills/Skills"
import { useEffect } from "react"
import Educations from "../../components/educations/Educations"
import Expertise from "../../components/expertise/Expertise"
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page">
            <div className="container">
                <div className="text-section">
                    <p className="sub-head">Hi, my name is</p>
                    <h1>VINAY KUMAR CHAUHAN</h1>
                    <p className="sub-head">A Full Stack Developer with a passion for learning and creating.</p>
                    <div className="social-icons">
                        <Link to="https://www.facebook.com/vk.chauhan.315" target="blank"><i className="fa fa-facebook" /></Link>
                        <Link to="https://x.com/vk_goldy" target="blank"><i className="fa fa-twitter" /></Link>
                        <Link to="https://www.instagram.com/vk_chauhan_goldy/" target="blank"><i className="fa fa-instagram" /></Link>
                        <Link to="https://www.linkedin.com/in/vinay-kumar-chauhan-543203226" target="blank"><i className="fa fa-linkedin" /></Link>
                    </div>
                    <Link className="download-btn" to="https://drive.google.com/file/d/1gn-8TgdI_uVlHdEOrGkrb_EOwv2Ky6sn/view" target="blank">
                        Download CV
                    </Link>
                </div>
                <div className="image-section">
                    <img src={profile} alt="Vinay Kumar Chauhan Image" />
                </div>
            </div>
            <Skills />
            <Educations />
            <Expertise />
        </div>
    )
}

export default Home
