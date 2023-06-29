import {FaLinkedinIn, FaGithubSquare} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon : <FaLinkedinIn />, address: "https://www.linkedin.com/in/felipe-batista-ds"},
    {name: "github", icon : <FaGithubSquare />, address: "https://github.com/FelipeBdS"},
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
        <a href={network.address} className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks