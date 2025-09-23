// import WireframeSVG from './images/wireframe.svg'
import Image from 'next/image'

import { ExternalLink } from 'lucide-react'

type Project = {
    link: string
    title: string
    description: string
    technologies: string
    codeSrc?: string
    imageSrc?: string
}

const ProjectItem = ({
    link,
    title,
    description,
    technologies,
    codeSrc,
    imageSrc,
}: Project) => {
    return (
        <li className="border rounded shadow-xs md:p-4 md:py-8 p-4 gap-4 flex flex-col bg-white">
            <a href={link} className="flex flex-col gap-2">
                {imageSrc && (
                    <Image
                        className="blur-[1px] mx-auto"
                        src={`/assets/${imageSrc}`}
                        alt={title}
                        width="228"
                        height="120"
                    />
                )}
                <h2 className="text-indigo-700 text-lg flex flex-row gap-1 items-center">
                    {title}
                    <ExternalLink size={16} />
                </h2>
                <p className="md:text-sm text-base">{description}</p>
                <p className="md:text-sm text-base font-bold">{technologies}</p>
            </a>
            {codeSrc ? (
                <a
                    className="font-medium md:text-sm text-base underline text-black dark:text-zinc-200 mt-auto"
                    href={codeSrc}
                >
                    Code Source
                </a>
            ) : null}
        </li>
    )
}

function CaseStudies({ projects }: { projects: Project[] }) {
    return (
        <ul className="grid md:grid-cols-3 gap-2 w-full md:p-0 ps-0">
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    link={project.link}
                    title={project.title}
                    codeSrc={project.codeSrc}
                    description={project.description}
                    technologies={project.technologies}
                    imageSrc={project.imageSrc}
                />
            ))}
        </ul>
    )
}

export default CaseStudies
