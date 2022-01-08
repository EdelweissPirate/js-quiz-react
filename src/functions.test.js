import { constructQuestionList, cycleN } from './functions'

test("Creates a question list", () => {
    expect(constructQuestionList('easy', 'regular').length).toBeGreaterThan(0)
})

test("Cycles n between min and max values", () => {
    expect(cycleN(3, 1, 3)).toBe(1)
})