
# Interactive Calendar Component
Overview
# Deployed Link
https://userinteractivecalender.netlify.app/
# video link
https://youtu.be/wheq2wWm0Xc
This is a responsive interactive calendar component built using React, Redux Toolkit, and Tailwind CSS.
It allows users to select date ranges (via click or drag) and attach notes to specific dates or ranges, with data persisted using localStorage.

# Key Features
<> Dynamic monthly calendar with correct date alignment
<> Month navigation (previous/next)
<> Date range selection (single, partial, or full range)
<> Notes attached to selected date or range
<> Data persistence using localStorage
<> Fully responsive (desktop + mobile)
<> Smooth animations using Framer Motion

# Tech Stack
React.js
Redux Toolkit
Tailwind CSS
Framer Motion
Vite

# Setup Instructions
1. Install dependencies
npm install
2. Install animation library
npm install framer-motion
3. Run the project
npm run dev
4. Open in browser
http://localhost:5173

# Design & Implementation Choices
Used Redux Toolkit for centralized and predictable state management
Stored dates in a normalized format to avoid range inconsistency issues
Implemented drag-based range selection for better user experience
Used Tailwind CSS for fast, responsive UI development
Added Framer Motion animations to improve interaction and visual feedback
Persisted notes using localStorage (as no backend is required)

# Notes

This project focuses entirely on frontend implementation as per requirements, without using any backend or API.
