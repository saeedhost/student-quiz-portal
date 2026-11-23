# QuizPortal (GitHub Pages + Google Apps Script)

## Files Included
- `Code.gs` — Google Apps Script backend (Google Drive storage, CacheService speed layer, LockService concurrency protection, automatic expiry scheduling, batch quiz submission, CSV export)
- `index.html` — Student Portal (Preloader, Left Sidebar Navigation, Registration/Sign-In, Live Quiz Countdowns, LocalStorage Answer Array Engine with Single Final Submit, Results Review & History)
- `admin.html` — Admin Console (Preloader, Left Sidebar Navigation, Dashboard, Manual MCQ Builder & Bulk JSON Upload, Start Time + Allowed Minutes Auto-Expiry Scheduling, Reschedule/Edit/Delete Quizzes, Student Attempts & Breakdown Modal, CSV/JSON Export)
- `common.js` — Shared API client, caching, icons, dialogs, formatting, and responsive sidebar drawer logic
- `style.css` — Modern responsive stylesheet (desktop, tablet, mobile drawer, container-query stacked tables)

## Quick Setup
1. Open your Google Apps Script project and replace `Code.gs` with the included `Code.gs`.
2. Click **Save**, then **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**.
3. Upload `index.html`, `admin.html`, `common.js`, and `style.css` to your GitHub repository.
4. Enable **GitHub Pages** in repository **Settings → Pages** (`main` branch, `/ (root)`).

## Bulk JSON Upload Format (Admin)
Upload a `.json` file containing an array of MCQ objects (or an object with a `questions` array). `correct` can be the exact option text, an option letter (`"A"`–`"F"`), or a 1-based index (`1`–`6`):

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
