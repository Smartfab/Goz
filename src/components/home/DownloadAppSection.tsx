import { App } from "@/assets/icons";
import StdImage from "../atoms/StdImage";
import DownloadApp from "./DownloadApp";

export default function DownloadAppSection() {
	return (
		<section id="appStore" className="bg-secondaryBlue px-0">
			<div className="flex flex-col justify-center items-center mb-5  sm:flex-row-reverse sm:px-5">
				<div>
					<StdImage
						className="mb-2 sm:w-3/4 mt-10"
						src={App}
						width="120"
						height="70"
						alt="Goziri App"
					/>
				</div>
				<div className="px-8 flex flex-col  justify-center items-center sm:justify-center sm:items-start">
					<div className="sm:mt-10">
						<h3 className="text-center text-2xl text-primaryWhite mt-4 mb-2 sm:text-left md:text-4xl lg:text-5xl ">
							Download Goziri App
						</h3>
						<p className="text-center sm:w-3/5 md:w-4/5 sm:text-left text-sm text-white mb-5">
							Take your Insurance policy everywhere you go. Download the Goziri
							app now. Its safe, secure, zero paper work with a 24hrs support
							system just for you.
						</p>
					</div>
					<div className="sm:flex sm:flex-row sm:space-x-4 sm:mt-10 md:mt-5">
						<DownloadApp type="GooglePlay" alt="Google Play" />
						<DownloadApp type="AppleStore" alt="Apple Store" />
					</div>
				</div>
			</div>
		</section>
	);
}
