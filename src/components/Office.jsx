// ./src/components/Office.jsx

export function Office({ items }) {
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
