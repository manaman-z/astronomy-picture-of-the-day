# 🌌 Astronomy Picture of the Day (APOD) Web App

A minimalist, responsive, and dark/light-mode capable web application that displays NASA's Astronomy Picture of the Day using the official open NASA API. 

## 🚀 Live Demo
Check out the live website here: [https://manaman-z.github.io/astronomy-picture-of-the-day/](https://manaman-z.github.io/astronomy-picture-of-the-day/)

## ✨ Features
* **Real-time Data:** Fetches the daily astronomical image/video and description directly from NASA.
* **Fully Responsive:** Beautifully optimized for mobile, tablet, and desktop screens using **Tailwind CSS**.
* **Smart Cropping:** Images keep their aspect ratio without stretching, utilizing `object-cover`.
* **Theme Toggle:** Smooth transiton between Dark and Light mode (persisted via `localStorage`).
* **Secure API Deployment:** API key is fully hidden during the build process using **GitHub Actions**.
* **Custom Typography:** Features a clean layout using the *Intel One Mono* typeface.

## 🛠️ Tech Stack
* HTML5
* Vanilla JavaScript (Fetch API & Async/Await)
* Tailwind CSS

## 🔧 Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project folder:
   ```bash
   cd astronomy-picture-of-the-day
   ```
3. Get a free API Key from [NASA APIs](https://nasa.gov).
4. Open `index.html` and replace `const key = ""` with your API key:
   ```javascript
   const key = "YOUR_NASA_API_KEY";
   ```
5. Open `index.html` in your browser (or use a local server like Live Server in VS Code).

## 🔒 Security Notice
The production build injects the API key automatically via GitHub Actions secrets. The actual key is never hardcoded into the public repository history.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛸 Credits
* Astronomical data provided by [NASA APOD API](https://nasa.gov).
* Developed by [manaman-z](https://github.com/manaman-z).
