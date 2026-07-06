import type { Metadata } from "next";
import "./globals.css";
import { fontSFPro, fontLora, fontSFMono } from "@/ui/fonts";

export const metadata: Metadata = {
	title: "JYZ Land",
	description:
		"I am Yizhou Jiang, a developer and student, and this is my personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${fontSFPro.variable} ${fontLora.variable} ${fontSFMono.variable} antialiased`}
		>
			<body>
				<main className="min-h-dvh border-x-5 border-gray-800 bg-neutral-900 md:mx-50">
					{children}
				</main>
			</body>
		</html>
	);
}
