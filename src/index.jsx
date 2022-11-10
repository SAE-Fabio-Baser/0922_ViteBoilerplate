import { createRoot } from "react-dom/client"
import App from "./views/App"

const root = createRoot(document.querySelector("#app"))

// Start React
root.render(<App />)