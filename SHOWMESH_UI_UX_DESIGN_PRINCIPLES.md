# Showmesh UI/UX and Web Design Principles

**Version:** 1.0  
**Status:** Product and design baseline  
**Date:** 15 July 2026  
**Applies to:** Showmesh desktop application, product website, product imagery, prototypes, and future design work

> Showmesh is a Windows-first realtime show automation system for theatre, concerts, immersive installations, and live events. Its interface must help an operator understand the show state, prepare the next event, and act safely under pressure.

---

## 1. Purpose of this document

This document consolidates the current Showmesh UI and UX direction into one implementation-ready reference. It is based on the latest operator-interface mockup, the HTML UI iterations, and the product decisions developed for the former **Intermission** concept.

From this point forward, **Showmesh** is the product name. Any `Intermission` labels in older mockups are historical and should be replaced when assets are updated.

This document has two jobs:

1. Define how the Showmesh application should look, behave, and communicate state.
2. Define which parts of that visual language should become the basis of the Showmesh website.

It is a design baseline, not a claim that every represented feature is already implemented.

---

## 2. Product identity

### 2.1 Product category

Showmesh should be positioned as **realtime show automation**, not merely as a media player and not as “QLab for Windows.” Cue-based playback is central, but the product model extends to native media, generative graphics, live parameters, control protocols, external engines, outputs, and future plugins.

### 2.2 Product promise

**Connect, automate and run the show.**

The interface should make that promise tangible:

- **Connect:** resources, outputs, OSC, MIDI, NDI, Spout, timecode, Unreal, Notch, TouchDesigner, DMX, HTTP, scripts, and future systems.
- **Automate:** actions, fades, parameter changes, triggers, transitions, routing, groups, and reusable structures.
- **Run:** a clear current cue, an unmistakable next cue, a dominant GO action, visible health, and safe recovery controls.

### 2.3 Product character

Showmesh should feel:

- professional without feeling bureaucratic;
- technical without becoming cryptic;
- dense without becoming noisy;
- powerful without appearing fragile;
- calm during normal operation and explicit when attention is required;
- native to a control room, but still approachable to a new operator.

The intended visual territory sits between the disciplined hierarchy of Linear, the spatial logic of Figma, the action-centric speed of Raycast, the information density of DaVinci Resolve, and the grouped property model of Unreal Engine. These are directional references, not templates to copy.

---

## 3. Users and operational context

Primary users include show operators, technical directors, designers, programmers, and technicians. Their conditions differ from ordinary productivity software:

- decisions may be made in seconds;
- the operator may be working in darkness;
- attention is divided between the application and a live stage;
- mistakes can become immediately visible or audible;
- project files can grow large and technically complex;
- the system may remain open for long rehearsals and performances;
- critical controls must remain reliable with a mouse, keyboard, or external trigger.

Therefore, Showmesh is not optimized for novelty or visual spectacle. It is optimized for **recognition, confidence, speed, and recoverability**.

---

## 4. Core design principles

### 4.1 Operator first

The most important question is always: **what does the operator need to know or do next?**

During playback, the interface prioritizes:

1. what is playing;
2. elapsed and remaining time;
3. what will happen next;
4. whether the system is healthy;
5. the next safe action.

Editing tools remain available, but they must not compete with live state.

### 4.2 Cue list is the primary workspace

Cues are the main show objects and the cue list is the primary mental model. The current show sequence must remain readable even when resources, actions, triggers, and properties become complex.

The cue list owns the central and largest area of the window. Side panels support it; they do not replace it.

### 4.3 State before decoration

Every high-contrast color, animation, rail, badge, and progress bar should communicate state. Decorative color weakens operational meaning and should be avoided.

The interface should remain visually quiet when everything is normal. It should become more explicit only when something is live, next, selected, warning, missing, disconnected, or unsafe.

### 4.4 Progressive disclosure

The cue list provides a scan-friendly summary. Expanding or selecting a cue reveals the details required for the current task. The inspector provides full configuration without forcing all parameters into every row.

Complexity should be available in layers:

1. show overview;
2. cue summary;
3. action summary;
4. editable properties;
5. advanced routing and diagnostics.

### 4.5 Calm density

Information density is useful in show control, but density must be structured. Prefer alignment, consistent columns, indentation, subdued metadata, and compact spacing over more containers and borders.

The target is not “minimal.” The target is **immediately scannable**.

### 4.6 Keyboard-first, pointer-complete

The complete core workflow must work with a keyboard. Pointer interaction remains clear and discoverable, but repeated operations should not require precise mouse travel.

Command search, shortcuts, cue navigation, GO, stop, edit, search, reorder, duplicate, and inspector traversal should all have defined keyboard behavior.

### 4.7 Reliability must be visible

The application should not merely be reliable; it should show enough evidence for the operator to trust it. Output mode, audio state, frame rate, connections, warnings, missing resources, and recent input activity should be visible without opening a diagnostic window.

### 4.8 Safe editing while running

Selection and editing must never be confused with firing a cue. The operator should be able to inspect or prepare another cue without losing the live context.

Current playback state, current selection, and next cue are separate concepts and require separate visual treatments.

---

## 5. Conceptual model: Resource → Action → Trigger

Showmesh uses a generic automation model:

```text
Resource → Action → Trigger
```

### 5.1 Resource — what can be controlled

A resource is a reusable object that exposes capabilities. Examples include video, audio, image, Notch Block, output, OSC connection, MIDI device, external engine, script, or future plugin.

Resources belong in the resource library, not as duplicated configuration inside every cue.

### 5.2 Action — what changes

An action describes a change or command, such as:

- fade opacity;
- set volume;
- change a shader parameter;
- send OSC;
- route an output;
- run a script;
- control another resource.

The Add Action menu should be generated from the selected resource’s capabilities. It should be searchable and should use the vocabulary of the resource.

### 5.3 Trigger — when it happens

A trigger determines when an action occurs. Examples include cue start, cue stop, a point on the cue timeline, timecode, OSC, MIDI, or manual execution.

Trigger labels must remain visible in action summaries because timing is as important as the action itself.

### 5.4 Critical media lifecycle rule

Native media playback is part of the **cue lifecycle**. Do not create artificial Play and Stop action cards for ordinary media when the playback engine already owns that lifecycle.

Show lifecycle is represented as read-only state. Action cards represent editable automation around or across that lifecycle.

This distinction keeps the model truthful:

- the cue plays the media;
- actions modify parameters, control other resources, or respond to triggers;
- the inspector may show lifecycle information, but does not pretend it is a user-created action.

---

## 6. Application information architecture

The current desktop composition is a five-zone operator shell.

### 6.1 Application bar

Contains project identity, edit/run mode, primary menus, command search, and native window controls.

Rules:

- keep it compact and visually subordinate;
- show the project name before product branding;
- make the current mode explicit;
- place command search within predictable reach;
- preserve standard Windows window behavior.

### 6.2 Live run header

The run header is the most important persistent region during a show. It contains:

- current cue number and name;
- elapsed, remaining, and total time;
- playback progress;
- next cue number, name, and meaningful summary;
- GO;
- PANIC.

The current cue uses the playing color. The next cue uses the ready color. Timing uses tabular or monospaced numerals to prevent visual shifting.

**GO must be the dominant control.** It should be large, green, easy to identify peripherally, and labeled with the cue it will fire.

**PANIC must remain visible but spatially separated from GO.** It should never look like an equal default choice. Activation should have deliberate interaction behavior suitable for a destructive emergency action.

### 6.3 Resource library — left panel

The resource panel groups reusable items by type, such as Video, Audio, Images, Notch Blocks, Outputs, and Connections.

Rules:

- default reference width: approximately `206px` at the 1680 px mockup width;
- support search and collapsible categories;
- show short secondary metadata such as duration, state, or missing status;
- use truncation carefully and expose the full value on hover or focus;
- distinguish missing resources immediately;
- enable drag, insert, or Add Cue workflows without turning the panel into a file browser clone.

### 6.4 Cue workspace — center

The cue list receives all remaining width and is the visual center of gravity.

Rules:

- keep cue numbers in a stable column;
- use consistent positions for type, title, secondary description, duration/routing, state, and local play control;
- show playing and next rails at the left edge of the row;
- expand the active or selected cue in context when action visibility is useful;
- indent actions beneath their parent cue;
- use connector lines and aligned state dots to reinforce parent/child relationships;
- offer comfortable and compact density modes;
- keep Add Cue easier to find than Add Resource in this workspace.

### 6.5 Contextual inspector — right panel

The inspector edits the selected object while preserving show context. The preferred top-level structure is:

- **General**
- **Actions**
- **Preview**
- **Notes**

Within the selected tab, related properties are grouped into collapsible sections such as Identity, Resource, Timing, Playback, Routing, Advanced, and Actions.

Rules:

- default reference width: approximately `318px` at the 1680 px mockup width;
- show selected object identity and state at the top;
- use compact label/value rows;
- use tabular numerals for time and numeric parameters;
- keep advanced sections collapsed by default;
- preserve section expansion state where practical;
- never hide live status merely because a different property section is open.

### 6.6 System status bar

The bottom status bar provides low-noise evidence of system health:

- master audio level;
- output format and route;
- sample rate and buffer;
- engine frame rate or timing;
- OSC/MIDI connection activity;
- warning count.

Normal telemetry stays subdued. A warning gains amber emphasis. Detailed diagnostics may expand upward without covering GO or the current/next context.

---

## 7. Cue and action representation

### 7.1 Normal cue

A normal cue row should show only enough information to scan and identify it. Title is primary; type, description, duration, route, and continuation behavior are secondary.

### 7.2 Selected cue

Selection must be clear but should not reuse the playing treatment. A subtle surface change, focus outline, or neutral accent is preferable.

### 7.3 Playing cue

The playing cue uses a red/coral rail, state label, progress, and a very restrained tinted surface. It may expand to reveal action states. The row must remain readable without relying on the tint alone.

### 7.4 Next cue

The next cue uses a green rail and a clear `NEXT` label. The treatment should be visible in peripheral vision but calmer than GO.

### 7.5 Disabled, completed, or skipped cue

Reduce contrast without making the cue illegible. State must also be expressed with a symbol or label. Do not use opacity so low that operators cannot verify show structure.

### 7.6 Warning cue

Show the warning next to the affected cue and explain it in plain language, for example `Action target cue not found`. Do not rely on a remote global warning count.

### 7.7 Action rows and cards

Actions should appear as stacked, aligned summaries in the cue and as compact cards in the inspector. Each action can show:

- state dot;
- action name;
- value transition or live value;
- duration or progress;
- trigger;
- target or source where needed.

The relationship to the parent cue should be visible through indentation, connector lines, shared highlighting, and consistent accent logic. Actions should not become a second independent cue list.

---

## 8. State model and semantic color

Color is reserved for operational meaning. The current v7 HTML provides the following reference palette.

| Role | Reference | Use |
|---|---:|---|
| App background | `#0A0C0F` | Window shell and deepest background |
| Side-panel surface | `#0D0F13` | Resource library and inspector |
| Workspace surface | `#14171D` | Main cue workspace |
| Elevated surface | `#171B22` | Popovers, command palette, raised controls |
| Primary text | `#DEE2E8` | Titles and important values |
| Strong text | `#E9ECF0` | Current cue and critical readouts |
| Secondary text | `#AEB5BF` / `#8B93A0` | Supporting labels and values |
| Muted text | `#7A828E` / `#5E6672` | Metadata and inactive controls |
| Very muted | `#4E555F` / `#3F454E` | Dividers, timestamps, disabled detail |
| Ready / next | `#57C878` | Next cue, enabled state, positive status |
| GO fill | `#2E9D57` | Primary live execution control |
| Playing / critical | `#F2606A` | Active playback, stop, critical status |
| Live connection | `#45C8E8` | OSC, MIDI, incoming live parameter data |
| Warning | `#E3A94F` | Missing resource, validation, degraded state |

These values are the current visual baseline, not immutable constants. Final tokens must be verified for contrast on their actual backgrounds.

### 8.1 Color rules

- Green means ready, next, enabled, healthy, or execute.
- Coral/red means currently playing, stop, critical, or destructive.
- Cyan means connected, listening, or externally driven live data.
- Amber means warning, missing, degraded, or attention required.
- Neutral greys carry structure and ordinary metadata.
- Never use semantic colors decoratively in the application.
- Never communicate state with color alone; pair it with a label, icon, rail, pattern, or position.

---

## 9. Typography

### 9.1 UI sans-serif

Use **Inter** or a metrically stable system sans-serif for navigation, labels, titles, and explanatory text. The style should be neutral, compact, and highly legible at small sizes.

### 9.2 Technical monospace

Use **JetBrains Mono** or an equivalent for:

- cue numbers;
- timecode, elapsed, remaining, and duration values;
- parameter values and ranges;
- protocol addresses;
- frame rate, sample rate, buffer, and diagnostics;
- keyboard shortcuts and compact state badges.

Monospace is functional, not thematic decoration. Do not set whole paragraphs or marketing copy in monospace.

### 9.3 Hierarchy

Use weight, contrast, and alignment before increasing size. In the desktop app, most interface text can remain between roughly 10–13 px at the reference scale, while current time and GO receive stronger emphasis. The website must use larger, responsive typography and should not inherit the application’s compact text sizes.

Use tabular numerals for changing numeric readouts even when the chosen font is not monospaced.

---

## 10. Surfaces, spacing, and geometry

### 10.1 Surfaces

Create hierarchy with small luminance steps rather than outlines around every region. The deepest shell, side panels, workspace, selected row, and elevated popover should be distinguishable without looking like a stack of cards.

### 10.2 Borders

Use low-alpha light borders or inset highlights only where separation is otherwise ambiguous. Avoid high-contrast grid lines.

### 10.3 Radius

Use small to medium radii, generally in the 5–12 px range:

- 5–7 px for fields, buttons, cue type icons, and compact controls;
- 7–10 px for panels and selected cue surfaces;
- up to 12 px for command palettes and larger overlays.

Do not turn every label into a pill. Shape should clarify hit area or grouping, not add decoration.

### 10.4 Spacing

Build on a 4 px base grid with common increments of 4, 8, 12, 16, 24, and 32 px. The app may use half-steps where compact alignment requires them, but component rhythm should remain systematic.

### 10.5 Shadows and glow

Use shadows only to establish elevation for transient layers. Avoid glow around ordinary controls. A live state may use restrained tinting, but it should not resemble neon gaming UI.

---

## 11. Interaction principles

### 11.1 Distinguish selection from execution

- Single click selects.
- GO executes the designated next cue.
- A local play/fire action must be visually distinct and require intentional use.
- Selecting a cue must never silently change the next cue or fire it.

### 11.2 Make focus visible

Every interactive control needs a clear keyboard focus state. Focus should remain distinguishable from selected, next, and playing states.

### 11.3 Preserve operator context

Opening a menu, inspector section, command palette, or diagnostic drawer must not remove current and next cue information. Modal interruption should be rare during show mode.

### 11.4 Use direct manipulation carefully

Cue reordering and resource insertion may support drag and drop, but every drag operation needs:

- a visible insertion target;
- autoscroll behavior;
- undo;
- a keyboard alternative;
- protection against accidental movement while running.

### 11.5 Make destructive actions deliberate

PANIC, clear, delete, stop-all, output changes, and actions that affect a running show require stronger interaction design than ordinary edits. Protection may use separation, hold, confirmation, a second gesture, or a configurable safety mode, depending on latency and operational needs.

### 11.6 Keep feedback immediate

On GO or external trigger, acknowledge receipt immediately and then show the resulting engine state. Where those differ, do not pretend that command receipt guarantees output.

### 11.7 Support undo and recovery

Editing actions should be undoable. The product should make autosave, backups, validation, logs, and crash recovery understandable without creating constant notifications.

---

## 12. Motion and realtime feedback

Motion exists to explain state change:

- progress bars move continuously and calmly;
- meters update at a readable rate;
- connection indicators may pulse subtly when data is active;
- cue transitions may animate just enough to preserve spatial continuity;
- opening panels should be quick and predictable.

Avoid bouncing, elastic movement, decorative loops, parallax, and dramatic page transitions in the application. Disable or reduce nonessential motion when the operating system requests reduced motion.

The interface must remain useful if animation stops; state cannot depend on motion alone.

---

## 13. Accessibility and resilience

- Target WCAG 2.2 AA contrast for text and interactive controls where technically applicable.
- Test the dark palette under low brightness, poor displays, and common color-vision deficiencies.
- Provide non-color state cues.
- Maintain practical hit targets even in compact mode; compact visuals may have larger invisible hit areas.
- Do not use placeholder text as the only field label.
- Provide accessible names for icon-only controls.
- Support Windows scaling and high-DPI displays.
- Preserve layout and readability at 125%, 150%, and 200% scaling.
- Announce warnings and state changes appropriately without overwhelming assistive technology with meter updates.
- Keep critical interaction possible when a side panel is collapsed or the window becomes narrower.

---

## 14. Translating the product language to the website

The website should feel unmistakably related to the app, but it should not reproduce desktop information density at marketing scale.

### 14.1 What carries over

- the near-black layered palette;
- disciplined grid and alignment;
- Inter for reading and JetBrains Mono for technical labels;
- semantic green, coral, cyan, and amber;
- cue rails, progress lines, state dots, timing, and protocol labels;
- precise, restrained motion;
- product UI as the primary visual evidence;
- concise, operational language.

### 14.2 What changes

- typography becomes larger and more expressive;
- sections get substantially more breathing room;
- one idea is presented at a time;
- semantic color can guide a narrative, but should retain its app meaning;
- technical detail is progressively disclosed rather than shown all at once;
- controls in screenshots are not presented as working website controls unless they truly are interactive.

### 14.3 Website visual direction

The site should resemble a refined operator environment extended into editorial space:

- dark, precise, and confident;
- strong horizontal rhythm;
- restrained surfaces rather than floating glass cards;
- real interface crops, diagrams, timing, and signal language;
- subtle mesh or connection motifs only when they support the Showmesh idea;
- green as the primary CTA and ready-state accent;
- coral for live playback examples, not ordinary CTA decoration;
- cyan for integrations and live connections;
- amber only for validation, warnings, or reliability stories.

### 14.4 Recommended page narrative

1. **Hero:** Showmesh name, realtime show automation promise, primary CTA, and a credible product UI view.
2. **Product thesis:** one cue list for media, realtime graphics, control, and external systems.
3. **Resource → Action → Trigger:** explain the extensible model with a clear three-part diagram or product crop.
4. **Operator workflow:** current cue, next cue, GO, safe editing, rehearsal, and recovery.
5. **Native performance:** Windows-first engine, outputs, timing, and separation of UI from playback.
6. **Connections:** OSC, MIDI, NDI, Spout, timecode, Notch, Unreal, TouchDesigner, and other supported or planned systems.
7. **Reliability:** validation, warnings, logs, autosave, backups, and visible telemetry—only claim what exists or clearly label roadmap items.
8. **Audience:** theatre, concerts, installations, and events.
9. **Final CTA:** a focused next step such as joining the waitlist, following development, or downloading an available build.

### 14.5 Website content voice

Copy should be short, concrete, and technically credible.

Prefer:

- “See what is live, what is next, and what will fire.”
- “Connect media, realtime graphics, and control in one cue workflow.”
- “Built for Windows. Designed for the pressure of a live show.”

Avoid:

- vague transformation language;
- exaggerated claims such as “revolutionary” or “effortless”;
- unexplained protocol lists;
- pretending roadmap concepts are shipping features;
- positioning the product solely by comparison with a competitor.

### 14.6 Website motion

Use motion to demonstrate workflow: a cue progresses, the next cue becomes ready, GO advances the show, or an OSC value changes. Keep demos short, deterministic, pausable, and compatible with reduced motion.

Do not use constant ambient animation behind body copy.

---

## 15. Responsive website behavior

The product is a desktop application, but the website must work well on all common viewport widths.

### 15.1 Desktop

- Use a wide layout to show the real operator interface credibly.
- Keep text columns narrower than product imagery.
- Let screenshots bleed or crop intentionally rather than shrinking all UI text below legibility.

### 15.2 Tablet

- Reduce simultaneous columns.
- Present app regions as focused crops: live header, cue list, inspector, and telemetry.
- Preserve narrative order rather than the literal desktop layout.

### 15.3 Mobile

- Do not squeeze the full three-column app into the viewport.
- Use one annotated UI detail per block.
- Keep CTA and navigation simple.
- Ensure technical labels remain readable without horizontal page scrolling.
- If a product mockup scrolls horizontally, contain it deliberately and communicate that behavior.

---

## 16. Explicit design constraints

### Do

- make current, next, and system health understandable at a glance;
- keep GO dominant and PANIC visible but separate;
- preserve the Resource → Action → Trigger model;
- treat media playback as cue lifecycle;
- show actions as children of their cue;
- use a contextual inspector with General, Actions, Preview, and Notes;
- use color semantically and redundantly;
- support both comfortable and compact density;
- design for keyboard use, Windows scaling, low light, and show pressure;
- use real product UI as the website’s strongest visual asset;
- label concept, planned, beta, and available features honestly.

### Do not

- turn the app into a dashboard of unrelated cards;
- fake Play/Stop actions for native media lifecycle;
- confuse selection, next, and playing states;
- hide the next cue while an operator edits another cue;
- give PANIC the same visual invitation as GO;
- use gradients, glow, glassmorphism, or color without operational meaning;
- use excessive borders or pills;
- use generic SaaS illustrations, stock theatre photography, or decorative 3D objects as the primary website language;
- shrink the desktop UI until its text becomes decorative noise on mobile;
- imply that a mockup is a shipping implementation.

---

## 17. Design token starter set

The following tokens translate the current visual baseline into reusable names. They should be centralized in the application theme and website CSS rather than copied as literal values across components.

```css
:root {
  --sm-bg-shell: #0a0c0f;
  --sm-bg-panel: #0d0f13;
  --sm-bg-workspace: #14171d;
  --sm-bg-elevated: #171b22;

  --sm-text-primary: #dee2e8;
  --sm-text-strong: #e9ecf0;
  --sm-text-secondary: #8b93a0;
  --sm-text-muted: #5e6672;
  --sm-text-faint: #4e555f;

  --sm-state-ready: #57c878;
  --sm-action-go: #2e9d57;
  --sm-state-playing: #f2606a;
  --sm-state-live: #45c8e8;
  --sm-state-warning: #e3a94f;

  --sm-border-subtle: rgb(255 255 255 / 6%);
  --sm-surface-subtle: rgb(255 255 255 / 3.5%);

  --sm-radius-control: 6px;
  --sm-radius-panel: 10px;
  --sm-radius-overlay: 12px;

  --sm-space-1: 4px;
  --sm-space-2: 8px;
  --sm-space-3: 12px;
  --sm-space-4: 16px;
  --sm-space-6: 24px;
  --sm-space-8: 32px;
}
```

Application and website themes may use different type scales and spacing, but semantic token names should remain shared where meaning is shared.

---

## 18. Review checklist

Use this checklist before accepting a major app screen, component, or website section.

### Operational clarity

- [ ] Can the operator identify current and next cue in under one second?
- [ ] Is GO dominant and is its target clear?
- [ ] Is PANIC visible, separated, and protected appropriately?
- [ ] Are selection, playing, next, disabled, and warning states distinct without color alone?
- [ ] Does the screen preserve current show context while editing?

### Information model

- [ ] Does the UI preserve Resource → Action → Trigger?
- [ ] Are actions visibly attached to their parent cue?
- [ ] Is native media playback represented as lifecycle rather than fake actions?
- [ ] Are advanced properties progressively disclosed?

### Interaction

- [ ] Is the primary workflow keyboard-accessible?
- [ ] Are focus and hover states clear?
- [ ] Do dangerous operations require deliberate intent?
- [ ] Is feedback immediate and truthful about engine state?
- [ ] Can edits be undone or recovered?

### Visual system

- [ ] Does every accent color communicate a defined state?
- [ ] Is hierarchy created primarily through alignment, contrast, and spacing?
- [ ] Are timing and technical values stable and easy to compare?
- [ ] Does the interface remain legible at Windows scaling levels?
- [ ] Is motion functional, restrained, and reducible?

### Website

- [ ] Does the page look related to the product without copying desktop density?
- [ ] Is product UI the primary evidence rather than generic imagery?
- [ ] Are feature claims accurate and development states labeled?
- [ ] Does the mobile layout use deliberate UI crops instead of a tiny full-app screenshot?
- [ ] Are semantic colors used consistently with the application?

---

## 19. Source artifacts

This baseline was synthesized from:

- the latest Showmesh/Intermission operator UI screenshot;
- `Windows media cue playback UI2.pdf`;
- the HTML mockup sequence in `Windows media cue playback UI.zip`, including the v4–v7 iterations;
- the established Showmesh product architecture and Resource → Action → Trigger design decisions.

When implementation and mockup differ, prefer the product and safety principles in this document, then document any intentional deviation.

