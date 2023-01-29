import './Logo.css'

import logo from '../../../public/Rick_and_Morty.svg'

const Logo = () => {
    return (
        <div className='logo'><img  src={logo} alt="Rick and Morty" /></div>
    )
}

export default Logo