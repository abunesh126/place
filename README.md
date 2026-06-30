# Student App (Beginner Version)

A simple React project to learn the basics: components, props, state,
and routing between pages.

## How to run it

1. Install Node.js if you don't have it (https://nodejs.org)
2. Open a terminal in this folder
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open the link shown in the terminal (usually http://localhost:5173)

## What's inside, in plain English

- **main.jsx** — the starting point. Renders `<App />` into the page.
- **App.jsx** — decides which page to show based on the URL (this is called "routing").
- **components/Sidebar.jsx** — the menu shown on the left side of every page.
- **data/studentdata.js** — fake student data, like a tiny pretend database.
- **Pages/jsx/Login.jsx** — login form. Typing updates `useState` variables.
- **Pages/jsx/AddStudent.jsx** — placeholder page for adding students later.
- **Pages/jsx/ShowStudent.jsx** — shows all students in a table using `.map()`.

Each page has its own CSS file in **Pages/css/**, so it's easy to find which
style belongs to which page.

## Things to try as practice

1. Add a 4th fake student to `studentdata.js` and see it show up automatically.
2. Add an "Update Student" page, similar to AddStudent.jsx.
3. Make the login form show an error if the password is too short.
4. Change the sidebar background color in `Sidebar.css`.
"# place" 
