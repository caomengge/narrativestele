# Narrative Stele Prototype 叙事碑原型

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

An interactive, multilingual web kiosk for a gallery exhibition at Zhihua Temple (智化寺), Beijing. Visitors encounter four historical witnesses through a branching dialogue experience rendered on physical "narrative steles."

**Live demo:** https://caomengge.github.io/narrativestele/

---

## Overview

Each stele presents a first-person narrative from one historical figure connected to Zhihua Temple. Visitors read dialogue lines, make choices, and follow branches — experiencing the temple's history through four distinct perspectives.

**Characters (in order):**

| Character | Role |
|-----------|------|
| Laurence Sickman 史克門 | American art curator, Nelson-Atkins Museum of Art |
| Liu Dunzhen 劉敦楨 | Chinese architectural historian |
| Shen Tingfang 沈廷芳 | Qing-dynasty official and poet |
| Wang Zhen 王振 | Ming-dynasty eunuch who founded Zhihua Temple |

---

## Features

- **Three languages** — English / 繁體中文 / 简体中文; switch at any time without restarting the dialogue
- **Branching dialogue** — step-based narrative with player choices that affect the path
- **Contextual images** — historical images appear and persist across relevant steps
- **Click-to-zoom** — tap any history image to open it in a fullscreen lightbox
- **Word-by-word animation** — dialogue text animates in word by word (90 ms/word for English, 40 ms/character for Chinese)
- **Character progression** — each stele ends with a button to proceed to the next witness

---

## File Structure

```
index.html    Main kiosk page (layout, styles, app logic)
scripts.js    All dialogue scripts and UI strings for all languages
images/       Images used during dialogues and on the menu screen
```

### `scripts.js`

Exports a global `SCRIPTS_DATA` object with three top-level keys (`en`, `zh`, `sc`). Each language contains four character blocks (`LS`, `LD`, `ST`, `WZ`) with:

- `name`, `portrait` — display name and portrait image path
- `startBtn`, `continueBtn`, `nextSteleBtn` / `restartBtn` — UI button labels
- `steps` — keyed object of dialogue steps; each step has:
  - `text` — line of dialogue
  - `image` *(optional)* — image to show in the history panel
  - `next` — key of the next step, or `"end"` to trigger the end state
  - `choices` *(optional)* — array of `{ label, next }` for branching

---

## Running Locally

Open `index.html` directly in a browser — no server required. `scripts.js` is loaded as a standard `<script>` tag so it works under `file://` as well as HTTP.

---

## Branches

| Branch | Description |
|--------|-------------|
| `master` | Stable build with scripts embedded in `index.html` |
| `scripts-json` | Scripts separated into `scripts.js` for easier content editing |
