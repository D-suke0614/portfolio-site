'use client'

import styles from './skill.module.scss'
import Section from '../section/Section'

import { IconContext } from "react-icons";
import { 
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript, 
    BiLogoTypescript, 
    BiLogoVuejs, 
    BiLogoReact, 
    BiLogoWordpress, 
    BiLogoSass, 
    BiLogoPostgresql,
    BiLogoPhp,
} from "react-icons/bi";

type Skills = {
    name: string,
    icon: JSX.Element
}

const SKILLS: Skills[] = [
    {name: 'HTML', icon: <BiLogoHtml5 />},
    {name: 'CSS', icon: <BiLogoCss3 />},
    {name: 'JavaScript', icon: <BiLogoJavascript />},
    {name: 'PHP', icon: <BiLogoPhp />},
    {name: 'SASS', icon: <BiLogoSass />},
    {name: 'TypeScript', icon: <BiLogoTypescript />},
    {name: 'Vue.js', icon: <BiLogoVuejs />},
    {name: 'React', icon: <BiLogoReact />},
    {name: 'Wordpress', icon: <BiLogoWordpress />},
    {name: 'Postgresql', icon: <BiLogoPostgresql />},
]

const Skill = () => {
    return (
        <Section title='Skills' sectionId='skills' bg='white'>
            <div className={styles.skills}>
                {SKILLS.map((skill) => (
                    <div className={styles.skill} key={skill.name}>
                        <IconContext.Provider value={{ size: '120px' }}>
                            {skill.icon}
                            <p className={styles.skill__name}>{skill.name}</p>
                        </IconContext.Provider>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skill