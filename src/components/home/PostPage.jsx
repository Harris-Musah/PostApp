import { useState } from "react";
import {  MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
const PostPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setisMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className=" w-[70%]">
                <div className="flex items-center justify-between">
                    <h1 className="text-red-500 text-2xl">Post page</h1>

                    <button
                    onClick={toggleMenu}
                    type="button" className={`text-red text-sm ${ isMenuOpen ? "transform rotate-90" : "" } transition-transform duration-200x  `}>
                        <BiPlus size={24} color="red" className={` ${ isMenuOpen ? "hidden": "block"}`}/>
                        <MdClose size={24} color="red" className={` ${ isMenuOpen ? "block": "hidden"}`}/>
                    </button>
                </div>
                <hr/>
                <br/>
                <section>

                <div className={`${
                    isOpen ? "block bg-white mt-4 rounded" : "hidden"
                    } w-full md:w-auto flex justify-center items-center p-5 text-center shadow `}>
                        <form>
                            <div className=" text-black">
                                <label className="">Title: </label>
                                <input className="border-b-2 bg-gray-50"/>
                            </div>
                            <br/>
                            <div className=" text-black">
                                <label className="">Post: </label>
                                <input className="border-b-2 bg-gray-50"/>
                            </div>
                            <div className="text-black pt-3">
                                <button type="submit" className="bg-blue-300 p-1 rounded">Post</button>
                            </div>
                        </form>
                    </div>

                </section>
            </div>

        </>
    );
}

export default PostPage;