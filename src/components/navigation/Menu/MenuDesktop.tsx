import StdImage from "@/components/atoms/StdImage";
import MenuDesktopLinks from "./MenuDesktopLinks";
import { Tel } from "@/assets/icons";

export default function MenuDesktop() {
	return (
		<div className="hidden sm:flex lg:space-x-8 sm:space-x-4 ">
			<div className="flex lg:space-x-16 sm:space-x-4">
				<div className="relative flex flex-col justify-center items-center">
					<MenuDesktopLinks text="Suites" />
				</div>

				<div className="relative flex flex-col justify-center items-center">
					<MenuDesktopLinks text="Products" />
				</div>
				<div className="relative flex flex-col justify-center items-center">
					<MenuDesktopLinks text="Support" />
				</div>
			</div>

			<div className="flex sm:space-x-3 lg:space-x-4">
				<StdImage
					className="md:w-2/3 sm:w-1/2 cursor-pointer"
					src={Tel}
					width="30"
					height="30"
					alt="Telephone"
				/>
				<button className="text-xs font-bold border border-primaryBlue bg-white text-primaryBlue hover:bg-primaryBlue hover:text-white lg:px-5 md:px-3 md:py-1 sm:px-3 sm:py-1">
					Log in
				</button>
				<button className="text-xs bg-primaryBlue text-white lg:px-5 md:px-3 md:py-1 sm:px-3 sm:py-1 font-bold">
					Register
				</button>
			</div>
		</div>
	);
}

{
	/* <div
						className={`flex absolute  top-9 flex-col text-xs justify-center items-center border-2 `}
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
					</div> */
}
