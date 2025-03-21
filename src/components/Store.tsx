import "./Store.css";
import items from "@/items.json";
// import PropTypes from "prop-types";

export function Store({ lines, onBuy }) {
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
          <button
            onClick={() => onBuy(item)}
            disabled={!canBuy(item)}
            type="button"
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
}

// Store.propTypes = {
//   lines: PropTypes.number.isRequired,
//   onBuy: PropTypes.func.isRequired,
// };
