import cta from "../assets/IMAGES/cta.png";

const CTA = () => {
	return (
		<>
			<section className="container mx-auto px-4 md:px-16">
				<div className="CtaBar w-full border-y-2 border-eerie-black">
					<div className="md:flex items-center justify-between py-6">
						{/* leftside */}
						<div className="md:grid grid-cols-5 items-center">
							<div className="w-full">
								<img src={cta} alt="cta image" />
							</div>
							<div className="mt-4 sm:mt-2 md:mt-0 md:ml-8 col-span-3 *:text-balance leading-[1.125] text-PrimaryPara font-ff-2 font-bold text-right md:text-left">
								<h6 className="*:text-radical-blue">
									I'm A Professional <span>Web Developer</span> And{" "}
									<span>Designer</span> Based In Uttar Pradesh INDIA.
								</h6>
							</div>
						</div>

						{/* right side  */}
						<div className="flex gap-4 *:place-items-center mt-10 md:mt-0">
							<div className="box1 w-52 h-28 bg-yellow-700">
								<h6>15K year+ experience</h6>
							</div>
							<div className="box3 w-52 h-28 bg-red-700">
								<h6>10K happy clients</h6>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
