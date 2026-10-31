<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, file structure may differ from training data. Read relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Deploy

- `vercel deploy --prod --yes` must target the project **jyz-land-landing** (`prj_Hk0xD3CZbd1WmVL9XmSbokAMKDps`), the one that owns the `www.jyz.land` alias. A checkout whose `.vercel/project.json` names `jyz.land` deploys to a different project and `www.jyz.land` keeps serving the old page — relink first.
- The docs sites linked from the landing page are `quarry.jyz.land` (alias onto the `quarry-docs` project), `cmdtools.jyz.land` and `aiclient.jyz.land`.
