# 🛡️ Valorant Agents Banner

This website allows you to view the list of Valorant agents, including detailed information about each character and their skill set.

## ✨ Features
- View the list of Valorant agents
- See detailed information for each character
- Explore the skill set of each agent

## ⚙️ Technologies Used
- **Frontend:** React.js, TailwindCSS, Axios
- **Backend:** json-server (API mock from JSON file)

## 🚀 Installation & Usage

### 🖥️ System Requirements
- Node.js >= 14
- npm >= 6

### 📦 Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd Valorant-Agents-Banner
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start backend (json-server):**
   ```bash
   npm run json
   ```

4. **Start frontend:**
   ```bash
   npm run dev
   ```

5. **Access the website:**
   - Frontend: http://localhost:5173/
   - Backend API: http://localhost:3001/

## 📝 Notes
- Make sure json-server is running so the frontend can fetch agent data.
- You can customize agent data in the `src/db/db.json` file.
