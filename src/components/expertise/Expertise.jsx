
import frontend from "../../assets/icons/frontend.jpg"
import backend from "../../assets/icons/backend.webp"
import web from "../../assets/icons/web.jpeg"
import app from "../../assets/icons/app.png"
const Expertise = () => {
    const expertise = [
        { name: "Forntend Development", img: frontend },
        { name: "Backend Development", img: backend },
        { name: "Responsive Web Design", img: web },
        { name: "App Development", img: app },
    ]
    return (
        <div className="p-3 pt-0">
            <h1 className="text-center txt-primary mb-5">Expertise</h1>
            <div className="d-flex flex-wrap justify-content-evenly cursor-pointer">
                {
                    expertise.map((exp, index) => (
                        <div key={index} className="" style={{ width: "17rem" }}>
                            <img src={exp.img} className="card-img-top" alt="..." width={100} height={"200px"} />
                            <div className="card-body p-1">
                                <h5 className="text-secondary text-center">{exp.name}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Expertise
