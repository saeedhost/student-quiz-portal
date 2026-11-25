# QuizPortal (GitHub Pages + Google Apps Script)

## Files Included
- `Code.gs` — Google Apps Script backend (ignored by `.gitignore` for security; handles Drive storage, `CacheService`, `LockService`, server-only answer-key protection, negative marking & passing %, student password changes, admin student management, re-attempt resets, and CSV export)
- `index.html` — Student Portal (Preloader, Sidebar Navigation, 1-Click Share Link Auto-Launch `?quiz=...&code=...`, Access Code Gate, Question & Option A–D Shuffling, Dual Overall + Per-MCQ Timer with Rollover, Skip-for-Later with Automatic Skipped MCQ Review Round, Tab-Switch Monitoring, Live Online/Offline Status, Self-Service Password Change, Explanations, Time Taken, Printable PDF)
- `admin.html` — Admin Console (Dashboard, 1-Click Share Links, Manual Multi-line MCQ Builder with Explanations, Smart Plain-Text / MS Word / CSV Importer, Bulk JSON Upload, Duplicate/Clone Quiz, Exam Rules [Negative Marking, Pass %, Answer Lock Until Expiry, Shuffle & Tab Tracking], Ranked Merit List & Printable Merit List PDF, Hardest-MCQ Question Analytics, Allow Re-attempt, Full Student Management [View History, Edit Name/Class, Reset Password, Bulk Promote Class, Delete])
- `common.js` — Shared API client, caching, SVG icons, dialogs, MCQs PDF & Class Merit List PDF generators, and responsive sidebar drawer
- `style.css` — Modern responsive stylesheet (desktop, tablet, mobile drawer, container-query stacked tables, anti-copy & print styles)
- `sample-mcqs.json` — Sample MCQ file for testing bulk JSON upload

## Quick Setup & Deployment
1. Open your Google Apps Script project and replace `Code.gs` with the updated `Code.gs`.
2. Click **Save**, then **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy** (required whenever `Code.gs` changes).
3. Push `index.html`, `admin.html`, `common.js`, `style.css`, and `README.md` to your GitHub repository (`Code.gs` is excluded by `.gitignore`).
4. Enable **GitHub Pages** in repository **Settings → Pages** (`main` branch, `/ (root)`).

## Importing MCQs (Admin)
You can add MCQs in three ways:
1. **Manual Builder**: Multi-line questions, up to 6 options (`A`–`F`), and optional explanations.
2. **Smart Text / CSV Import**: Paste plain text straight from MS Word, ChatGPT, or WhatsApp (`1. Question... A) ... Answer: B ... Explanation: ...`) or upload an Excel/Google Sheets `.csv` file.
3. **Bulk JSON Upload**: Upload a `.json` array (or object with `questions`), with optional `explanation`:

```json
[
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Jupiter", "Venus"],
    "correct": "Mars",
    "explanation": "Iron oxide on its surface gives Mars its reddish color."
  },
  {
    "question": "What is the chemical symbol for Water?",
    "options": ["O2", "H2O", "CO2", "NaCl"],
    "correct": "B"
  }
]
```
