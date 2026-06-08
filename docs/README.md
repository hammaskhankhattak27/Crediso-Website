# Crediso Redesign — docs

Documentation for the Crediso marketing site. Start here.

## Reading order

1. **[../AGENTS.md](../AGENTS.md)** (or **[../CLAUDE.md](../CLAUDE.md)** for Claude Code) — the entry point: what the project is, stack, commands, golden rules. Read first.
2. **[design.md](design.md)** — ⚠️ **binding** design system. Tokens, typography, layout primitives, component recipes, accessibility, and the full routing table. Read before adding or editing any page/section/component.
3. **[architecture.md](architecture.md)** — technical architecture: runtime flow, the `site.ts` IA single-source-of-truth, routing, navbar mega-menu, and step-by-step "how to add a page / section".
4. **[sections.md](sections.md)** — catalog of every page, section, and UI primitive with its file and role.

## At a glance

| Topic | Where |
|---|---|
| Colors, type, spacing, radii, `<Button>`, primitives | [design.md](design.md) |
| Routes & information architecture | [src/lib/site.ts](../src/lib/site.ts) (source of truth) · table in [design.md §9](design.md) · model in [architecture.md §2](architecture.md) |
| How routing/layout/scroll work | [architecture.md §1](architecture.md) |
| How to add a page or section | [architecture.md](architecture.md) (bottom) · [AGENTS.md](../AGENTS.md) (short) |
| What each section does | [sections.md](sections.md) |
| Service-page hero convention (shared per category) | [architecture.md §6](architecture.md) |

## Keeping docs honest

When you change a convention, route, token, or a section's purpose, **update the relevant doc in the same change**. The IA is generated from [src/lib/site.ts](../src/lib/site.ts), so routes/nav can't drift — but the prose tables here must be kept in sync by hand.
