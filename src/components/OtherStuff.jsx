import { theme } from "../constant";

const OtherStuff = () => {
	return (
		<>
			<div className="themeChanger">
				<ul className="fixed top-20 right-0 z-[999999] border border-jet-1 *:py-4 [&_li]:px-2 xl:[&_li]:px-4 [&_a]:text-SecondaryPara">
					{theme.map((item, index) => (
						<li key={index}>
							<a href={item.href}>{item.label}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default OtherStuff;
