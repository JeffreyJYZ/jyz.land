import Link from "next/link";
import { HeroWindow } from "@/ui/hero-window";

const DOCS = [
	{
		href: "https://quarry.jyz.land",
		title: "Quarry",
		sub: "Documentation for Quarry, the desktop workbench for agent CLIs.",
		cta: "Read the docs →",
	},
	{
		href: "https://cmdtools.jyz.land",
		title: "cmdcode tools",
		sub: "Docs and pricing for cmduse, ocuse, arkuse, mpc and reqshape.",
		cta: "Open the docs →",
	},
	{
		href: "https://aiclient.jyz.land",
		title: "AI Client OSS",
		sub: "The open-source desktop client notes, and what shipped when.",
		cta: "Open the site →",
	},
];

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero-copy">
					<h1 className="hero-heading">Welcome to JYZ Land</h1>
					<p className="hero-sub">
						A quiet corner of the internet. Come back later for
						updates, notes, and small experiments.
					</p>
					<div className="command-box">
						<div className="command-tabs">
							<span className="command-tab is-active">bun</span>
						</div>
						<p className="command-code">bun add -g jyz-tool</p>
					</div>
				</div>
				<div className="hero-shot">
					<HeroWindow />
				</div>
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

			{DOCS.map((doc) => (
				<a key={doc.href} href={doc.href} className="section block">
					<div className="mx-auto max-w-xl text-center">
						<h2 className="section-heading">{doc.title}</h2>
						<p className="section-sub">{doc.sub}</p>
						<p className="section-cta">{doc.cta}</p>
					</div>
				</a>
			))}
		</>
	);
}
