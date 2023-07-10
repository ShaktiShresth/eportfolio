import AirbnbImg from '../assets/airbnbimg.png';
import Newsapp from '../assets/newsappimg.png';
import Inotebook from '../assets/inotebookimg.png';
import BookCart from '../assets/bookscartimg.png';
import Portfolio from '../assets/portfoliosample.png';
import Dribbledesign from "../assets/dribbledesign.png"
import CarRace from '../assets/cargameimg.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
            <p className="py-6">\\ Check out some of my recent works</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Portfolio})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://eportfolio-shaktishresth.vercel.app/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/eportfolio" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${AirbnbImg})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/airbnb-clone-MERN" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Newsapp})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/dailynews-app" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Inotebook})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/iNotebook" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${BookCart})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://shaktishresth.github.io/simple-book-cart/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/simple-book-cart" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${CarRace})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Javascript Car Game
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://shaktishresth.github.io/car-racing-game-JS//" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/car-racing-game-JS" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* <div style={{backgroundImage: `url(${Dribbledesign})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> */}
                {/* Hover Effects */}
                {/* <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        HTML CSS design
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://shaktishresth.github.io/techhardware-website-design/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Demo</button>
                        </a>
                        <a href="https://github.com/ShaktiShresth/techhardware-website-design" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 hover:text-pink-600'>Code</button>
                        </a>
                    </div>
                </div> */}
            {/* </div>  */}
        </div>
      </div>
    </div>
  )
}

export default Work
