import "./About.css";
import profile from "../../assets/icons/profile2.png"
import { Link } from "react-router-dom";
import { reasons, skills } from "../../helpers/dataHolder";
import { useEffect } from "react";
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page">
            <div className="about-container">
                <h1 className="text-center txt-primary p-3">About me</h1>
                <div className="row p-3">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={profile} alt="profile" height={350} width={400} style={{ borderRadius: "50%", }} className="image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>I&apos;m Vinay Kumar Chauhan and I am a <span className="txt-primary"> Full <br />Stack Developer</span></h2>
                        <p>As I mentioned above that I am a Full Stack Developer. I have learnt web Technologies like Forntend ,Backend and Database. Apart from thses technologies I have good knowledge of Data Structures and Algorithms. I have completed my B.Tech in Electronics & Communication Engineering Branch in 2021 from VBS Purvanchal University Jaunpur,Uttar-Pradesh. Also I have done Diploma in Electronics Engineering in 2018 from Government Polytechnic Saharanpur, Uttar-Pradesh.</p>
                        <div className="pt-3">
                            <Link className="download-btn" to="https://drive.google.com/file/d/1gn-8TgdI_uVlHdEOrGkrb_EOwv2Ky6sn/view" target="blank">
                                Download CV
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="line txt-primary"></div>
                <div className="row p-4">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                        <h3 className="p-3 txt-primary">Why you should hire me</h3>
                        <ul>
                            {reasons.map((reason, index) => (
                                <li key={index}>
                                    <h6><strong>{reason.title}:</strong></h6>
                                    <p>{reason.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                        <div>
                            <h3 className="p-3 txt-primary">Technologies & Skills</h3>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index} className="mb-3">
                                        <strong>{skill.category}:</strong> {skill.items.join(' | ')}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
