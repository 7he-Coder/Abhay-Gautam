import { FaRocketchat } from "react-icons/fa";
const ChatBot = () => {
	return (
		<>
			<div className="chatBot fixed bottom-20 md:bottom-2 right-1 z-[999999] border border-jet-1 rounded-full animate-bounce p-2 md:p-3 xl:p-4">
				<div className="size-full">
					<span className="text-SecondaryPara">
						<a href="#">
							<FaRocketchat />
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export default ChatBot;
