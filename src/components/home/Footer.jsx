import postImage from '../../assets/PostApp.png'
import fB from '../../assets/FB1.png'
import Tw from '../../assets/Twitter.png'
import Ig from '../../assets/IG.png'
const Footer = () => {

    return(
        <footer className="fixed bottom-0 bg-[#18a999] text-white w-full min-h-60 flex justify-evenly items-center flex-wrap md:flex-nowrap ">
            <div className='w-48 mx-5'>
                <div className='flex flex-col md:flex-nowrap items-center justify-center mb-5'>
                    <p className='text-xl font-semibold'>PostApp co Ltd</p>
                    <img src={postImage} alt='postApp logo' className='size-1/3 mr-4'/>
                </div>
                <div className='flex items-center justify-around'>
                    <img src={fB} alt='Facebook' className='size-10'/>
                    <img src={Ig} alt='Instagram' className='size-10'/>
                    <img src={Tw} alt='X' className='size-10 '/>
                </div>
                <div className='mt-5 text-center'>
                    <p className='text-sm'>
                        &copy; Copyright 2024
                    </p>
                </div>
            </div>

            <div className='text-center mx-5 w-50'>
                <p className='text-2xl font-semibold'>Contact us</p>
                <ul className='text-sm'>
                    <li className='py-2'>P.O Box 5406, Kumasi.</li>
                    <li className='py-2'>Ghana, West Africa</li>
                    <li className='py-2'>Tel: +233 54 188 3512</li>
                    <li className='py-2'>Email: harrisabdmusah@icloud.com</li>
                </ul>
            </div>

            <div className='text-sm text-center w-48 max-h-96 mx-5'>
                <p className='font-semibold text-2xl'>Links</p>
                <ul>
                    <li className='py-2'>Posts</li>
                    <li className='py-2'>FAQ</li>
                    <li className='py-2'>Abouts Us</li>
                </ul>
            </div>
            
            
            
        </footer>
    );

}

export default Footer;