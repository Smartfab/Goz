import React from "react";
import StdImage from "../atoms/StdImage";
import { Ins } from "@/assets/icons";

export default function HowItWorks() {
	return (
		<section id="#works" className="p-0 bg-bgLightGrey">
			<div className="flex flex-col justify-center mt-16 mb-8 items-center">
				<div>
					<h2 className="border-b-2 mb-4 border-b-primaryRed text-primaryBlue pb-2 font-bold sm:text-2xl">
						How it Works
					</h2>
				</div>
				<StdImage
					className="mb- sm:w-4/5 mx-auto"
					src={Ins}
					width="300"
					height="180"
					alt="Insurance Policy Video"
				/>
			</div>
		</section>
	);
}
