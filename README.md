# My Travel Journal

A React app that displays a personal log of past trips — each entry showing a photo, location, dates, and description. Built as a practice project while learning data-driven React.

## Features

- Displays a list of travel entries rendered dynamically from a data file
- Each entry includes an image, country/location, dates, a short description, and a link to view the location on Google Maps
- Entries are generated using `.map()` over an array of trip data — no hardcoded, repeated components

## Tech stack

- React 19
- Vite

## What I practiced building this

- Component architecture (`Header`, `Entry`, `App`)
- Props and passing data between components
- Rendering lists with `.map()` and using stable `key` props
- Conditional rendering
- Structuring reusable data (`TripsData.jsx`) separately from UI components

## Getting started

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd TravelJournal
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project structure

```
src/
  assets/          # trip images
  components/
    Header.jsx
    Entry.jsx
    TripsData.jsx  # trip data array
  App.jsx
  index.css
  main.jsx
```

## Screenshots

_Add a screenshot of the app here._

## Notes

This project is part of my ongoing journey learning React through the Scrimba Full-Stack React path, alongside freeCodeCamp's React course on YouTube.