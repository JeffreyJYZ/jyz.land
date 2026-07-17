import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					background: "#0a0a0a",
					color: "#ededed",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 18,
					fontWeight: 900,
					letterSpacing: -1,
					fontFamily: "monospace",
					border: "1px solid #3e3e3e",
					borderRadius: 8,
				}}
			>
				J
			</div>
		), size
	);
}
