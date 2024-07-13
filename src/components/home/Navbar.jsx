
const Navbar = () =>{
    return(
        <nav className="fixed bg-[#18a999] text-white w-full top-0">
           <div className="flex flex-nowrap justify-between items-center h-10">
                <div className="space-x-2">
                    <h3 className="font-bold text-3xl ml-3">Navbar</h3>
                </div>

                <div className="font-medium w-48 mr-3">
                    <ul className="flex justify-around">
                        <li><a href="#" className="block hover:underline">Home</a></li>
                        <li><a href="#" className="block hover:underline">About</a></li>
                        <li><a href="#" className="block hover:underline">FAQ</a></li>
                    </ul>
                </div>
           </div>
        </nav>
    );
}

export default Navbar;