import { createRoot } from "react-dom/client";

const user = {
  id: 1,
  name: "John Doe",
};

function capitalize(name) {
  return name.toUpperCase();
}

function getAvatarUrl(user) {
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${user.name}${user.id}`;
}

const greeting = (
  <div>
    <h1>Hello {capitalize(user.name)}</h1>
    <img src={getAvatarUrl(user)} alt={`${user.name}'s avatar`} />
  </div>
);

const header = (
  <header>
    <img src="https://picsum.photos/id/237/200/300" alt="picsum" />
    {greeting}
  </header>
);

const root = createRoot(document.getElementById("root"));

root.render(header);
