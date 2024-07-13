import Footer from './components/home/Footer';
import Navbar from './components/home/Navbar';
import PostPage from './components/home/PostPage';

function App() {

  return (
    <>
      <div className='relative flex flex-col'>
        <Navbar />
        <div>
          <br /><br />
        </div>
        <PostPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
