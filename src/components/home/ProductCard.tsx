import React from "react";
import StdImage from "../atoms/StdImage";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

interface Props {
	title: string;
	image: string;
	alt: string;
}
export default function ProductCard({ title, image, alt }: Props) {
	return (
		<div className="flex pt-4 flex-col justify-center items-center">
			<Card className="border-0">
				<CardContent>
					<StdImage
						className="hover:scale-110 hover:transition-all hover:duration-500 ease-in"
						src={image}
						width="110"
						height="75"
						alt={alt}
					/>
				</CardContent>
				<CardFooter className="text-sm justify-center items-center">
					<p>{title}</p>
				</CardFooter>
			</Card>
		</div>
	);
}
