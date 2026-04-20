# Web Portfolio

Personal portfolio project with:

- `frontend`: Angular 13 single-page app
- `backend`: Express + TypeScript API (health endpoint and API foundation)

## Tech Stack

- Frontend: Angular 13, TypeScript, SCSS, Playwright, Karma/Jasmine
- Backend: Node.js, Express, TypeScript, Jest, Playwright
- Containers: Docker, Docker Compose, Nginx

## Repository Structure

```text
.
├── frontend/   # Angular app
├── backend/    # Express API
└── docker-compose.yml
```

## Prerequisites

- Node.js 18+ (backend requires `>=18`)
- npm
- Optional: Docker + Docker Compose

## Local Development

### 1) Install Dependencies

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 2) Run Frontend

```bash
cd frontend
npm start
```

Frontend runs on `http://127.0.0.1:4502`.

### 3) Run Backend

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:3050` by default.

Health endpoint: `GET /api/health`

## Environment Variables

Backend supports these environment variables:

- `PORT` (optional, default: `3050`)
- `CORS_ORIGIN` (optional, default: allows all origins)
- `NODE_ENV` (optional, common values: `development` or `production`)

Example:

```bash
PORT=3050
CORS_ORIGIN=http://127.0.0.1:4502
NODE_ENV=development
```

## Build

### Frontend

```bash
cd frontend
npm run build
```

### Backend

```bash
cd backend
npm run build
npm start
```

## Testing

### Frontend

```bash
cd frontend
npm run test:unit
npm run test:integration
npm run test:e2e
```

### Backend

```bash
cd backend
npm run test
npm run test:e2e
```

## Run with Docker Compose

From repository root:

```bash
docker compose up --build
```

Services:

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3050`

## Deployment

- Frontend has a GitHub Actions workflow at `.github/workflows/frontend-ghcr-northflank.yml` for image build/push and Northflank deployment.
- Backend deployment workflow is not currently defined in this repository.

## Contributing

1. Create a feature branch.
2. Make focused changes with tests when applicable.
3. Run relevant test suites before opening a pull request.
4. Open a PR with a clear summary and test notes.

## License

This project is licensed under the MIT License. See `LICENSE`.
