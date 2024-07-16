import { MdMenu, MdClose } from "react-icons/md";
import React,{ useState } from "react";
const Navbar = () =>{
    
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setisMenuOpen(!isMenuOpen);
    }

    return(
        <nav className="fixed bg-[#18a999] text-white w-full top-0">
           <div className="flex flex-nowrap justify-between items-center h-10">
                <div className="space-x-2">
                    <h3 className="font-bold mx-auto text-3xl ml-3">Navbar</h3>
                </div>

                <button 
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar-default"
                    aria-controls="navbar-default"
                    aria-expanded = {isOpen}
                    type="button" className={`text-white text-sm ${ isMenuOpen ? "transform rotate-90" : "" } transition-transform duration-200 mx-3 md:hidden`}>
                    <MdMenu size={30} className={` ${ isMenuOpen ? "hidden": "block"}`}/>
                    <MdClose size={30} className={` ${ isMenuOpen ? "block": "hidden"}`}/>
                </button>

                <div className={`${
                    isOpen ? "block bg-[#0693e3] mt-4 rounded" : "hidden"
                    } w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 space-y-4 sm:space-y-0 bg-transparent md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:bg-blue-600 rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-200"
                            aria-current="page">
                                Home
                            </a>
                            <hr/>
                        </li>
                        <li><a href="#" className="block py-2 px-3 text-white hover:bg-blue-600 rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-200"
                        aria-current="page">About</a></li>
                        <hr/>
                        <li><a href="#" className="block py-2 px-3 text-white hover:bg-blue-600 rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-200"
                    aria-current="page">FAQ</a></li>
                    </ul>
                </div>
           </div>
        </nav>
    );
}

export default Navbar;