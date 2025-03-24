import type { OwnedItems } from "@/types";

type Props = {
  items: OwnedItems;
};

export function Office({ items }: Props) {
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
