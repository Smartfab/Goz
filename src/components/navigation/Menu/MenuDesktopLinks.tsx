import { Ard } from "@/assets/icons";
import StdImage from "@/components/atoms/StdImage";
import React from "react";
import useToggle from "@/hooks/useToggle";

interface MenuDesktopProps {
	text: string;
	className?: string;
}
export default function MenuDesktopLinks({
	text,
	className,
}: MenuDesktopProps) {
	const [dropDown, toggleDropDown] = useToggle();

	return (
		<>
			<div className={`flex items-center space-x-1 justify-between `}>
				<a
					href="#"
					className="text-xs hover:text-darkGrayishBlue hover:underline"
					onClick={toggleDropDown}
				>
					{text}
				</a>
				<StdImage
					className="w-1/2"
					src={Ard}
					width="16"
					height="16"
					alt="Arrow-down"
				/>
			</div>
			<div
				className={` flex flex-col absolute top-9 text-xs justify-center items-center border-2 ${
					!dropDown && "hidden"
				} `}
			>
				<div className="border-b-2 w-32 text-center py-1 hover:bg-primaryBlue hover:text-white">
					<a className="text-xs" href="#">
						Admin Portal
					</a>
				</div>
				<div className="border-b-2 w-32 text-center py-1 hover:bg-primaryBlue hover:text-white">
					<a className="text-xs" href="#">
						Healthcare Portal
					</a>
				</div>
				<div className="border-1 w-32 text-center py-1 hover:bg-primaryBlue hover:text-white">
					<a className="text-xs" href="#">
						Broker
					</a>
				</div>
			</div>
		</>
	);
}
