import NextLink from "next/link";
import React from "react";

interface LinkItem {
	className?: string;
}

export default function FooterLinks({ className }: LinkItem) {
	const links = [
		"About Us",
		"FAQ",
		"Blog",
		"Terms and Conditions",
		"Cookie policy",
		"Privacy policy",
	];
	return (
		<div className="flex justify-center items-center space-x-5 sm:space-x-0  w-full flex-wrap  sm:grid sm:grid-cols-2 sm:gap-2">
			{links.map((link, index) => {
				return (
					<NextLink key={index} href="/" className="hover:underline">
						<li>{link}</li>
					</NextLink>
				);
			})}
		</div>
	);
}

// "flex sm:hidden justify-center items-center flex-wrap space-x-5 sm:w-72 sm:space-x-8 ";
