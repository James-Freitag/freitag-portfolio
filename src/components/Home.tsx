// import profilePic from "../../public/profilePic.jpg";
import backgroundImg from "../../public/mountain-background.jpg";

const Home = () => {
  return (
    <div id="home">
      <div
        id="dark-overlay"
        className="relative grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-4 px-4 md:px-8 min-h-screen w-full mx-auto bg-black/20 md:py-[78px]"
      >
        <img
          id="home-image"
          src={backgroundImg}
          alt="Mountain Background"
          className="absolute top-0 left-0 z-[-9999] object-cover w-full h-full"
        />
        {/* <video
          src="https://pub-2b6cc574aabe4d108caa4fb7d522f085.r2.dev/animatedBackground.mp4"
          loop
          autoPlay
          muted
          className=" absolute object-cover z-[-99999] left-0 w-full h-full top-0"
        /> */}
        <h1
          // id="text-shadow"
          className="md:col-start-2 md:col-span-4 text-[4.1rem] md:text-[6.5rem] text-white font-extrabold px-2 pb-8 md:pb-0 flex flex-wrap items-center leading-none tracking-wider ease-in duration-200"
        >
          Front End Developer
        </h1>
        <p className="text-white row-start-2 col-start-1 md:col-start-2 text-2xl md:px-2">
          Hi, I'm James
        </p>
        <div className="place-self-center rounded-xl max-w-lg md:col-span-2 p-2">
          {/* <img
            src={profilePic}
            alt="Picture of James Freitag"
            className="rounded-xl shadow-xl w-full "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
