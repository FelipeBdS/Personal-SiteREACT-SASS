import { useState } from 'react'
import Modal from './Modal'

import HTMLCertificate from '../certificados/HTML5.jpeg'
import CSS3Certificate from '../certificados/CSS3.jpg'
import BootstrapCertificate from '../certificados/Bootstrap.jpg'
import JSCertificate from '../certificados/JS.jpg'
import SassCertificate from '../certificados/Sass.jpg'
import ReactJSCertificate from '../certificados/ReactJS.jpg'

import {
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiJsBadge,
    DiReact,
    DiSass,
    DiPhp,
    DiMysql
} from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "html", name:"HTML5", icon: <DiHtml5 />, img: HTMLCertificate },
    {id: "css", name:"CSS3", icon: <DiCss3 />, img: CSS3Certificate },
    {id: "bootstrap", name:"Bootstrap", icon: <DiBootstrap />, img: BootstrapCertificate },
    {id: "sass", name:"SASS", icon: <DiSass />, img: SassCertificate },
    {id: "javascript", name:"JavaScript", icon: <DiJsBadge />, img: JSCertificate },
    {id: "reactjs", name:"ReactJS", icon: <DiReact />, img: ReactJSCertificate },
    {id: "php", name:"PHP", icon: <DiPhp />, img: ''},
    {id: "sql", name:"SQL", icon: <DiMysql />, img: ''},
]



const TechnologiesContainer = () => {
    const [openModal, setOpenModal] = useState('');

    const handleOpenModal = (techId) => {
      setOpenModal(techId);
    };
  
    const handleCloseModal = () => {
      setOpenModal('');
    };

  return <section className='technologies-container'>
    <h2>Tecnologias</h2>

    <div className='technologies-grid'>
        {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id} >
                {tech.icon}
                <div className="technology-info">
                    <h3>{tech.name}</h3>
                    <button className='modal-button' 
                    onClick={() => handleOpenModal(tech.id)}>Certificado</button>
                    {openModal === tech.id && (
                <Modal className='modal-img' isOpen={true} setModalOpen={handleCloseModal} imgPath={tech.img} />
)}
                </div>
            </div>
        ))}
    </div>
  </section>
}
export default TechnologiesContainer