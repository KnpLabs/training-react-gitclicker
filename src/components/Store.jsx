import "./Store.css";
import items from "@/items.json";

export function Store({ lines }) {
  const canBuy = (item) => {
    return lines >= item.price;
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name} className="item">
          <span>
            {item.name} - {item.price}
          </span>
          <button disabled={!canBuy(item)} type="button">
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
}
