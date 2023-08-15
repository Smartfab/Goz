import React from "react";
import StdImage from "../atoms/StdImage";
import { ApS, Gop } from "@/assets/icons";

interface AppType {
	type: "GooglePlay" | "AppleStore";
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
}
export default function DownloadApp({
	type,
	width = 120,
	height = 30,
	alt,
}: AppType) {
	return (
		<div>
			<StdImage
				className="mb-2 "
				src={type === "GooglePlay" ? Gop : ApS}
				width={width}
				height={height}
				alt={alt || "Goziri download"}
			/>
		</div>
	);
}
