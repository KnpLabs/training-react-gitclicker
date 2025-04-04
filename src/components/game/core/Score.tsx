type Props = {
  lines: number
  linesPerSecond: number
}

export function Score({ lines, linesPerSecond }: Props) {
  return (
    <>
      <h3 style={{ fontFamily: 'Orbitron' }}>
        {Math.ceil(lines)} lines
      </h3>
      <small>
        per second: {Math.ceil(linesPerSecond * 10)}
      </small>
    </>
  )
}
