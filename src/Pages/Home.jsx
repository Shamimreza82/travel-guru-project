import bg from '../assets/icons/Rectangle.png'
import Slider from '../component/Slider';


const Home = () => {


   

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bg})`,
          }}
    >
      <div className="hero-overlay bg-opacity-80 brightness-0"></div>
      <div className="flex">
        <div className='lg:w-[50%] z-0 text-left text-neutral-content flex-1 lg:flex-col ml-7'>
          <h1 className="mb-5 text-7xl font-bold font-BebasNeue">Cox's bazar</h1>
          <p className="mb-5 ">
          Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
          </p>
          <button className="btn border-none bg-[#F9A51A]">Booking</button>
        </div>
        <div className='w-[50%] z-0 '>
          <Slider></Slider>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
