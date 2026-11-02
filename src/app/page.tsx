import Link from "next/link";

// External links open in a new tab: the site is a hub, so leaving it should
// never cost the reader their place here. Internal routes stay in-tab.
const NEW_TAB = { target: "_blank", rel: "noreferrer noopener" } as const;

const PROJECTS = [
	{
		href: "https://vobes.jyz.land",
		title: "Vobes",
		sub: "A project management desktop app for makers who prefer quiet tools over noisy dashboards.",
		cta: "Open Vobes →",
	},
	{
		href: "https://tool.jyz.land",
		title: "jyz",
		sub: "One config file, and a CLI that behaves as whatever package manager a project already uses.",
		cta: "Open jyz →",
	},
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
				<h1 className="hero-heading">Yizhou Jiang</h1>
				<p className="hero-sub">
					I build small, quiet tools for people who work with AI
					coding agents: command-line utilities, docs, and the
					occasional desktop app.
				</p>
				<div className="hero-links">
					<Link
						className="hero-link"
						href="https://github.com/JeffreyJYZ"
						{...NEW_TAB}
					>
						GitHub
					</Link>
					<Link className="hero-link" href="/about">
						About
					</Link>
				</div>
			</section>

			<div className="section-list">
				{PROJECTS.map((project) => (
					<Link
						key={project.href}
						href={project.href}
						className="section block"
						{...NEW_TAB}
					>
						<div className="mx-auto max-w-xl text-center">
							<h2 className="section-heading">{project.title}</h2>
							<p className="section-sub">{project.sub}</p>
							<p className="section-cta">{project.cta}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
