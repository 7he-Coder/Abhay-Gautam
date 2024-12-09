import "../../globle.css";
import hero1 from "../assets/IMAGES/about.png";
import hero2 from "../assets/IMAGES/3D-1.png";

const HeroSection = () => {
	return (
		<>
			<section className="relative inset-0 heroText place-items-center py-2 z-50 overflow-hidden">
				<div class="absolute inset-0 -z-10 h-full w-full px-5 py-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
				<div className="content max-w-7xl mx-auto place-items-center pt-20 px-6">
					<h1 className="leading-none md:leading-[.9] xl:mt-4 2xl:mt-0 text-5xl sm:text-6xl md:text-8xl xl:text-HeadingText font-extrabold uppercase text-center xl:text-left max-w-min lg:max-w-full text-transparent bg-clip-text bg-Gradient-1">
						web developer {""}
						<span className="hidden lg:inline-flex">&</span>
						<span className="lg:hidden">and</span> designer
					</h1>
				</div>

				<div className="Images place-items-center">
					<img
						className="hidden xl:block xl:absolute top-0 right-0"
						src={hero1}
						loading="lazy"
						alt="img"
					/>
					<img
						className="xl:hidden block px-2"
						src={hero2}
						loading="lazy"
						alt="3D image"
					/>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
