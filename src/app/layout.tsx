import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontLora, fontSFMono, fontSFPro } from "@/ui/fonts";

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
			data-scroll-behavior="smooth"
			className={`${fontSFPro.variable} ${fontLora.variable} ${fontSFMono.variable} antialiased`}
		>
			<body>
				<div className="site-shell">
					<div className="site-container">
						<nav className="site-nav">
							<Link className="site-nav-brand" href="/">
								JYZ&nbsp;Land
							</Link>
							<div className="site-nav-links">
								<a
									className="site-nav-link"
									href="https://github.com/JeffreyJYZ"
									target="_blank"
									rel="noopener"
								>
									GitHub
								</a>
								<Link className="site-nav-link" href="/about">
									About
								</Link>
							</div>
						</nav>
						<hr className="sep" />
						<main>{children}</main>
						<hr className="sep" />
						<footer className="site-footer">
							<div className="site-footer-links">
								<a
									className="site-nav-link"
									href="https://github.com/JeffreyJYZ"
									target="_blank"
									rel="noopener"
								>
									GitHub
								</a>
							</div>
							<span>© 2026 Yizhou Jiang</span>
						</footer>
					</div>
				</div>
			</body>
		</html>
	);
}
