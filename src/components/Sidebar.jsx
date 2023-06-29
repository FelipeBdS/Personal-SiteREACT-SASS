import ProfilePic from '../img/profile-pic.jpeg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'


import pdf from '../curriculo/Curriculo_FelipeB.pdf'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={ProfilePic} alt="Felipe Batista" />
    <p className="title">
        Desenvolvedor Front-end
    </p>
    <SocialNetworks />
    <InformationContainer />
    <a href={pdf} download="FelipeBatista-Curriculo"  className="btn">
        Download curriculo
    </a>
  </aside>
}

export default Sidebar
