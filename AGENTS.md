# AGENTS.md

## Project Purpose

This repository contains a browser new-tab extension.

When installed, opening a new tab shows the custom page in `custom-new-tab/newtab.html` instead of the browser default. The product is a **local, customizable dashboard**, not a server-backed app.

Core user-facing features:

- internal dashboards (`Travail`, `Universite`, `Loisirs`, `Tout`)
- draggable widgets
- editable link lists
- local persistence
- dark minimal UI

## Repository Map

- `custom-new-tab/manifest.json`: extension manifest, declares the new-tab override
- `custom-new-tab/newtab.html`: minimal page shell
- `custom-new-tab/app.js`: main application logic, rendering, state, storage, dialogs, drag and drop, widget behavior
- `custom-new-tab/styles.css`: global styling and responsive layout
- `custom-new-tab/assets/icon.png`: extension icon
- `references/`: visual references for several widgets
- `MISSION_WIDGETS_DASHBOARD.md`: product/history document describing the widget direction

## Current Public Release State

The project has already reached its first official public release: `v1.0.0`.

Agents must not treat this repository as an unreleased prototype anymore. Future versioning decisions should be made relative to the existing `v1.0.0` release.

Practical consequence:

- small internal changes normally stay as commits only
- user-facing fixes may become patch versions (`v1.0.1`, `v1.0.2`, etc.)
- user-facing feature additions may become minor versions (`v1.1.0`, `v1.2.0`, etc.)
- breaking or major product/architecture changes may become major versions (`v2.0.0`, etc.)

## How The App Works

- `manifest.json` overrides the browser new-tab page with `newtab.html`
- `newtab.html` loads a lightweight shell and `app.js`
- `app.js` owns nearly all behavior
- data is persisted in `chrome.storage.local`, with `localStorage` fallback

Important persisted constants in `app.js`:

- `STORAGE_KEY = "navigateur.newtab.v1"`
- `DATA_VERSION = 5`

If data structures change, preserve migration behavior.

## Data Model To Understand First

The persisted state includes at least:

- `selectedEngine`
- `selectedDashboard`
- `dashboards`
- `widgets`
- `sections`
- `version`

Important architectural detail:

- legacy link content still lives in `sections`
- link-list widgets reference sections through `config.sectionId`
- the code reconciles `sections` and `widgets` so old link data continues to render

Do not remove this compatibility layer unless you also replace the migration path safely.

## Current Widget Model

The codebase is already widget-oriented. Existing widget types include:

- `search`
- `link-list`
- `spacer`
- `todo`
- `quick-note`
- `qr-code`
- `markdown-editor`
- `text-diff`
- `calendar`
- `kanban`
- `daily-quiz`
- `image-compression`
- `uptime-monitor`
- `browser-session`

`search` is a system widget. `link-list` is the compatibility bridge for the original section-based dashboard.

## Constraints

Preserve these behaviors unless a task explicitly changes them:

- the new-tab override
- dashboard navigation
- search engine picker
- local persistence
- existing sections and links
- data migrations
- drag and drop
- dark compact visual language

This project should generally stay:

- client-side
- local-first
- framework-free unless there is a strong reason otherwise
- free of unnecessary backend or external-service dependencies

## Working Guidance For Agents

Before making changes:

1. read `custom-new-tab/manifest.json`
2. read `custom-new-tab/newtab.html`
3. inspect in `custom-new-tab/app.js`:
   - `defaultData`
   - `widgetDefinitions`
   - `state`
   - `init()`
   - `render()`
   - `migrateData()`
   - storage helpers
4. read `custom-new-tab/styles.css`

When editing:

- prefer extending the existing architecture over rewriting it
- keep widget behavior and storage changes backwards-compatible
- verify whether a capability already exists in `app.js` before adding a second implementation
- keep UI changes consistent with the existing dark style
- keep changes focused on the requested task
- avoid unrelated refactors unless they are necessary for the requested change

## Versioning, Releases, And Packages

When an agent changes this project, it should treat versioning and public releases as product decisions, not automatic steps.

The repository already has a first official release: `v1.0.0`. Do not use pre-`v1.0.0` language unless the user explicitly asks to discuss historical releases.

### Versioning Guidance

Use semantic versioning style for public versions:

- `PATCH` (`v1.0.1`, `v1.0.2`, etc.): backwards-compatible bug fixes or small user-facing corrections after a published release
- `MINOR` (`v1.1.0`, `v1.2.0`, etc.): backwards-compatible user-facing features, new widgets, or meaningful improvements
- `MAJOR` (`v2.0.0`, etc.): breaking changes, major product direction changes, storage resets, or large architecture changes that affect existing users

Do not bump the project version for every commit.

Do not create a Git tag for every commit.

Do not create a GitHub release for every commit.

Do not create a new distributable zip for every minor internal change.

If extension behavior changes materially and the change is intended for public distribution, make sure `custom-new-tab/manifest.json` version stays aligned with the intended release version.

If persisted data structures change, review whether `DATA_VERSION` or migration logic must also change.

If a change affects stored user data, preserve backwards compatibility or add a safe migration path.

### Small-Change Policy

Small changes usually need only a normal commit and push.

Examples of changes that usually need only a commit:

- removing an unwanted scrollbar
- adjusting margins, spacing, colors, or typography
- fixing a small responsive layout issue
- cleaning up code without changing behavior
- improving comments or internal naming
- fixing a minor visual bug that does not affect installability or the public release state
- changing purely internal implementation details without changing user-visible behavior

For these changes, do not automatically:

- bump `manifest.json` version
- create a Git tag
- create a GitHub release
- create or attach a new zip package

### When To Recommend A Patch Release

Recommend a patch release when the change fixes something meaningful for users of the already published `v1.0.0` release.

Examples:

- a widget is visibly broken
- saved data fails to load
- drag and drop stops working
- dashboard navigation breaks
- browser installation fails
- layout is broken enough to affect normal use
- a published release contains a regression

Patch release example:

- current release: `v1.0.0`
- fix committed: broken widget rendering
- next public release: `v1.0.1`

### When To Recommend A Minor Release

Recommend a minor release when the change adds a meaningful user-facing capability while remaining compatible with existing data.

Examples:

- adding a new widget type
- adding a new dashboard feature
- improving import/export behavior
- adding a new customization option
- adding a meaningful browser-session capability
- improving the dashboard system without breaking existing dashboards

Minor release example:

- current release: `v1.0.0`
- feature committed: new weather widget
- next public release: `v1.1.0`

### When To Recommend A Major Release

Recommend a major release only for large or breaking changes.

Examples:

- removing or replacing the existing storage model
- dropping compatibility with old `sections` data
- changing the extension's core purpose
- introducing a backend requirement
- migrating from a local-first app to a server-backed app
- rewriting the architecture in a way that changes user expectations or breaks existing data

Major release example:

- current release: `v1.x.x`
- breaking storage redesign committed
- next public release: `v2.0.0`

### Release Guidance

Do not create or recommend a new GitHub release for every small commit.

Create or recommend a release when the repository reaches a meaningful public milestone.

Because `v1.0.0` already exists, future releases should normally be one of:

- patch release for meaningful fixes
- minor release for new compatible features
- major release for breaking changes

Release notes should clearly separate:

- fixes
- new features
- changed behavior
- migration notes, if any
- known limitations, if any

Do not mark normal post-`v1.0.0` releases as pre-releases unless the user explicitly wants an experimental release channel.

### Package Guidance

This project does not need npm or another package registry.

The useful distributable package is a `.zip` of the `custom-new-tab/` folder.

Prefer attaching that zip as a GitHub release asset when the user wants a friendlier install path for non-technical users.

Do not package the whole repository when the goal is browser installation; the extension folder is the installable unit.

Do not create a new package for every small commit. Package only when creating or preparing a meaningful public release.

## Commit Guidance

Use clear, small commits.

Prefer commit messages that describe the actual change:

- `Fix unwanted page scrollbar`
- `Improve widget spacing on narrow screens`
- `Add browser session restore widget`
- `Fix dashboard migration for legacy sections`

Do not use release-style commit messages unless the commit actually prepares a release.

Examples of release-preparation commits:

- `Prepare v1.0.1 release`
- `Update manifest version to 1.1.0`
- `Add release notes for v1.1.0`

## References

Use `references/` only when a task needs visual fidelity for a widget. Use `MISSION_WIDGETS_DASHBOARD.md` when a task needs product intent or implementation history.

## Practical Summary

If you start cold on this repository, assume:

- this is a new-tab browser extension
- the first official public release is already `v1.0.0`
- almost all logic lives in `custom-new-tab/app.js`
- styling lives in `custom-new-tab/styles.css`
- widgets, dashboards, and link sections are already implemented
- persistence and migration safety matter more than architectural purity
- small fixes usually need only a commit, not a version bump, tag, release, or package
