import React from "react";
import { Safe, Cust, Pp, Md, SafeM, CustM, PpM, MdM } from "@/assets/icons";
import WhyGoziriItem from "./WhyGoziriItem";
export default function WhyGoziri() {
	return (
		<section id="#why__goziri" className="bg-bgGrey pt-2 mt-10">
			<div className="container flex flex-col space-y-10 mt-14 mb-8 justify-between items-center sm:flex-wrap">
				<div>
					<h2 className="border-b-2 border-b-primaryRed text-primaryBlue pb-2 font-bold sm:text-2xl">
						Why Goziri
					</h2>
				</div>
				{/* Why Goziri section on larger screen sizes */}
				<div className="hidden sm:flex sm:flex-row">
					<WhyGoziriItem src={Safe} alt="Safe and Secure" />
					<WhyGoziriItem src={Cust} alt="Support" />
					<WhyGoziriItem src={Pp} alt="Paperless" />
					<WhyGoziriItem src={Md} alt="mini-document" />
				</div>
				{/* Why Goziri on smaller screen sizes */}
				<div className="flex flex-col sm:hidden">
					<WhyGoziriItem src={SafeM} alt="Safe and Secure" />
					<WhyGoziriItem src={CustM} alt="Support" />
					<WhyGoziriItem src={PpM} alt="Paperless" />
					<WhyGoziriItem src={MdM} alt="mini-document" />
				</div>
			</div>
		</section>
	);
}
