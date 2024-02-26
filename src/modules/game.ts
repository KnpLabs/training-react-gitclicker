import { Item, OwnedItems } from '../type'

// TypeScript enum
enum ActionTypes {
    CLICK = 'game::CLICK',
    BUY_ITEM = 'game::BUY_ITEM',
    LOOP = 'game::LOOP'
}

// Action creators
type ClickAction = {
    type: ActionTypes.CLICK;
}

export const click = () => ({
    type: ActionTypes.CLICK
})

type BuyItemAction = {
    type: ActionTypes.BUY_ITEM;
    item: Item;
}

export const buyItem = (item: Item) => ({
    type: ActionTypes.BUY_ITEM,
    item
})

type LoopAction = {
    type: ActionTypes.LOOP;
}

export const loop = () => ({
    type: ActionTypes.LOOP
})

// Initial state
type GameState = {
    lines: number,
    linesPerMillisecond: number,
    skills: OwnedItems
}

const INITIAL_STATE: GameState = {
    lines: 0,
    linesPerMillisecond: 0,
    skills: {}
}

// Reducer
export function reducer(
    state = INITIAL_STATE,
    action: ClickAction | BuyItemAction | LoopAction
): GameState {
    const { type } = action

    switch (type) {
        case ActionTypes.LOOP:
            return { ...state, lines: state.lines + state.linesPerMillisecond }
        case ActionTypes.CLICK:
            return { ...state, lines: state.lines + 1 }
        case ActionTypes.BUY_ITEM: {
            const { item: { name, price, linesPerMillisecond: itemLinesPerMillisecond }} = action
            const { skills, lines, linesPerMillisecond } = state

            return {
                ...state,
                lines: lines - price,
                linesPerMillisecond: linesPerMillisecond + itemLinesPerMillisecond,
                skills: {
                    ...skills,
                    [name]: (skills[name] || 0) + 1
                }
            }
        }

        default: return state
    }
}
