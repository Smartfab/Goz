"use client";
import {
	Fb30,
	Fm,
	Md,
	Comm,
	Cust,
	Pp,
	Pers,
	Ret,
	Safe,
	Stud,
	Tel,
	Goz,
	Ard,
	Corp,
	App,
	Gop,
	ApS,
	Ins,
	Ig,
	Twt,
	In,
	Med,
} from "@/assets/icons";
import Footer from "@/components/navigation/Footer/Footer";

import Products from "@/components/home/Products";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import WhyGoziri from "@/components/home/WhyGoziri";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import MenuMobile from "@/components/navigation/Menu/MenuMobile";
import MenuDesktop from "@/components/navigation/Menu/MenuDesktop";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen p-0">
			<nav className="relative container px-5 my-7">
				<div className="flex items-center justify-between">
					<MenuMobile />
					<div>
						<button className="text-xs sm:hidden bg-primaryBlue rounded-lg text-white py-2 px-4 hover:scale-110 hover:transition-all hover:duration-150 ease-out hover:ease-in ">
							Sign Up
						</button>
					</div>
					<MenuDesktop />
				</div>
			</nav>
			<Hero />
			<Products />
			<WhyGoziri />
			<DownloadAppSection />
			<HowItWorks />
			<Footer />
		</main>
	);
}

{
	/* <StdImage
								className="mb-2 hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
								src={Fb30}
								width="20"
								height="20"
								alt="Facebook"
							/>
							<StdImage
								className="mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
								src={Twt}
								width="20"
								height="20"
								alt="Twitter"
							/>
							<StdImage
								className="mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
								src={Med}
								width="20"
								height="20"
								alt="Medium"
							/>
							<StdImage
								className="mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
								src={Ig}
								width="20"
								height="20"
								alt="Instagram"
							/>
							<StdImage
								className="mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
								src={In}
								width="20"
								height="20"
								alt="Linkedin"
							/> */
}

// <li>
// 									<a className="hover:underline" href="#">
// 										About Us
// 									</a>
// 								</li>
// 								<li>
// 									<a className="hover:underline" href="#">
// 										FAQ
// 									</a>
// 								</li>
// 								<li>
// 									<a className="hover:underline" href="#">
// 										Blog
// 									</a>
// 								</li>
// 								<li>
// 									<a className="hover:underline" href="#">
// 										Terms & Conditions
// 									</a>
// 								</li>
// 								<li>
// 									<a className="hover:underline" href="#">
// 										Cookie policy
// 									</a>
// 								</li>
// 								<li>
// 									<a className="hover:underline" href="#">
// 										Privacy policy
// 									</a>
// 								</li>
