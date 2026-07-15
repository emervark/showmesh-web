# Showmesh Website Creative Direction

**Status:** Mandatory creative direction  
**Date:** 15 July 2026  
**Applies to:** Showmesh public website  
**Companion documents:** `SHOWMESH_WEBSITE_SPEC.md`, `SHOWMESH_UI_UX_DESIGN_PRINCIPLES.md`

## Creative premise

The website behaves like a show that is already running. It does not explain Showmesh through a sequence of generic marketing blocks or repeated full-application screenshots. It lets visitors experience the product's operating logic through focused, working fragments of the real interface.

The page's recurring visual language is:

- cue numbers and a continuous sequence rail;
- explicit NOW and NEXT state;
- GO as the action that advances both product state and page narrative;
- Resource → Action → Trigger connection paths;
- live protocol values and technical telemetry;
- restrained semantic color: coral for playing, green for ready, cyan for live input, amber for warnings.

## Core promise

Primary headline:

> **Everything that makes the show. One sequence that runs it.**

Supporting line:

> Build and operate media, realtime graphics, control signals, and external systems from one Windows-native workspace.

The product should be demonstrated before it is explained.

## Narrative sequence

The site is one vertical cue list. Each section is a cue, not a detached content module.

1. **Connect** — establish the product promise and use NOW / NEXT / GO.
2. **Automate** — build a cue through Resource → Action → Trigger.
3. **Run** — show current cue, next intent, GO target, and system health together.
4. **See what is live** — expose OSC, MIDI, time, and realtime values inside the cue.
5. **Control what happens next** — show the engine and connected systems as one operating context.

Scrolling updates the active cue on the page rail. It must not hijack scroll. GO may advance the demonstration and focus the next section because the action is explicit and user initiated.

## Section direction

### 01 — Run the sequence

- Use a balanced editorial hero.
- Pair the product promise with a working NOW / NEXT / GO module.
- The progress line moves while the cue is playing.
- GO promotes NEXT to NOW and reveals the next cue.
- Provide a secondary route to the complete standalone operator UI.

### 02 — Build a cue

- Do not use three equal explanation cards.
- Use one connected flow: `Smoke_Field.nblock → Fog density 0 → 0.8 → ON PLAY`.
- Resource, action, and trigger remain distinct through label, geometry, and state—not isolated boxes.
- Visitors can select a resource, parameter, and trigger, then run the cue to see the value change.

### 03 — Know what happens next

- Focus on the live header and cue state rather than the full application shell.
- Keep current cue, elapsed / remaining time, next intent, GO target, warning context, and health visible together.
- Copy addresses operator certainty, not interface architecture.

### 04 — Live systems

- Let OSC values move and MIDI / time inputs visibly respond.
- Cyan is reserved for connected or externally driven values.
- Input changes must affect a visible cue parameter.
- Motion is functional, short, and disabled when reduced motion is requested.

### 05 — Native engine and connections

- Replace feature tables and logo walls with a central Showmesh cue connected to output, control, time, and realtime systems.
- Connections light according to the selected workflow.
- Use a telemetry strip for `PROGRAM`, `ENGINE`, `AUDIO`, and `OSC`.
- Distinguish shipped, in-development, planned, and exploratory capabilities in plain text.

### Final GO

- End with a prepared next cue: `NEXT 12 — Build your first show`.
- GO becomes the request-access action.
- Do not introduce a new visual language for the final CTA.

## Composition rules

- Avoid repeated centered headings, card grids, and large unused black gaps.
- Use one visible grid across copy, rails, diagrams, and UI fragments.
- UI fragments are the primary visual evidence; body copy is concise support.
- Never repeat the full application screenshot as a section background.
- The complete prototype remains available as an explicit destination, not the dominant composition of every section.
- Mobile uses readable fragments and a compact horizontal sequence indicator; the full desktop shell is never shrunk until illegible.

## Interaction rules

- The hero GO control advances current and next cue state.
- The build-cue demo gives immediate, reversible feedback.
- Section activation follows normal scrolling through `IntersectionObserver`.
- Keyboard focus is always visible; controls use native buttons and links.
- The page remains understandable without JavaScript.
- Reduced-motion users see state changes without animated progress, sweeping connectors, or auto-updating values.

## Copy rules

- Speak about what the operator can know, build, or run.
- Avoid internal-process phrases such as “marketing mockup,” “product thesis,” “platform model,” and “engine direction.”
- Avoid unsupported performance or availability claims.
- Development states remain explicit where integrations or reliability work are discussed.
- Keep section introductions to one short paragraph.

## Acceptance test

The direction succeeds when a visitor can answer these questions without reading a feature table:

1. What is playing now?
2. What will happen next?
3. What does GO do?
4. How does a resource become a timed or live action?
5. Where do OSC, MIDI, realtime graphics, media, and output belong?
6. How do I open the complete product UI or request access?
