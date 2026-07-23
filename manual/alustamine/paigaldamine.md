---
title: Install and run
description: Install the Showmesh Windows beta or start a development build.
---

# Install and run

## Install the Windows beta

If you received `Showmesh-Setup-0.1.0-beta.1.exe`:

1. Run the installer and choose the installation folder.
2. Windows SmartScreen may warn because the beta installer is not yet signed.
   Verify that the file came from the Showmesh project owner, then use
   **More info → Run anyway** only when you trust the file.
3. Complete the per-user installation. Administrator rights are not required.
4. Start **Showmesh** from the Start menu.

The packaged editor includes the engine and starts it automatically. If an
engine is already listening on the local port, the editor attaches to that
engine instead of starting a duplicate.

::: warning Closing the editor does not stop the show
The production engine lifecycle is persistent. Closing the editor window leaves
the engine, playback, audio, and outputs running. Reopen the editor to reconnect;
use an explicit stop or PANIC before ending the engine.
:::

NDI output needs the NDI runtime. A machine without an audio device can use the
null-audio backend: picture works, but no physical sound is produced.

## Run from source

Developers need Windows 11, Visual Studio 2022 with **Desktop development with
C++**, CMake 3.24+, vcpkg, Node.js 22 LTS, and Git.

Build and test the engine from an **x64 Native Tools Command Prompt**:

```bat
cmake -B engine\build -S engine -G "Visual Studio 17 2022" -A x64 ^
  -DCMAKE_TOOLCHAIN_FILE="%VCPKG_ROOT%\scripts\buildsystems\vcpkg.cmake"
cmake --build engine\build --config RelWithDebInfo
ctest --test-dir engine\build -C RelWithDebInfo --output-on-failure
```

Start the engine:

```bat
engine\build\RelWithDebInfo\engined.exe --gpu
```

Then start the editor in two terminals:

```bat
cd editor
npm install
npm run dev
```

```bat
cd editor
npm run electron
```

## Common engine flags

```text
engined.exe [--port 7788] [--project show.show]
            [--display N] [--windowed WxH] [--gpu] [--run]
```

| Flag | Meaning |
|---|---|
| `--project show.show` | Opens a project at launch |
| `--windowed 960x540` | Opens program output in a window |
| `--display N` | Selects a monitor |
| `--gpu` | Enables GPU decode with automatic CPU fallback |
| `--run` | Runs headless |

The editor connects to `ws://127.0.0.1:7788` by default. MIDI input and output
are always built into the Windows engine.

::: warning Match editor and engine
If the editor reports an incompatible engine, rebuild and restart the engine.
Check protocol revision `23` and UI revision `r51` for the version documented
here.
:::
