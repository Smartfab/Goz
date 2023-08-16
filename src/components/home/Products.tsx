import { Stud, Ret, Comm, Fm, Corp, Pers } from "@/assets/icons";
import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";

export default function Products() {
	return (
		<section id="hero" className="flex flex-col items-center">
			<div className="container sm:px-7 px-8 md:space-x-2 mt-7 justify-between items-center flex flex-wrap">
				<ProductCard title={"Student"} image={Stud} alt="Student" />
				<ProductCard title={"Corporate"} image={Corp} alt="Corporate" />
				<ProductCard title={"Retirement"} image={Ret} alt="Retirement" />
				<ProductCard title={"Community"} image={Comm} alt="Community" />
				<ProductCard title={"Family"} image={Fm} alt="Family" />
				<ProductCard title={"Personal"} image={Pers} alt="Family" />
			</div>
			<Button className="hidden h-full sm:block text-sm border border-primaryBlue bg-white text-primaryBlue md:px-5 md:py-1 sm:px-3 sm:py-1 mt-14 hover:transition-all hover:duration-350 hover:bg-primaryBlue hover:text-white">
				Request a Quote
			</Button>
		</section>
	);
}
