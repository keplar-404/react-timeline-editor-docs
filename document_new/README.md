# `@keplar-404/react-timeline-editor`

A powerful React-based component library for quickly building comprehensive timeline animation and video editors.

> **Note:** This package is built on top of and derived from [@xzdarcy/react-timeline-editor](https://github.com/xzdarcy/react-timeline-editor), so all credit for the original fundamental engine and architecture goes to [@xzdarcy](https://github.com/xzdarcy). This repository is a heavily extended fork introducing major custom capabilities by [@keplar-404](https://github.com/keplar-404).

## Introduction

This documentation covers everything from basic timeline usage to the advanced engine integrations added by `@keplar-404`.

### Key Features

- **Original Features:** Scalable timeline zooming, CSS grid snapping, auxiliary snapping lines, action block dragging and rendering.
- **New Capabilities:**
  - **Independent Engine (`@keplar-404/timeline-engine`):** The engine logic has been cleanly separated from the React DOM for use in headless or alternative environments.
  - **Row Drag-and-Drop Sorting:** Native ability to drag and reorder entire track rows.
  - **Block Preview Rendering:** A robust custom preview layout mechanism for action blocks.
  - **Cut Block Mechanism:** A built-in feature set to slice and split timeline action blocks dynamically.

## Documentation Index

### [1. Introduction & Setup](./1-Introduction/)

- [01. Getting Started](./1-Introduction/01-Getting-Started.md)
- [02. Props & Data Structures](./1-Introduction/02-Editor-Props-and-Data.md)

### [2. Basic Features (Original Capabilities)](./2-Basic-Features/)

- [01. Basic Usage](./2-Basic-Features/01-Basic-Usage.md)
- [02. Scale Customization](./2-Basic-Features/02-Scale-Customization.md)
- [03. Action Configuration](./2-Basic-Features/03-Action-Config.md)
- [04. Custom Styling (Pure CSS)](./2-Basic-Features/04-Custom-Style.md)
- [05. Grid Snapping](./2-Basic-Features/05-Grid-Snap.md)
- [06. Auxiliary Line Snap](./2-Basic-Features/06-Auxiliary-Line-Snap.md)
- [07. Basic Events](./2-Basic-Features/07-Basic-Event.md)
- [08. Scroll Synchronization](./2-Basic-Features/08-Scroll-Sync.md)
- [09. Auto Scroll](./2-Basic-Features/09-Auto-Scroll.md)
- [10. Transport Bar Controls](./2-Basic-Features/10-Transport-Bar.md)
- [11. Loop Zone Overlay](./2-Basic-Features/11-Loop-Zone.md)

### [3. Custom Advanced Features (Fork Additions)](./3-Custom-Features/)

- [01. Row Drag-and-Drop Sorting](./3-Custom-Features/01-Row-Drag-Sorting.md)
- [02. Cut Block Slicing](./3-Custom-Features/02-Cut-Block.md)
- [03. Custom Run Block Preview](./3-Custom-Features/03-Custom-Block-Preview.md)

### [4. The Standalone Engine](./4-Timeline-Engine/)

- [01. Engine Introduction](./4-Timeline-Engine/01-Engine-Intro.md)
- [02. Engine APIs](./4-Timeline-Engine/02-Engine-API.md)
