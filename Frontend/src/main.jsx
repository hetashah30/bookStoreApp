// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing
// import AuthProvider from "./context/AuthProvider.jsx"; // Importing AuthProvider for authentication context

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <div className="dark:bg-slate-900 dark:text-white">
//         <App />
//       </div>
//     </AuthProvider>
//   </BrowserRouter>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
