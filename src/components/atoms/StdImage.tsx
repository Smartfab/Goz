import React from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {}
export default function StdImage(props: Props) {
	return (
		<div>
			<Image {...props} alt="" />
		</div>
	);
}
