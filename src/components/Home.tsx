import profilePic from "../../public/profilePic.jpg";

const Home = () => {
  return (
    <div id="home">
      <div
        id="dark-overlay"
        className="relative grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-4 px-4 md:px-8 h-auto w-full mx-auto bg-black/15 md:py-[78px]"
      >
        <video
          src="https://pub-2b6cc574aabe4d108caa4fb7d522f085.r2.dev/animatedBackground.mp4"
          loop
          autoPlay
          muted
          className=" absolute object-cover z-[-99999] left-0 w-full h-full top-0"
        />
        <h1
          id="text-shadow"
          className="md:col-span-3 text-[4.1rem] md:text-[6.5rem] lg:text-[10rem] text-white font-extrabold h-full pl-0 md:pl-12 pb-8 md:pb-0 flex flex-wrap break-all items-center hyphens-manual leading-none tracking-wider ease-in duration-200"
        >
          Front
          <br /> End
          <br className="leading-none hyphens-auto" /> Developer
        </h1>
        <div className="place-self-center rounded-xl max-w-lg md:col-span-2 p-2">
          <img
            src={profilePic}
            alt="Picture of James Freitag"
            className="rounded-xl shadow-xl w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
