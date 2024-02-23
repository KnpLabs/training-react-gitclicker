// ./src/components/Office.tsx

import { OwnedItems } from "../type"

type Props = {
  items: OwnedItems;
}

export function Office({ items }: Props) {
    return (
        <>
            <h2>Office</h2>
            <ul>
                {Object.keys(items).map((name, key) =>
                <li key={key}>
                    <span>{items[name]} {name}</span>
                </li>
                )}
            </ul>
        </>
    )
}
