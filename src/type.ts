export type Item = {
    id: number;
    name: string;
    price: number;
    linesPerMillisecond: number;
}

export type OwnedItems = {
    [key: string]: number;
}

export enum RequestStatus {
    Idle = 'idle',
    Loading = 'loading',
    Succeeded = 'succeeded',
    Failed = 'failed'
}
