import HeroSection from "./components/HeroSection";
import OtherStuff from "./components/OtherStuff";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CTA from "./components/CTA";

const App = () => {
	return (
		<>
			<Navbar />
			<OtherStuff />
			<ChatBot />
			<HeroSection />
			<CTA />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<About />
			</div>
		</>
	);
};

export default App;
