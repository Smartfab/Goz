import React from "react";
import StdImage from "../atoms/StdImage";

interface Props {
	title: string;
	image: string;
	alt: string;
}
export default function ProductCard({ title, image, alt }: Props) {
	return (
		<div className="flex pt-4 flex-col justify-center items-center">
			<StdImage
				className="mb-2 hover:scale-110 hover:transition-all hover:duration-500 ease-in "
				src={image}
				width="110"
				height="75"
				alt={alt}
			/>
			<p className="text-sm text-center">{title}</p>
		</div>
	);
}
