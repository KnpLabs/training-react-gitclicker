export type Item = {
    name: string;
    price: number;
    linesPerMillisecond: number;
    icon: string;
}

export type OwnedItems = {
    [key: string]: number;
}
