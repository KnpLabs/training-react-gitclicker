// ./src/components/Score.jsx

export function Score({ lines, linesPerSecond }) {
    return (
        <>
            <h3 style={{fontFamily: 'Orbitron'}}>{lines} lines</h3>
            <small>per second: {linesPerSecond}</small>
        </>
    )
}
