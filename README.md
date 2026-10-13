# 🚀 AI Mentor – Complete Intern Onboarding & Local Setup Master Guide

Welcome to the **AI Mentor** engineering team! This comprehensive guide walks you through the entire onboarding process step-by-step—from forking the repository and setting up your Neon PostgreSQL database in the **Singapore (ap-southeast-1)** region, to installing frontend, backend, and AI service dependencies, and successfully submitting your first Pull Request (PR).

---

## 📌 Repository Links

| Repository | Purpose | URL |
| :--- | :--- | :--- |
| **Main Project Repository** | Repository where all interns contribute | [https://github.com/Deepak3699/Ai_Mentor](https://github.com/Deepak3699/Ai_Mentor) |
| **Setup & Guide Repository** | Interactive setup dashboard & documentation | [https://github.com/Deepak3699/Ai_Mentor_Setup](https://github.com/Deepak3699/Ai_Mentor_Setup) |

---

## 🏗 Project Architecture & Port Mapping

AI Mentor is composed of **5 dedicated microservices/subsystems**:

```
Ai_Mentor/
├── backend/            # Express.js REST API (Port 5000)
├── frontend/           # Learner Web UI - Vite + React (Port 5173)
├── backendAdmin/       # Admin Backend REST API (Port 5001)
├── frontendAdmin/      # Admin Dashboard - Vite + React (Port 5174)
└── ai_service/         # AI Microservice - Python + FastAPI (Port 8000)
    └── backend/        # FastAPI server & AI pipelines
```

| Service | Folder | Technology | Port | Default URL |
| :--- | :--- | :--- | :--- | :--- |
| **Backend API** | `backend/` | Node.js, Express, Neon PostgreSQL | `5000` | `http://localhost:5000` |
| **Learner Frontend** | `frontend/` | React, Vite, Tailwind CSS | `5173` | `http://localhost:5173` |
| **Backend Admin** | `backendAdmin/` | Node.js, Express | `5001` | `http://localhost:5001` |
| **Frontend Admin** | `frontendAdmin/` | React, Vite, Tailwind CSS | `5174` | `http://localhost:5174` |
| **AI Service** | `ai_service/backend/` | Python 3.10+, FastAPI, Gemini, Groq, FFmpeg | `8000` | `http://localhost:8000/docs` |

---

## 📋 System Prerequisites

Before starting, ensure you have installed the required software on your machine:

1. **Node.js**: Version `18.x` or `20.x LTS` ([Download Node.js](https://nodejs.org/))
   ```bash
   node -v
   npm -v
   ```
2. **Python**: Version `3.10` or higher ([Download Python](https://www.python.org/downloads/))
   ```bash
   python --version
   ```
3. **Git**: Version `2.30+` ([Download Git](https://git-scm.com/))
   ```bash
   git --version
   ```
4. **FFmpeg** *(Crucial for the AI Audio/Video Service)*:
   - **Windows** (Run in PowerShell as Administrator):
     ```powershell
     winget install Gyan.FFmpeg
     ```
   - **macOS** (Homebrew):
     ```bash
     brew install ffmpeg
     ```
   - **Linux** (Debian/Ubuntu):
     ```bash
     sudo apt update && sudo apt install -y ffmpeg
     ```
   - Verify:
     ```bash
     ffmpeg -version
     ```

---

## ⚡ Step 1: Fork and Clone the GitHub Repository

> ⚠️ **Rule:** Do not clone directly to push to `main`. Always **Fork** the repository first.

1. Open the official repository: [https://github.com/Deepak3699/Ai_Mentor](https://github.com/Deepak3699/Ai_Mentor)
2. In the top-right corner, click **Fork** → **Create fork** to copy it into your own GitHub account.
3. Open your terminal in your preferred workspace directory and clone your fork:
   ```bash
   # Replace <your-github-username> with your GitHub username
   git clone https://github.com/<your-github-username>/Ai_Mentor.git
   cd Ai_Mentor
   ```
4. Configure the **upstream remote** to sync future team updates:
   ```bash
   git remote add upstream https://github.com/Deepak3699/Ai_Mentor.git
   git remote -v
   ```
   *(You should see `origin` pointing to your fork and `upstream` pointing to `Deepak3699/Ai_Mentor`)*
5. Configure your Git identity:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your-github-email@example.com"
   ```

---

## 📦 Step 2: Install Dependencies

### Option A: Quick Monorepo Setup (Root Directory)
If the repository has a root setup script:
```bash
npm run setup
```

### Option B: Manual Installation per Service (Recommended)

1. **Backend Dependencies:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

2. **Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Backend Admin Dependencies:**
   ```bash
   cd backendAdmin
   npm install
   cd ..
   ```

4. **Frontend Admin Dependencies:**
   ```bash
   cd frontendAdmin
   npm install
   cd ..
   ```

5. **AI Service Dependencies (Python Virtual Environment):**
   ```bash
   cd ai_service/backend

   # Create virtual environment
   python -m venv venv

   # Activate virtual environment:
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   # Upgrade pip and install packages:
   pip install --upgrade pip
   pip install -r requirements.txt
   cd ../..
   ```

> 💡 **Windows Troubleshooting:** If PowerShell displays `File cannot be loaded because running scripts is disabled on this system`, run:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```
> and re-run `.\venv\Scripts\activate`.

---

## 🐘 Step 3: Neon PostgreSQL Database Setup (Singapore Region)

The project uses [Neon Serverless PostgreSQL](https://neon.tech/). Follow these steps:

1. **Create Account:**
   - Go to [https://console.neon.tech/](https://console.neon.tech/) and sign in with GitHub or Google.
2. **Create New Project:**
   - Click **New Project**.
   - Set **Project Name** to: `Ai_Mentor` (or `ai-mentor-db`).
3. **Select Region (MANDATORY):**
   - In the Region dropdown, select **Singapore (`ap-southeast-1`)**.
   - *Do NOT select US or Europe regions; Singapore ensures lowest latency and compatibility with deployed team resources.*
4. **Copy Connection String:**
   - In your Neon project dashboard under **Connection Details**, ensure **Pooled connection** is toggled on.
   - Copy the connection string snippet:
     ```text
     postgresql://username:password@ep-lucky-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
     ```
5. **Paste into Backend `.env`:**
   - Open `backend/.env` and update both `NEON_DATABASE_URL` and `DATABASE_URL`:
     ```env
     NEON_DATABASE_URL="postgresql://username:password@ep-lucky-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
     DATABASE_URL="postgresql://username:password@ep-lucky-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
     ```
   - Also update `backendAdmin/.env` with the same database connection string.

6. **Initialize Tables (Prisma / Schema Migration):**
   ```bash
   cd backend
   npx prisma db push
   # or
   npx prisma migrate dev --name init
   cd ..
   ```

---

## 🔐 Step 4: Setup Environment Variables (`.env`)

Run these commands in the root of `Ai_Mentor` to copy example files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp backendAdmin/.env.example backendAdmin/.env
cp frontendAdmin/.env.example frontendAdmin/.env
cp ai_service/backend/.env.example ai_service/backend/.env
```

### 1. `backend/.env`
```env
PORT=5000
NODE_ENV=development

# Neon PostgreSQL Singapore connection string
NEON_DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

# JWT Secret for Auth Tokens
JWT_SECRET=super_secret_jwt_key_intern_development_2026_xyz
JWT_EXPIRES_IN=7d

FRONTEND_URL=http://localhost:5173
AI_SERVICE_URL=http://localhost:8000

# Payment Gateways (Mock or test keys)
STRIPE_SECRET_KEY=sk_test_mock_stripe_key
RAZORPAY_KEY_ID=rzp_test_mock_key
RAZORPAY_KEY_SECRET=rzp_test_mock_secret
```

### 2. `frontend/.env`
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_AI_SERVICE_URL=http://localhost:8000
```

### 3. `backendAdmin/.env`
```env
PORT=5001
NODE_ENV=development
DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
NEON_DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
JWT_SECRET=super_secret_admin_jwt_key_2026_xyz
ADMIN_FRONTEND_URL=http://localhost:5174
```

### 4. `frontendAdmin/.env`
```env
VITE_API_BASE_URL=http://localhost:5001
```

### 5. `ai_service/backend/.env`
```env
PORT=8000
ENVIRONMENT=development

# Free API Keys:
# Google AI Studio: https://aistudio.google.com/
GEMINI_API_KEY=your_gemini_api_key_here

# Groq Console: https://console.groq.com/
GROQ_API_KEY=your_groq_api_key_here

# Cloudinary (for storing audio/video clips):
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

FFMPEG_PATH=
```

---

## 🚀 Step 5: Start All Services & Verification

Open separate terminal tabs and start each service in the following order:

### 1. Terminal 1: Backend API (Port 5000)
```bash
cd backend
npm run dev
```
> Verification: Visit [http://localhost:5000/health/live](http://localhost:5000/health/live) → `{"status":"alive"}`

### 2. Terminal 2: Backend Admin (Port 5001)
```bash
cd backendAdmin
npm run dev
```
> Verification: Visit [http://localhost:5001/health/live](http://localhost:5001/health/live) → `{"status":"alive"}`

### 3. Terminal 3: AI Service (Port 8000)
```bash
cd ai_service/backend

# Activate virtual environment
# Windows: .\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

python graceful_server.py
```
> Verification: Visit [http://localhost:8000/docs](http://localhost:8000/docs) → FastAPI Swagger UI

### 4. Terminal 4: Learner Frontend (Port 5173)
```bash
cd frontend
npm run dev
```
> Verification: Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Terminal 5: Admin Frontend (Port 5174)
```bash
cd frontendAdmin
npm run dev
```
> Verification: Open [http://localhost:5174](http://localhost:5174) in your browser.

---

## 🔱 Step 6: Git Branching & Pull Request (PR) Workflow

Follow this professional Git workflow for all task assignments:

### 1. Always Sync with `upstream/main`
Before creating a new branch, ensure your local copy is up to date:
```bash
git checkout main
git pull upstream main
```

### 2. Create a Feature Branch
Choose a clear, descriptive branch name:
- `feature/<feature-name>` (e.g. `feature/setup-neon-db`)
- `bugfix/<issue-name>` (e.g. `bugfix/fix-audio-upload`)
- `docs/<doc-name>` (e.g. `docs/update-guide`)

```bash
git checkout -b feature/setup-neon-db
```

### 3. Make Changes and Commit
```bash
# Check modified files
git status

# Stage changes
git add .

# Commit with a conventional commit message
git commit -m "feat(backend): configure neon db connection for singapore region"
```

### 4. Push Branch to Your GitHub Fork
```bash
git push -u origin feature/setup-neon-db
```

### 5. Open a Pull Request (PR) on GitHub
1. Go to the main repository: [https://github.com/Deepak3699/Ai_Mentor](https://github.com/Deepak3699/Ai_Mentor)
2. You will see a banner: **"feature/setup-neon-db had recent pushes. Compare & pull request"**. Click it.
3. Verify settings:
   - **Base repository:** `Deepak3699/Ai_Mentor` (Branch: `main`)
   - **Head repository:** `<your-username>/Ai_Mentor` (Branch: `feature/setup-neon-db`)
4. Fill in the PR Title and Description:
   ```markdown
   ### Summary of Changes
   - Connected backend and backendAdmin to Neon PostgreSQL (Singapore region).
   - Added environment variable templates for all 5 services.
   - Tested backend health endpoint on Port 5000.

   ### Affected Services
   - [x] Backend
   - [ ] Frontend
   - [ ] AI Service
   - [ ] Admin

   ### Verification
   - Tested endpoint: http://localhost:5000/health/live returns alive status.
   ```
5. Click **Create Pull Request**.

### 6. Updating your PR after Mentor Review
If your mentor requests changes, **do not close the PR**. Make updates locally on the same branch and push:
```bash
# Edit code files in VS Code...
git add .
git commit -m "fix: address mentor feedback on connection pool settings"
git push origin feature/setup-neon-db
```
The PR will automatically update!

---

## 🛠 Troubleshooting & FAQ

| Issue | Solution |
| :--- | :--- |
| **Port 5000 already in use** | Find and kill the process: <br>• Windows: `netstat -ano \| findstr :5000` then `taskkill /PID <PID> /F`<br>• Mac/Linux: `kill -9 $(lsof -ti:5000)` |
| **Neon Connection Timeout** | Ensure `?sslmode=require` is at the end of your connection string. Make sure you selected Singapore region. |
| **Python script execution disabled on Windows** | In PowerShell run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| **FFmpeg not recognized** | Run `winget install Gyan.FFmpeg` on Windows and restart your terminal. |
| **Merge conflict with upstream** | Run: `git checkout main && git pull upstream main`<br>Then: `git checkout feature/your-branch && git merge main`<br>Resolve conflicts in VS Code, then `git commit` and `git push`. |

---

## 💬 Getting Help
If you get stuck or have questions:
- Check this guide or open the interactive onboarding portal at [Ai_Mentor_Setup](https://github.com/Deepak3699/Ai_Mentor_Setup).
- Reach out to the mentor team on our team communications channel with the error message and terminal output screenshot.
