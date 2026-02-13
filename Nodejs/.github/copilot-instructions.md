<!-- Project-specific Copilot instructions for Project_URL_Shortner -->
# Copilot instructions — Project_URL_Shortner

Summary
- This is a small Node.js URL shortener using Express + EJS + Mongoose.
- App entry: `server.js` (Project/Project_URL_Shortner/server.js). Uses ESM (`"type": "module"` in package.json).

Architecture & data flow
- Routes live under `Routes/` (router defined in UrlRoute.js). Key routes:
  - `GET /` -> renders `views/index.ejs` with `{ shortUrl: null }`
  - `POST /short` -> `Controllers/UrlController.shortUrl` (creates short code, saves `Models/UrlModel.Url`, renders `index.ejs` with `shortUrl`)
  - `GET /:shortCode` -> `Controllers/UrlController.getOriginalUrl` (looks up `Url` by `shortCode` and redirects)
- DB connection: `Config/db.js` connects to MongoDB via Mongoose. The connection is invoked from `server.js` with `connectDB()`.

Developer workflows & commands
- Install deps: `npm install` in Project/Project_URL_Shortner
- Start server: `npm start` (runs `node server.js`) or `node server.js` directly. Default port observed: 1002.
- Use `package.json` to discover runtime mode (`type: module`) and `main` entry.

Project-specific patterns & conventions
- ESM imports everywhere (use `import ... from`), so preserve file extensions in imports where used.
- Templates: EJS views are in `views/` and expect `shortUrl` when rendering the shortened URL (see [views/index.ejs](Project/Project_URL_Shortner/views/index.ejs)).
- Controllers export named functions (`shortUrl`, `getOriginalUrl`) rather than a default export; routes import them as named imports.
- Models: Mongoose model exported as `export const Url = mongoose.model('shortURL', urlSchema)` — code expects `Url` named export.
- Short code generation: `shortid` package used in `Controllers/UrlController.js`.

Integration points & warnings
- MongoDB URI is hard-coded in `Config/db.js`; treat as a secret. Prefer using environment variables (e.g., `process.env.MONGODB_URI`) before committing changes.
- Watch for path / casing mismatches on imports (the codebase uses both `routes/urlRoutes.js` and `Routes/UrlRoute.js`-style names). On Windows this works; on case-sensitive systems it can break. Always confirm exact file paths.

How to make common changes
- Add a new route: create `Routes/MyRoute.js` exporting an Express `router`, then import it in `server.js` and `app.use('/my', myRoute)`.
- Add a controller: add a named export function in `Controllers/` and import it in the route file.
- Add fields to URL model: update `Models/UrlModel.js` mongoose schema and run normal app workflows; no migrations exist.

Useful file references
- Entry: [server.js](Project/Project_URL_Shortner/server.js)
- DB connector: [Config/db.js](Project/Project_URL_Shortner/Config/db.js)
- Routes: [Routes/UrlRoute.js](Project/Project_URL_Shortner/Routes/UrlRoute.js)
- Controller: [Controllers/UrlController.js](Project/Project_URL_Shortner/Controllers/UrlController.js)
- Model: [Models/UrlModel.js](Project/Project_URL_Shortner/Models/UrlModel.js)
- View example: [views/index.ejs](Project/Project_URL_Shortner/views/index.ejs)

If anything is unclear
- Tell me which area to expand (security, tests, env config, CI). I can: extract examples, add env variable guidance, or generate a secure `.env` example and `README` snippet.

— End of instructions
