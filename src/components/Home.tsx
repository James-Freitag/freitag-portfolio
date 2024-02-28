import profilePic from "../../public/profilePic.jpg";
import animatedBg from "../../src/assets/animatedBG.mov";

const Home = () => {
  return (
    <div
      id="/"
      className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-8 h-screen w-full mx-auto bg-black/15"
    >
      <video
        src={animatedBg}
        loop
        autoPlay
        muted
        className=" absolute object-cover z-[-99999] left-0 w-full h-full"
      />
      <h1
        id="text-shadow"
        className="md:col-span-3 text-[4rem] md:text-[7rem] lg:text-[10rem] text-white font-extrabold h-full pl-0 md:pl-12 pb-8 md:pb-0 flex flex-wrap break-all items-center leading-none tracking-wider ease-in duration-200"
      >
        Front
        <br /> End
        <br /> Developer
      </h1>
      <div className="place-self-center rounded-xl max-w-lg md:col-span-2 ">
        <img
          src={profilePic}
          alt="Picture of James Freitag"
          className="rounded-xl shadow-xl w-full "
        />
      </div>
    </div>
  );
};

export default Home;
