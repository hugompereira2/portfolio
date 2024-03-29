import "./Work.scss"
import TopSection from "../TopSection/TopSection"
import ProjectCard from "../ProjectCard/ProjectCard"
import FinanceImg from "../../assets/project/finance.png"
import HabitsImg from "../../assets/project/habits.png"
import WhatsImg from "../../assets/project/whatsapp.png"
import MarvelImg from "../../assets/project/marvel.png"
import { forwardRef } from "react"

interface IWork { }

const Work = forwardRef<HTMLDivElement, IWork>((props, ref) => {

    const projects = [
        {
            name: "WhatsApp Clone (On Going)",
            desc: "I am currently working on a project to develop a WhatsApp clone with a focus on building the user interface using React. The goal of the project is to recreate the familiar and intuitive messaging experience of the original WhatsApp application.",
            img: WhatsImg,
            live: "https://hugo-whatsapp-clone.netlify.app/",
            github: "",
            tags: ["Online", "React", "Vite"]
        },
        {
            name: "Marvel",
            desc: "The project utilizes the Marvel API to obtain information about comic books. With this API, it is possible to list and display details of the available comic books, such as title, description, cover image, and other relevant attributes.",
            img: MarvelImg,
            live: "https://marvel-hugompereira2.vercel.app/",
            github: "",
            tags: ["Online", "React", "Next"]
        },
        {
            name: "Finance",
            desc: "The project uses the currency quotes API provided by hgbrasil. With this API, we can obtain up-to-date information on the values of major currencies relative to other currencies and easily convert them.",
            img: FinanceImg,
            live: "https://financefranq.netlify.app/",
            github: "",
            tags: ["Online", "Vue", "Vite", "FireBase"]
        },
        {
            name: "NLW Setup",
            desc: "The NLW Setup - calendar and habit tracking project is a software developed to assist people in organizing their daily routine more efficiently.",
            img: HabitsImg,
            live: "",
            github: "https://github.com/hugompereira2/nlw-setup-ignite",
            tags: ["React", "Node", "Prisma", "Typescript"]
        },
    ]

    return (
        <div id="work" ref={ref}>
            <TopSection text={"🔗 Portfólio"} width={160} />
            <h1 className="title">Trabalhos e projetos</h1>
            <div className="project-deck">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            desc={project.desc}
                            live={project.live}
                            github={project.github}
                            img={project.img}
                            tags={project.tags}
                        />
                    )
                })}
            </div>
        </div>
    )
})

export default Work