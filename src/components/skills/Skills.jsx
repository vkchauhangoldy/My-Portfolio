
import "./Skills.css"
import { skillArr } from "./skillsArr";
const Skills = () => {

    return (
        <div className="bg-light p-3">
            <h1 className="text-center p-3 txt-primary ">Technical Skills</h1>
            <div className="d-flex flex-wrap justify-content-center gap-4 p-4 w-100">
                {skillArr.map((skill, index) => (
                    <div key={index} className="rounded shadow-sm img-parent" style={{ maxWidth: '15rem' }}>
                        <img key={index} src={skill.img} alt={skill.name} className="img-fluid" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
