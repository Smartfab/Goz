import React from "react";
import { Fb30, Twt, Med, Ig, In } from "@/assets/icons";
import StdImage from "../../atoms/StdImage";

interface Socio {
	className?: string;
	src: string;
	alt: string;
}

export default function Socios() {
	const socialPlatforms: Socio[] = [
		{ src: Fb30, alt: "Facebook" },
		{ src: Twt, alt: "Twitter" },
		{ src: Med, alt: "Medium" },
		{ src: Ig, alt: "Instagram" },
		{ src: In, alt: "Linkedin" },
	];
	return (
		<div className="flex justify-center space-x-4 items-center ">
			{socialPlatforms.map((platform, index) => {
				return (
					<StdImage
						key={index}
						className={`mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer`}
						src={platform.src}
						width={20}
						height={20}
						alt={platform.alt}
					/>
				);
			})}
		</div>
	);
}

{
	/* <StdImage
	className="mb-2  hover:scale-110 hover:transition-all hover:duration-100 ease-out hover:ease-in cursor-pointer"
	src={Twt}
	width="20"
	height="20"
	alt="Twitter"
/>; */
}
