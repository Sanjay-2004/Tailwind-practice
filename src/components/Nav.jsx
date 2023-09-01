import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex justify-evenly items-center gap-4'>
                    <button class="px-4 py-2 bg-gray-300 rounded-full flex items-center">
                        <span class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <span class="transform transition-transform ease-in-out duration-300 translate-x-0 group-hover:translate-x-full">
                                <svg class="w-4 h-4 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                            </span>
                        </span>
                    </button>
                    <div className='hidden max-lg:block'>
                        <img src={hamburger} alt="Hamburger" width={25} height={25} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
