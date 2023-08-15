import React from "react";
import MenuMobileLinks from "./MenuMobileLinks";
import useToggle from "@/hooks/useToggle";
import Logo from "@/components/atoms/Logo";

function MenuMobile() {
	const [menuButton, toggleMenuButton] = useToggle();

	return (
		<div className="flex space-x-12 sm:space-x-0 items-start justify-center">
			<div>
				<button
					id="menu"
					className={`btn block absolute hamburger lg:hidden md:hidden sm:hidden focus:outline-none mt-1 ${
						menuButton && "open"
					}`}
					onClick={toggleMenuButton}
				>
					<span className="hamburger-top"></span>
					<span className="hamburger-middle"></span>
					<span className="hamburger-bottom"></span>
				</button>
				<div
					id="menu-nav"
					className={`absolute bg-white top-12 left-0 flex flex-col  self-start space-y-0  ${
						!menuButton && "hidden"
					}`}
				>
					<div>
						<MenuMobileLinks text="Suites" />
						<MenuMobileLinks text="Products" />
						<MenuMobileLinks text="Support" />
						<MenuMobileLinks text="Contact Us" />
					</div>
					<div className="flex justify-between space-x-40 items-center border-t border-r border-2 px-4 py-2">
						<a className="text-normalGrey ml-5" href="#">
							Login
						</a>
					</div>
				</div>
			</div>
			<div>
				{/* Goziri header Logo */}
				<Logo type="blue" />
			</div>
		</div>
	);
}

export default MenuMobile;
