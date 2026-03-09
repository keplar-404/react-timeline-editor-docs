# Timeline Editor Documentation Design

## Overview

The goal is to migrate and enhance the existing `document/docs/en` folder into the Fumadocs `content/docs/timeline-editor` directory.
The core requirement is to create a "funnel-like" learning experience for newcomers, guiding them from basic installation to advanced features progressively.

## Structure: The Learning Funnel

Instead of just grouping by "intro" and "editor", we will structure the sidebar to guide the user:

### 1. Getting Started (The Top of the Funnel)

- **Introduction**: Briefly clear value proposition. Must include explicit credits to the original package owner but highlight the new extra features of `@keplar-404/react-timeline-editor`.
- **Installation & Setup**: Simple, copy-pasteable commands using the `InstallationCommands` custom component.

### 2. Core Concepts (The Middle)

- **Basic Usage**: A simple, copy-pasteable working example (migrated from `101-basic.mdx`).
- **Data Interface**: Explaining the data structure required to power the timeline (migrated from `3-data-interface.mdx`).
- **Props Overview**: Key props to know to get things working right away (migrated from `2-props.mdx`).

### 3. Advanced Guides (Deep Dive)

- **Drag & Drop**: (migrated from `111-drag.mdx`)
- **Scroll & Sync**: (combining `109-scroll-sync.mdx` and `110-auto-scroll.mdx` or keeping separate depending on length)
- **Customization & Styling**: (combining `104-custom-style.mdx`, `102-scale-customization.mdx`)
- **Action Config**: (migrated from `103-action-config.mdx`)
- **Snapping**: (combining `105-grid-snap.mdx` and `106-auxiliary-line-snap.mdx`)
- **Events & Callbacks**: (combining `107-callback.mdx` and `108-basic-event.mdx`)

## UI Enhancements (Fumadocs)

- **Steps Component**: Used in the Getting Started guide.
- **Callouts (Alerts)**: Prominently displayed on the Introduction page for credits.
- **Cards**: Placed at the bottom of pages to guide the user to the "next step" in the funnel.

## Package Name adjustments

Every instance in the old docs that installed or imported the original package will be updated to use:
`@keplar-404/react-timeline-editor`
