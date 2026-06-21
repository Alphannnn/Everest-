# 🏔️ Everest

A clean, structured **MERN** stack application — **M**ongoDB, **E**xpress, **R**eact, **N**ode — styled with **Tailwind CSS**.

## Tech stack

| Layer    | Tech                                   |
| -------- | -------------------------------------- |
| Frontend | React 18, Vite, Tailwind CSS v4, axios, React Router |
| Backend  | Node.js, Express 4, Mongoose 8         |
| Database | MongoDB                                |

## Project structure

```
everest/
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route-level pages
│   │   ├── services/           # API layer (axios)
│   │   ├── App.jsx             # Routes + layout
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Tailwind entry
│   ├── vite.config.js          # Vite + Tailwind + API proxy
│   └── .env.example
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── config/             # env + db connection
│   │   ├── controllers/        # Request handlers
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # Express routers
│   │   ├── middleware/         # Errors, async wrapper
│   │   └── app.js              # Express app
│   ├── server.js               # Entry point
│   └── .env.example
│
├── package.json                # Root scripts (run both apps)
└── README.md
```

## Getting started

### 1. Install dependencies

```bash
npm run install:all
```

This installs the root, `server/`, and `client/` dependencies.

### 2. Configure environment

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Update `server/.env` with your `MONGO_URI`:

- **Local MongoDB:** `mongodb://127.0.0.1:27017/everest`
- **MongoDB Atlas:** `mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/everest`

> A `server/.env` with local defaults is already created for you.

### 3. Run in development

```bash
npm run dev
```

- Client → http://localhost:5173
- Server → http://localhost:5000
- API health check → http://localhost:5000/health

`/api/*` requests from the client are proxied to the server automatically.

## Available scripts (root)

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Run client + server together                  |
| `npm run server`      | Run only the Express server (with nodemon)    |
| `npm run client`      | Run only the React dev server                 |
| `npm run build`       | Build the client for production               |
| `npm run install:all` | Install all dependencies (root/server/client) |

## API reference (example resource)

Base URL: `http://localhost:5000/api`

| Method   | Endpoint      | Description       |
| -------- | ------------- | ----------------- |
| `GET`    | `/notes`      | List all notes    |
| `GET`    | `/notes/:id`  | Get one note      |
| `POST`   | `/notes`      | Create a note     |
| `PUT`    | `/notes/:id`  | Update a note     |
| `DELETE` | `/notes/:id`  | Delete a note     |

The **Notes** resource is a working example — copy its
model → controller → route pattern to build your own features.
# Everest-
