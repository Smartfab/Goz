import React from "react";
import FooterLinks from "./FooterLinks";
import Logo from "@/components/atoms/Logo";
import Socios from "./Socios";

const Footer = () => {
	return (
		<>
			<footer id="#footer">
				<div className="p-0 bg-secondaryBlue flex flex-col text-secondaryWhite justify-center items-center sm:px-2">
					<div className="flex flex-col  justify-center space-y-6 mt-16 mb-8 items-center sm:flex-row lg:space-x-32  md:space-x-6 sm:space-x-6 ">
						<Logo type={"white"} />
						<div>
							{/* Footer links on mobile screen */}
							<ul className="sm:hidden ">
								<FooterLinks />
							</ul>

							{/* Footer links at larger screen sizes */}
							<ul className="hidden sm:flex justify-center items-center flex-wrap sm:w-96 sm:space-x-20">
								<FooterLinks />
							</ul>
						</div>
						<div className="flex flex-col sm:justify-center sm:items-start">
							{/* Contact number and Email */}
							<h5 className="my-5 text-center">+234 800 000 100</h5>
							<p className="mb-8 text-center">support@goziri.com</p>
							{/* Social media icons */}
							<Socios />
						</div>
					</div>
					{/* Copyright */}
					<h6 className="mt-1 text-xs sm:text-sm text-center mb-10">
						&copy; Goziri 2023. All rights reserved
					</h6>
				</div>
			</footer>
		</>
	);
};

export default Footer;
