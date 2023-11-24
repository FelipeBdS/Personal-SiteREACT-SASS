import ProfilePic from '../img/profile-pic.jpeg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'


import portuguesPdf from '../curriculo/FelipeBatistaCurriculo2023.pdf'
import englishResume from '../curriculo/FelipeBatistaResume.pdf'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={ProfilePic} alt="Felipe Batista" />
    <p className="title">
        Web Developer 
        <hr />
        Desenvolvedor Web
    </p>
    <SocialNetworks />
    <InformationContainer />
    <a href={portuguesPdf} download="FelipeBatista-Curriculo"  className="btn">
        Download curriculo
    </a>
    <a href={englishResume} download="FelipeBatista-Resume"  className="btn">
        Download Resume
    </a>
  </aside>
}

export default Sidebar
