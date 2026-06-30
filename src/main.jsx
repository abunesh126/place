// This is the very first file React runs.
// It takes our <App /> component and puts it inside the #root div in index.html.

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
