import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="hero">
				<h1 className="hero-heading">Welcome to JYZ Land</h1>
				<p className="hero-sub">
					A quiet corner of the internet. Come back later for updates,
					notes, and small experiments.
				</p>
			</section>

			<Link href="/vobes" className="section block">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="section-heading">Vobes</h2>
					<p className="section-sub">
						A project management desktop app for makers who prefer
						quiet tools over noisy dashboards.
					</p>
					<p className="section-cta">Open Vobes →</p>
				</div>
			</Link>
		</>
	);
}
