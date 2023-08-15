import React from "react";
import StdImage from "../atoms/StdImage";

interface WhyGoziriItemProps {
	src: string;
	alt: string;
}
export default function WhyGoziriItem({ src, alt }: WhyGoziriItemProps) {
	return (
		<div>
			<StdImage
				src={src}
				className="mb-2 w-full sm:w-4/5 hover:scale-110 hover:transition-all hover:duration-500 ease-in"
				width="90"
				height="30"
				alt={alt}
			/>
			{/* <h6 className="text-xs self-start s">{text}</h6> */}
		</div>
	);
}
