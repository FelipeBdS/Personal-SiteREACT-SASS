import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'
import '../styles/components/maincontent.sass'



const Maincontent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <hr />
      <TechnologiesContainer />
      <hr />
      <ProjectsContainer />
    </main>
  )
}

export default Maincontent