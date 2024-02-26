import game, { buyItem, click, loop } from './game'

describe('game reducer', () => {
    it('should handle loop action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {}
          }

        const action = loop()

        const expectedState = {
            lines: 12,
            linesPerMillisecond: 6,
            skills: {}
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle click action', () => {
        const state = {
            lines: 6,
            linesPerMillisecond: 6,
            skills: {}
        }

        const action = click()

        const expectedState = {
            lines: 7,
            linesPerMillisecond: 6,
            skills: {}
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, with no existing skills', () => {
        const item = {
            name: 'Bash',
            price: 10,
            linesPerMillisecond: 0.5,
            icon: '/some/icon/path.svg'
        }

        const action = buyItem(item)

        const state = {
            lines: 25,
            linesPerMillisecond: 6,
            skills: {}
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 1
            }
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, when the skill has already been bought', () => {
        const item = {
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
            }
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 5
            }
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle buyItem action, when another skill has already been bought', () => {
        const item = {
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
            }
        }

        const expectedState = {
            lines: 15,
            linesPerMillisecond: 6.5,
            skills: {
                'Bash': 5,
                'Javascript': 2,
                'Vim': 1
            }
        }

        expect(game.reducer(state, action)).toEqual(expectedState)
    })

    it('should handle unknown action', () => {
            const state = {
                lines: 6,
                linesPerMillisecond: 6,
                skills: {}
            }

            const action = { type: 'UNKNOWN ACTION' }

            expect(game.reducer(state, action)).toEqual(state)
    })
})
