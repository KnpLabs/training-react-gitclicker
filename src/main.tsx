import { createRoot } from "react-dom/client";
import ParentComponent from "./ParentComponent";
import { Game } from "./components/Game";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <ParentComponent />
    {/* 💡 Uncomment the following to enable the Game component */}
    <Game />
  </>,
);
