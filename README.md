# QuizPortal (GitHub Pages + Google Apps Script)

## Files Included
- `Code.gs` — Google Apps Script backend (ignored by `.gitignore` for security; handles Drive storage, CacheService, LockService, unique 3–10 char quiz access codes, automatic expiry scheduling, batch submission with saved options, CSV export)
- `index.html` — Student Portal (Preloader, Left Sidebar Navigation, Access Code Gate, Dual Overall + Per-MCQ Timer with Automatic Unused Time Rollover & Auto-Skip, LocalStorage Answer Array with Single Final Submit, Anti-Copy / No Text Selection, Printable MCQs PDF Download)
- `admin.html` — Admin Console (Preloader, Left Sidebar Navigation, Dashboard, Unique Quiz Code Generator, Manual MCQ Builder & Bulk JSON Upload, Start Time + Allowed Minutes Auto-Expiry Scheduling, Reschedule/Edit/Delete Quizzes, Student Attempts & Breakdown Modal, CSV/JSON/PDF Export)
- `common.js` — Shared API client, caching, SVG icons, dialogs, PDF generator, and responsive sidebar drawer
- `style.css` — Modern responsive stylesheet (desktop, tablet, mobile drawer, container-query stacked tables, anti-copy & print styles)
- `sample-mcqs.json` — Sample 5-MCQ file for testing bulk JSON upload

## Quick Setup
1. Open your Google Apps Script project and replace `Code.gs` with the included `Code.gs`.
2. Click **Save**, then **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**.
3. Upload `index.html`, `admin.html`, `common.js`, and `style.css` to your GitHub repository (`Code.gs` is excluded by `.gitignore`).
4. Enable **GitHub Pages** in repository **Settings → Pages** (`main` branch, `/ (root)`).

## Bulk JSON Upload Format (Admin)
Upload a `.json` file containing an array of MCQ objects (or an object with `questions` and optional `quizName`, `quizCode`, `totalTimeMinutes`, `marksPerMcq`). `correct` accepts exact option text, an option letter (`"A"`–`"F"`), or a 1-based number (`1`–`6`):

```json
[
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Jupiter", "Venus"],
    "correct": "Mars"
  },
  {
    "question": "What is the chemical symbol for Water?",
    "options": ["O2", "H2O", "CO2", "NaCl"],
    "correct": "B"
  }
]
```
