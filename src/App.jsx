import About from "./components/About";
import ChatBot from "./components/ChatBot";
import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import OtherStuff from "./components/OtherStuff";

const App = () => {
	return (
		<>
			<Navbar />
			<OtherStuff />
			<ChatBot />
			<HeroSection />
			<CTA />
			<div className="max-w-7xl mx-auto pt-20 px-6">{/* <About /> */}</div>
		</>
	);
};

export default App;
