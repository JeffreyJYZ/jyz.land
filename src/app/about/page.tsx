import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About — JYZ Land",
	description: "About Yizhou Jiang, a developer and student.",
};

export default function AboutPage() {
	return (
		<section className="section">
			<h2 className="section-heading">About</h2>
			<p className="section-sub">
				I&rsquo;m Yizhou Jiang: developer and student. This site is a
				work in progress. Find me on{" "}
				<a
					className="link"
					href="https://github.com/JeffreyJYZ"
					target="_blank"
					rel="noopener"
				>
					GitHub
				</a>{" "}
				or{" "}
				<a
					className="link"
					href="https://reddit.com/user/Common-Upstairs1656"
					target="_blank"
					rel="noopener"
				>
					Reddit
				</a>
				.
			</p>
		</section>
	);
}
