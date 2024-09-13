import vgmart from "../../assets/icons/vgmart.png";
import snapshot from "../../assets/icons/snapshot.png";
import realstate from "../../assets/icons/realstate.png";
import weatherapp from "../../assets/icons/weatherapp.png";
import calculator from "../../assets/icons/calculator.png";
import todo from "../../assets/icons/todo.png";
import educational from "../../assets/icons/educational.png";
import gradecalc from "../../assets/icons/gradecalc.png";
import tictak from "../../assets/icons/tictak.png";
import imageslider from "../../assets/icons/imageslider.png";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../utils/button/Button";
const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const projectsArr = [
        {
            name: "E-Commerce Website",
            url: "https://vgmart.netlify.app/",
            img: vgmart,
        },
        {
            name: "Image Search Gallary",
            url: "https://vk-snapshot.netlify.app/",
            img: snapshot,
        },
        {
            name: "Real State Catelog",
            url: "https://vk-realestate.onrender.com/",
            img: realstate,
        },
        {
            name: "Weather App",
            url: "https://vk-weatherapplication.netlify.app/",
            img: weatherapp,
        },
        {
            name: "Calculator App",
            url: "https://vk-calculator.netlify.app/",
            img: calculator,
        },
        {
            name: "To Do App",
            url: "https://vk-toddolistapp.netlify.app/",
            img: todo,
        },
        {
            name: "Grade Calculator",
            url: "https://vkchauhangoldy.github.io/VK-Grade-Calculator/",
            img: gradecalc,
        },
        {
            name: "Educational website",
            url: "https://vkchauhangoldy.github.io/Educational-Web/",
            img: educational,
        },
        {
            name: "Tic Tac Toe",
            url: "https://vkchauhangoldy.github.io/VK-Tic-Tac-Toe/",
            img: tictak,
        },
        {
            name: "Image Slider",
            url: "https://vk-imageslider.netlify.app/",
            img: imageslider,
        },
    ];
    return (
        <div className="page">
            <h1 className="text-center txt-primary p-3">My Projects</h1>
            <div className="d-flex flex-wrap justify-content-center gap-5 cursor-pointer">
                {projectsArr.map((project, index) => (
                    <Link
                        to={project.url}
                        key={index}
                        className=""
                        style={{ width: "18rem" }}
                        target="_blank"
                    >
                        <img
                            src={project.img}
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={"200px"}
                        />
                        <div className="card-body p-1">
                            <h5 className="text-secondary text-center">{project.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center p-5">
                <Button label="Upcoming more" />
            </div>
        </div>
    );
};

export default Projects;
