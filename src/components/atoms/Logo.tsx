import React from "react";
import StdImage from "./StdImage";
import { Goz } from "@/assets/icons";
import { GozWhite } from "@/assets/icons";

interface Props {
	type: "blue" | "white";
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
}
export default function Logo({ alt, type, width = 130, height = 90 }: Props) {
	return (
		<div>
			<StdImage
				className="mb-2"
				src={type === "blue" ? Goz : GozWhite}
				width={width}
				height={height}
				alt={alt || "Goziri Logo"}
			/>
		</div>
	);
}
