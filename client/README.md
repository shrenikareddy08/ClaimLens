# ClaimLens — Evidence Verification Web Application

> **“Don’t just ask if it’s real. Ask if it proves the claim.”**

ClaimLens is an AI-powered evidence verification system designed to determine whether an image or media item actually supports the claim associated with it — not merely whether the image looks real or fake.

---

## Core Product Experience

1. **Browse Content (`For You`)**:
   - Explore stories and breaking claims across Local News, World, Environment, and Current Affairs.
   - Click **“Browse with ClaimLens”** on any story.
   - Click **“Scan with ClaimLens”** to evaluate the image and claim together.

2. **Verify Evidence (`Verify`)**:
   - Drag & drop or select an image (`JPG`, `PNG`, `WEBP`).
   - Enter what the image is supposed to prove.
   - Click **“Verify with ClaimLens”** to run multi-dimensional evidence verification.

3. **Multi-Dimensional Results (No Fake Single Scores)**:
   - **Status**: `LIKELY SUPPORTED`, `NOT SUPPORTED`, `LIKELY MANIPULATED`, or `INSUFFICIENT EVIDENCE`.
   - **What We Found**:
     1. Media authenticity (synthetic generation markers)
     2. Claim/image consistency (visual-to-text semantic match)
     3. Available contextual evidence (metadata, dates, geography)
     4. Manipulation indicators (compression variance, localized tampering)
   - **Why This Result?**: Plain human-language explanations.
   - **Claim Breakdown**: Specific verification for `WHAT`, `WHERE`, and `WHEN`.
   - **What Would Strengthen This Claim?**: Concrete investigative steps.

4. **History (`My Verifications`)**:
   - Stores user verifications locally in the browser with full result retrieval.

---

## Quick Start

### 1. Run FastAPI Verification Backend
```bash
cd server
python -m uvicorn main:app --reload --port 8000
```

### 2. Run Vite Frontend
```bash
cd client
npm install
npm run dev
```

### 3. Production Build & Lint
```bash
npm run build
npm run lint
```
