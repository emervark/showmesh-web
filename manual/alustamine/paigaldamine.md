---
title: Install and run
description: Build and start the Showmesh engine and editor on Windows.
---

# Install and run

The current Showmesh version runs from source. This is a concise operator-facing
guide for starting a test build. Full development setup details are in
`docs/SETUP.md`.

## Requirements

- Windows 11;
- Visual Studio 2022 with **Desktop development with C++**;
- CMake 3.24 or newer;
- vcpkg and the `VCPKG_ROOT` environment variable;
- Node.js 22 LTS;
- Git.

## Build the engine

Open **x64 Native Tools Command Prompt for VS 2022** in the repository root:

```bat
cmake -B engine\build -S engine -G "Visual Studio 17 2022" -A x64 ^
  -DCMAKE_TOOLCHAIN_FILE="%VCPKG_ROOT%\scripts\buildsystems\vcpkg.cmake"
cmake --build engine\build --config RelWithDebInfo
ctest --test-dir engine\build -C RelWithDebInfo --output-on-failure
```

The first build can take time while vcpkg fetches and builds media libraries.

## Start the application

Start the engine in one terminal:

```bat
engine\build\RelWithDebInfo\engined.exe --gpu
```

Start the editor web process in a second terminal:

```bat
cd editor
npm install
npm run dev
```

Start Electron in a third terminal:

```bat
cd editor
npm run electron
```

The editor connects to `ws://127.0.0.1:7788` by default. The connection status
in the title bar should show the engine as connected.

## Common engine flags

```text
engined.exe [--port 7788] [--project show.imsn]
            [--display N] [--windowed WxH] [--gpu] [--run]
```

| Flag | Meaning |
|---|---|
| `--project show.imsn` | Opens a project at launch |
| `--windowed 960x540` | Opens program output in a window |
| `--display N` | Selects a monitor |
| `--gpu` | Enables D3D11VA decode with CPU fallback |
| `--run` | Runs headless in show mode |

::: warning Match the editor and engine
If the editor reports that the engine is older, rebuild and restart the engine.
The UI revision and engine build stamp in the title bar help identify the binary
that is actually running.
:::
