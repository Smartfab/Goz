import React from "react";
import StdImage from "@/components/atoms/StdImage";
import { Ard } from "@/assets/icons";

interface MenuMobileProps {
	text: string;
}
function MenuMobileLinks({ text }: MenuMobileProps) {
	return (
		<div>
			<div className="flex justify-between space-x-40 items-center border-t border-r border-2 px-4 py-2">
				<a className="text-normalGrey ml-5" href="#">
					{text}
				</a>
				<StdImage
					className=""
					src={Ard}
					width="11"
					height="8"
					alt="Arrow-down"
				/>
			</div>
		</div>
	);
}

export default MenuMobileLinks;
