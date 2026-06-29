# 🛒 Everest — Gromuse

A full **MERN** stack application — **M**ongoDB, **E**xpress, **R**eact, **N**ode — styled with **Tailwind CSS v4** and featuring the **Gromuse** grocery-delivery UI (custom navbar + hero section).

This guide takes you from a clean machine (Windows, macOS, or Linux) to a running app.

---

## 📦 Tech stack

| Layer    | Tech                                                       |
| -------- | ---------------------------------------------------------- |
| Frontend | React 18, Vite 6, Tailwind CSS v4, React Router 7, axios   |
| Backend  | Node.js, Express 4, Mongoose 8, CORS, Morgan               |
| Database | MongoDB (local or MongoDB Atlas)                           |

---

## ✅ Prerequisites

Install these once on any system:

| Tool        | Version      | Check                | Get it                                        |
| ----------- | ------------ | -------------------- | --------------------------------------------- |
| **Node.js** | 18 LTS or 20+ | `node -v`            | https://nodejs.org (LTS)                       |
| **npm**     | 9+ (ships with Node) | `npm -v`     | —                                              |
| **Git**     | any          | `git --version`      | https://git-scm.com                            |
| **MongoDB** | 6+ (or Atlas) | `mongod --version`  | https://www.mongodb.com/try/download/community |

> 💡 No local MongoDB? Use a free **MongoDB Atlas** cloud cluster instead (see step 3).

---

## 🚀 Setup (any system)

### 1. Clone the repository

```bash
git clone https://github.com/Alphannnn/Everest-.git
cd Everest-
```

### 2. Install all dependencies

```bash
npm run install:all
```

This installs the **root**, **server/**, and **client/** dependencies in one go.

> If `install:all` fails on your shell, run the three installs manually:
> ```bash
> npm install
> npm install --prefix server
> npm install --prefix client
> ```

### 3. Configure environment variables

Copy the example env files:

```bash
# macOS / Linux
cp server/.env.example server/.env
cp client/.env.example client/.env
```

```powershell
# Windows (PowerShell)
copy server\.env.example server\.env
copy client\.env.example client\.env
```

Then open `server/.env` and set your **`MONGO_URI`**:

| Setup            | `MONGO_URI` value                                                       |
| ---------------- | ----------------------------------------------------------------------- |
| **Local MongoDB** | `mongodb://127.0.0.1:27017/everest`                                     |
| **MongoDB Atlas** | `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/everest`         |

`server/.env` keys:

```ini
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/everest
CLIENT_URL=http://localhost:5173
```

`client/.env` (defaults are fine for local dev):

```ini
VITE_API_URL=/api
```

### 4. Start MongoDB (skip if using Atlas)

```bash
# macOS (Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod

# Windows — MongoDB runs as a service after install, or:
net start MongoDB
```

### 5. Run the app

```bash
npm run dev
```

This launches **both** the server and client together:

| Service          | URL                              |
| ---------------- | -------------------------------- |
| 🖥️  Client (Vite) | http://localhost:5173            |
| ⚙️  Server (API)  | http://localhost:5000            |
| ❤️  Health check  | http://localhost:5000/health     |

The Vite dev server proxies all `/api/*` requests to Express automatically — no CORS setup needed.

> If port `5173` is busy, Vite picks the next free port (e.g. `5174`) and prints it in the terminal.

---

## 🧰 Available scripts (run from the project root)

| Command               | What it does                                   |
| --------------------- | ---------------------------------------------- |
| `npm run dev`         | Run client + server together (development)     |
| `npm run server`      | Run only the Express server (nodemon, reloads) |
| `npm run client`      | Run only the React dev server                  |
| `npm run build`       | Build the client for production (`client/dist`)|
| `npm run start`       | Start the Express server in production mode    |
| `npm run install:all` | Install root + server + client dependencies    |

---

## 🏗️ Project structure

```
everest/
├── client/                     # React frontend (Vite)
│   ├── public/
│   │   └── logo.png            # Gromuse logo (served at /logo.png)
│   ├── src/
│   │   ├── components/
│   │   │   ├── GromuseNavbar.jsx   # Standalone top navigation bar
│   │   │   ├── Hero.jsx            # Hero section
│   │   │   └── Navbar.jsx          # Legacy nav (used on /notes)
│   │   ├── pages/              # Route-level pages (Home, Notes)
│   │   ├── services/           # API layer (axios)
│   │   ├── App.jsx             # Routes + layout
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Tailwind + font setup
│   ├── vite.config.js          # Vite + Tailwind + API proxy
│   └── .env.example
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── config/             # env + db connection
│   │   ├── controllers/        # Request handlers
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # Express routers
│   │   ├── middleware/         # Error + async handlers
│   │   └── app.js              # Express app
│   ├── server.js               # Entry point
│   └── .env.example
│
├── package.json                # Root scripts (run both apps)
└── README.md
```

---

## 🔌 API reference

Base URL: `http://localhost:5000/api`

| Method   | Endpoint      | Description    |
| -------- | ------------- | -------------- |
| `GET`    | `/notes`      | List all notes |
| `GET`    | `/notes/:id`  | Get one note   |
| `POST`   | `/notes`      | Create a note  |
| `PUT`    | `/notes/:id`  | Update a note  |
| `DELETE` | `/notes/:id`  | Delete a note  |

The **Notes** resource is a working example — copy its
`model → controller → route` pattern to build your own features.

---

## 🏭 Production build

```bash
npm run build        # builds the client into client/dist
npm run start        # serves the API (NODE_ENV=production)
```

Deploy `client/dist` to any static host (Netlify, Vercel, Nginx) and point
`VITE_API_URL` at your deployed API URL before building.

---

## 🩺 Troubleshooting

| Problem                                   | Fix                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| `ECONNREFUSED` / API calls fail           | Make sure MongoDB is running and `MONGO_URI` is correct.                  |
| `Port 5173 is in use`                     | Vite auto-switches ports; use the URL printed in the terminal.            |
| `Port 5000 in use`                        | Change `PORT` in `server/.env`.                                           |
| Blank page / styles missing               | Re-run `npm run install:all`, then `npm run dev`.                         |
| `command not found: npm`                  | Install Node.js (includes npm) and reopen your terminal.                  |
| Tailwind classes not applying             | Confirm `client/src/index.css` imports Tailwind and dev server restarted. |

---

## 📄 License

Private project. All rights reserved.
