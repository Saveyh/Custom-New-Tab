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

## References

Use `references/` only when a task needs visual fidelity for a widget. Use `MISSION_WIDGETS_DASHBOARD.md` when a task needs product intent or implementation history.

## Practical Summary

If you start cold on this repository, assume:

- this is a new-tab browser extension
- almost all logic lives in `custom-new-tab/app.js`
- styling lives in `custom-new-tab/styles.css`
- widgets, dashboards, and link sections are already implemented
- persistence and migration safety matter more than architectural purity
