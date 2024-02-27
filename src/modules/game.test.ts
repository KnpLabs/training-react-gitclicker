import game, { buyItem, click, loop } from './game'

describe('game reducer', () => {
    it('should handle loop action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {},
            items: []
          }

        const action = loop()

        const expectedState = {
            lines: 12,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle click action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        const action = click()

        const expectedState = {
            lines: 7,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, with no existing skills', () => {
        const item = {
            id: 1,
            name: 'Bash',
            price: 10,
            linesPerMillisecond: 0.5,
            icon: '/some/icon/path.svg'
        }

        const action = buyItem(item)

        const state = {
            lines: 25,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 1
            },
            items: []
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, when the skill has already been bought', () => {
        const item = {
            id: 1,
            name: 'Bash',
            price: 10,
            linesPerMillisecond: 0.5,
            icon: '/some/icon/path.svg'
        }

        const action = buyItem(item)

        const state = {
            lines: 25,
            linesPerMillisecond: 6,
            skills: {
                'Bash': 4
            },
            items: []
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 5
            },
            items: []
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, when another skill has already been bought', () => {
        const item = {
            id: 1,
            name: 'Bash',
            price: 10,
            linesPerMillisecond: 0.5,
            icon: '/some/icon/path.svg'
        }

        const action = buyItem(item)

        const state = {
            lines: 25,
            linesPerMillisecond: 6,
            skills: {
                'Bash': 4,
                'Javascript': 2,
                'Vim': 1
            },
            items: []
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 5,
                'Javascript': 2,
                'Vim': 1
            },
            items: []
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle unknown action', () => {
            const state = {
                lines: 6,
                linesPerMillisecond: 6,
                skills: {},
                items: []
            }

            const action = { type: 'UNKNOWN ACTION' }

            expect(game.reducer(state, action)).toEqual(state)
    })

    it('should handle initGame action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        const action = {
            type: 'game/initGame',
            payload: {
                lines: 10,
                linesPerMillisecond: 10,
                skills: {
                    'Bash': 5,
                    'Javascript': 2
                },
                items: [
                    {
                        id: 1,
                        name: 'Bash',
                        price: 10,
                        linesPerMillisecond: 0.5,
                        icon: '/some/icon/path.svg'
                    },
                    {
                        id: 2,
                        name: 'Git',
                        price: 100,
                        linesPerMillisecond: 1.2,
                        icon: '/some/icon/path.svg'
                    },
                    {
                        id: 3,
                        name: 'Javascript',
                        price: 10000,
                        linesPerMillisecond: 14.0,
                        icon: '/some/icon/path.svg'
                    }
                ]
            }
        }

        const expectedState = {
            lines: 10,
            linesPerMillisecond: 10,
            skills: {
                'Bash': 5,
                'Javascript': 2,
            },
            items: [
                {
                    id: 1,
                    name: 'Bash',
                    price: 10,
                    linesPerMillisecond: 0.5,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 2,
                    name: 'Git',
                    price: 100,
                    linesPerMillisecond: 1.2,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 3,
                    name: 'Javascript',
                    price: 10000,
                    linesPerMillisecond: 14.0,
                    icon: '/some/icon/path.svg'
                },
            ]
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle fetchedItems action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {},
            items: []
        }

        const action = {
            type: 'game/fetchedItems',
            payload: [
                {
                    id: 1,
                    name: 'Bash',
                    price: 10,
                    linesPerMillisecond: 0.5,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 2,
                    name: 'Git',
                    price: 100,
                    linesPerMillisecond: 1.2,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 3,
                    name: 'Javascript',
                    price: 10000,
                    linesPerMillisecond: 14.0,
                    icon: '/some/icon/path.svg'
                }
            ]
        }

        const expectedState = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {},
            items: [
                {
                    id: 1,
                    name: 'Bash',
                    price: 10,
                    linesPerMillisecond: 0.5,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 2,
                    name: 'Git',
                    price: 100,
                    linesPerMillisecond: 1.2,
                    icon: '/some/icon/path.svg'
                },
                {
                    id: 3,
                    name: 'Javascript',
                    price: 10000,
                    linesPerMillisecond: 14.0,
                    icon: '/some/icon/path.svg'
                }
            ]
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })
})
