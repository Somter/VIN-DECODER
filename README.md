# VIN Decoder

A minimalistic, responsive Single Page Application (SPA) built with React and TypeScript for decoding Vehicle Identification Numbers (VIN) using the public NHTSA API.

**[Live Demo]()**

## Project Overview

This application allows users to quickly decode any valid VIN to retrieve detailed vehicle specifications. It was developed with a focus on clean architecture, semantic markup, and responsive design without the use of heavy CSS frameworks.

### Key Features:
- **VIN Decoding:** Validates and decodes VIN codes (up to 17 characters), displaying only the variables that have returned values.
- **Search History:** Automatically saves the last 3 uniquely searched VINs for quick re-fetching.
- **Variables Dictionary:** Browse a complete list of all possible vehicle variables (`/variables`).
- **Detailed Descriptions:** View expanded descriptions for any specific variable (`/variables/:id`).
- **Validation & Error Handling:** Prevents invalid submissions (empty fields, forbidden characters like I, O, Q) and displays clear API or network error messages in the UI.
- **Responsive Layout:** Adaptive BEM-based CSS ensuring smooth rendering across devices (from 320px to 1440px screens).

## Tech Stack
- **Frontend:** React (Hooks, Functional Components), TypeScript
- **Routing:** React Router v6
- **Styling:** Vanilla CSS (BEM methodology, Flexbox)
- **Build Tool:** Vite
- **API:** [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/)

## Local Setup Instructions

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Somter/VIN-DECODER.git](https://github.com/Somter/VIN-DECODER.git)

2. **Navigate to the project directory:**
   ```bash
   cd VIN-DECODER

3. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm run dev

## Running the App

To view the application in your browser, open the following URL: http://localhost:5173
