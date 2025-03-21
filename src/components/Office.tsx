export function Office({ items }) {
  return (
    <>
      <h2>Office</h2>
      <ul>
        {Object.keys(items).map((name) => (
          <li key={name}>
            <span>
              {items[name]} {name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
