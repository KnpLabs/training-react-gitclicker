export type Item = {
  id: number
  name: string
  price: number
  linesPerMillisecond: number
}

export type OwnedItems = {
  [key: string]: number
}

export const RequestStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Succeeded: 'succeeded',
  Failed: 'failed',
} as const

export type TRequestStatus = typeof RequestStatus[keyof typeof RequestStatus]
