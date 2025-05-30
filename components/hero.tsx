import Image from "next/image";
// import image from '@/public/images/bgwimg.png';

const Hero = () => {
    return (
        <section id="hero">
            <div className="bg-[url('/images/blbgimg.webp')] bg-cover h-screen flex flex-col justify-center items-start px-6 md:px-20">
    <div className="pt-20 md:pt-32 space-y-4 md:space-y-6 -mt-64">
        <p className="text-lg md:text-xl font-serif text-purple-700 mb-4 md:mb-2 font-semibold">I am,</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-semibold leading-tight md:leading-none">
            Muhammad <br />
            <span className="pl-6 sm:pl-12 md:pl-28">Usaid</span>
        </h1>
        <p className="text-lg md:text-xl font-serif text-purple-700 sm:pl-16 md:pl-24 font-semibold">
            Frontend Developer based in Karachi
        </p>
        {/* <button className="text-white bg-purple-700 w-32 h-11 rounded-xl font-semibold text-sm md:text-base sm:ml-16 md:ml-48 mt-4">
            Stay Connected
        </button> */}
    </div>
</div>

                <div className="flex justify-center md:justify-end w-full -mt-48 md:-mt-[30rem]">
    {/* <Image
        className="bg-blend-multiply w-60 h-60 md:w-96 md:h-96 object-cover"
        src={image}
        alt="hero image"
    /> */}
</div>

            
        </section>
    );
};

export default Hero;
