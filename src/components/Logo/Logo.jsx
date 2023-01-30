import logo from '../../../public/Rick_and_Morty.svg'

import './Logo.css'

const Logo = () => {
    return (
        <div className='logo'><img  src={logo} alt={import.meta.env.VITE_LOGO} /></div>
    )
}

export default Logo