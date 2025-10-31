# AI-Psychologist (client)

A lightweight front-end client for the AI-Psychologist project — a React + Vite application used as the UI for an AI-driven mental health / conversational assistant. This repository contains the Vite-based client located at the `vite-project` folder.

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Install](#install)
	- [Run locally](#run-locally)
	- [Build for production](#build-for-production)
- [Project structure](#project-structure)
- [Available scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This is the frontend client for the AI-Psychologist project. It provides the web interface (React + Vite) used to interact with the AI-powered assistant. The UI includes authentication screens, a dashboard, chat or session views, history, and a set of components for collecting user input and displaying responses.

## Features

- Fast, Vite-powered React app
- Routing with `react-router-dom`
- Uses Material UI and Tailwind for UI and styling
- Real-time communication via `socket.io-client`
- Includes visual/3D elements via `three` and `ogl`

## Tech stack

- React 19
- Vite
- Material UI (MUI)
- Tailwind CSS
- socket.io-client
- three.js and ogl
- Axios for HTTP requests

## Getting started

### Prerequisites

- Node.js (recommended 18+)
- npm (bundled with Node) or an alternative package manager

### Install

Clone the repository (if you haven't already) and install dependencies:
```bash
#for frontend-client side
git clone https://github.com/Dev-Saurabh-K/AI-Psychologist.git
```


```bash
# from project root
cd AI-Psychologist
npm install
```

### Run locally

Start the dev server with:

```bash
npm run dev
```

```bash
#for server installation in seperate folder
git clone https://github.com/Dev-Saurabh-K/AI-Psychologist-server
cd AI-Psychologist-server
npm install
npm start  
nodemon start
```
Open the URL printed by Vite (usually http://localhost:5173) to view the app.






## Project structure (important files)

This project keeps the client code inside the `src/` directory.

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — top-level component
- `src/socket.js` — socket client wrapper
- `src/components/` — UI components (Dashboard, History, Input, auth screens, etc.)
- `src/assets/` — static assets
- `public/` — static public files

From the visible components folder:

- `Dashboard.jsx`, `UserDashboard.jsx` — main app screens
- `History.jsx` — session history viewer
- `Input.jsx` — input component for user messages
- `login.jsx`, `signup.jsx`, `sessionOut.jsx` — auth-related screens

Adjust paths above if you are running only the `vite-project` as a subfolder in a larger repo.

## Available scripts

Scripts are defined in `package.json`:

- `npm run dev` — run Vite dev server
- `npm run build` — build production assets
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Environment & configuration

If the app relies on API servers or sockets, set env variables (Vite supports `import.meta.env` via `.env` files). Example environment variables you might add to the root of this folder:

- `VITE_API_BASE_URL` — backend HTTP API base url
- `VITE_SOCKET_URL` — socket server URL

Create `.env.local` or `.env` and restart the dev server after changes.

## Contributing

Contributions are welcome. A good quick workflow:

1. Fork the repository or create a feature branch
2. Install dependencies and run the dev server
3. Add or update components, tests, or styles
4. Lint and test changes
5. Create a pull request with a clear description and screenshots if relevant

Please follow this project's code style (ESLint + React). If you add new dependencies, explain why in the PR description.

## License

Specify your license here (e.g., MIT). If this repository already has a `LICENSE` file, keep consistency with it.

## Contact

Project owner: Dev-Saurabh-K

If you need help running the client or integrating it with the backend, open an issue or reach out on the project's preferred communication channel.

---

Thank you for checking out the AI-Psychologist client. If you'd like, I can also add a short contributing.md, update environment examples, or generate a quick demo screenshot/preview.

