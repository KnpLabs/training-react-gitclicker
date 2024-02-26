type Props = {
  lines: number;
  linesPerSecond: number;
}

export function Score({ lines, linesPerSecond }: Props) {
  return (
    <>
      <h3 style={{fontFamily: 'Orbitron'}}>{lines} lines</h3>
      <small>per second: {linesPerSecond}</small>
    </>
  )
}
