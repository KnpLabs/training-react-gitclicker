export type Item = {
    name: string;
    price: number;
    linesPerMillisecond: number;
}

export type OwnedItems = {
    [key: string]: number;
}
