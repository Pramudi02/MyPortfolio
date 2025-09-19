# MyPortfolio Backend

Comprehensive README for the backend extracted from the main `MyPortfolio` project.

## Overview

This repository contains the backend code that powers the contact/email API and related small server utilities used by the MyPortfolio frontend. It was originally part of a monorepo and extracted here to be used as an independent backend service.

Main files and folders

- `server.js` - Primary Express server entrypoint.
- `simplified-email-server.js` - Alternative lighter email server used for testing or simplified deployments.
- `test-server.js` - Small server used for quick health checks or local testing.
- `api/health.js` - Health check endpoint.
- `api/send-email.js` - API endpoint that receives email/contact form submissions and sends email via configured transport.
- `.env` - Environment file for local development (not committed; provided as template below).
- `package.json` - Node package manifest.

This README documents how to set up, run, and deploy the backend, plus API usage, example requests, environment variables, security recommendations, and helpful CSS/animation snippets the frontend can use for contact/feedback flows.

---

## Quick start (local)

Prerequisites

- Node.js 14+ (recommend LTS)
- npm (comes with Node)

Steps

1. Clone or copy this repository to your machine.
2. From the project root, install dependencies:

```powershell
npm install
```

3. Create a `.env` file based on the `ENVIRONMENT` section below.

4. Start the server (development):

```powershell
node server.js
# or use nodemon if installed
npx nodemon server.js
```

5. Server runs by default on port defined in `.env` (or 3000). Visit `http://localhost:3000/api/health` to check.

---

## Environment variables (example .env)

Create `.env` in the project root with values appropriate for your environment.

```
# Server
PORT=3000

# Email transport (example using Gmail SMTP or transactional provider)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-smtp-user
EMAIL_PASS=your-smtp-password
FROM_EMAIL="Your Name <no-reply@example.com>"
TO_EMAIL=recipient@example.com

# Optional: Vercel specific
VERCEL_URL=https://backend-new-portfolio.vercel.app
```

Security note: Never commit real secrets to source control. Use environment variables in production, or secret stores offered by your host (Vercel secrets, GitHub secrets, etc.).

---

## API Endpoints

### Health

- GET /api/health

Returns 200 OK with a small JSON payload. Example:

```json
{ "status": "ok", "uptime": 12345 }
```

### Send email

- POST /api/send-email

Request body (application/json):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello — I like your portfolio!"
}
```

Response (success):

```json
{ "ok": true, "message": "Email sent" }
```

Response (error):

```json
{ "ok": false, "error": "Detailed error message" }
```

Server expects the request to be JSON. The frontend should set Content-Type: application/json.

---

## Example curl requests

Health check:

```bash
curl https://backend-new-portfolio.vercel.app/api/health
```

Send email (example):

```bash
curl -X POST https://backend-new-portfolio.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","message":"Hi!"}'
```

---

## Frontend integration notes

- The frontend should call the `POST /api/send-email` endpoint. Example base URL: `https://backend-new-portfolio.vercel.app` and path `/api/send-email`.
- For Angular, set the value in `src/environments/environment.ts` and `environment.prod.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://backend-new-portfolio.vercel.app/api/send-email'
};
```

Then use the EmailService to POST to `environment.apiUrl`.

---

## Styling & Animations (snippets for the frontend)

Below are ready-to-use CSS snippets and small animations for forms and feedback states (success/error). Insert these into your frontend styles (SASS/CSS).

1) Floating label input styles

```css
.form-field {
  position: relative;
  margin: 1rem 0;
}
.form-field input,
.form-field textarea {
  width: 100%;
  padding: 14px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: rgba(255,255,255,0.95);
  transition: box-shadow .18s ease, border-color .18s ease;
}
.form-field label {
  position: absolute;
  left: 12px;
  top: 12px;
  color: #666;
  font-size: 0.95rem;
  transition: transform .18s ease, font-size .18s ease, top .18s ease;
  pointer-events: none;
}
.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #5b8cff;
  box-shadow: 0 6px 20px rgba(91,140,255,0.14);
}
.form-field input:focus + label,
.form-field textarea:focus + label,
.form-field input:not(:placeholder-shown) + label,
.form-field textarea:not(:placeholder-shown) + label {
  transform: translateY(-10px);
  font-size: 0.78rem;
  top: 6px;
}
```

2) Submit button with micro-interaction

```css
.btn-send {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(90deg,#5b8cff,#8fc0ff);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .08s ease, box-shadow .12s ease;
}
.btn-send:active { transform: translateY(1px) scale(.998); }
.btn-send:focus { box-shadow: 0 8px 30px rgba(91,140,255,0.2); }
```

3) Success / error feedback animation

```css
.feedback {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 600;
  animation: pop .32s ease;
}
@keyframes pop { from { transform: scale(.86); opacity:0 } to { transform: scale(1); opacity:1 } }
.success { background: #e6fff1; color: #027a3b; }
.error { background: #fff1f0; color: #a10e18; }
```

4) Spinner for async state (SVG based)

```css
.spinner { width: 22px; height: 22px; display:inline-block; }
@keyframes spin { to { transform: rotate(360deg) } }
.spinner svg { animation: spin 0.9s linear infinite; }
```

HTML to use spinner:

```html
<button class="btn-send" disabled>
  <span class="spinner">
    <svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"></circle></svg>
  </span>
  Sending...
</button>
```

---

## Security & deployment tips

- Always use environment variables for SMTP credentials and any API keys.
- Use TLS/SSL for SMTP (set EMAIL_SECURE=true and proper port).
- Use a transactional email provider (SendGrid, Mailgun, Postmark, SES) in production to ensure deliverability and avoid Gmail restrictions.
- Rate limit the send-email endpoint and use a CAPTCHA on the frontend if you expect public traffic.
- Monitor bounce and spam reports if using a transactional provider.

---

## Deploying to Vercel

This repo is ready for Vercel deployment. Steps:

1. Create a new Vercel project and connect the repository (or use the Vercel CLI).
2. Add environment variables (EMAIL_USER, EMAIL_PASS, etc.) via the Vercel project settings.
3. Set the build command to `node server.js` (or leave default for serverless functions). Use `vercel --prod` for production deployment.

If you prefer serverless functions, you may split `api/*.js` into Vercel function files in the `api/` folder and remove the monolithic `server.js`.

---

## Troubleshooting

- If emails are not delivered, check SMTP credentials, ports, and provider logs. Test with a simple Node script using nodemailer.
- Check server logs on Vercel for runtime errors.
- Use `curl` to replicate frontend requests and check responses.

---

## License

Choose an appropriate license (MIT, Apache-2.0, etc.) and add a LICENSE file.

---

If you'd like, I can also:
- Add example Node test scripts to send a test email.
- Create a minimal GitHub Actions workflow to run smoke tests on the API.
- Copy a cleaned `package.json` and provide recommended dependencies only (if you want node_modules excluded).

Tell me which of those you'd like next and I'll proceed.
