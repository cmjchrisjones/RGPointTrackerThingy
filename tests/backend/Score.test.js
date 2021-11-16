const score = require("../../src/backend/Score");

describe('Score tests +1', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${75}   | ${{ "Game status": "InProgress", "Players": 74, "Score": 11 }}
            ${70}   | ${{ "Game status": "InProgress", "Players": 69, "Score": 11 }}
            ${50}   | ${{ "Game status": "InProgress", "Players": 49, "Score": 11 }}
            ${45}   | ${{ "Game status": "InProgress", "Players": 44, "Score": 11 }}
            ${19}   | ${{ "Game status": "InProgress", "Players": 18, "Score": 11 }}
            ${18}   | ${{ "Game status": "InProgress", "Players": 17, "Score": 11 }}
            ${17}   | ${{ "Game status": "InProgress", "Players": 16, "Score": 11 }}
            ${13}   | ${{ "Game status": "InProgress", "Players": 12, "Score": 11 }}
            ${12}   | ${{ "Game status": "InProgress", "Players": 11, "Score": 11 }}
            ${11}   | ${{ "Game status": "InProgress", "Players": 10, "Score": 11 }}
            ${7}   | ${{ "Game status": "InProgress", "Players": 6, "Score": 11 }}
        `("adds 1 to the score when remaining players are $input", ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)
    })
})

describe('Score tests +2', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${65}   | ${{ "Game status": "InProgress", "Players": 64, "Score": 12 }}
            ${60}   | ${{ "Game status": "InProgress", "Players": 59, "Score": 12 }}
            ${40}   | ${{ "Game status": "InProgress", "Players": 39, "Score": 12 }}
            ${35}   | ${{ "Game status": "InProgress", "Players": 34, "Score": 12 }}
            ${30}   | ${{ "Game status": "InProgress", "Players": 29, "Score": 12 }}
            ${25}   | ${{ "Game status": "InProgress", "Players": 24, "Score": 12 }}
            ${20}   | ${{ "Game status": "InProgress", "Players": 19, "Score": 12 }}
            ${15}   | ${{ "Game status": "InProgress", "Players": 14, "Score": 12 }}
            ${10}   | ${{ "Game status": "InProgress", "Players": 9, "Score": 12 }}
            ${8}   | ${{ "Game status": "InProgress", "Players": 7, "Score": 12 }}
 `('adds 2 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
})

describe('Score tests +3', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${14}   | ${{ "Game status": "InProgress", "Players": 13, "Score": 13 }} 
            ${5}   | ${{ "Game status": "InProgress", "Players": 4, "Score": 13 }} 
            ${3}   | ${{ "Game status": "InProgress", "Players": 2, "Score": 13 }}
 `('adds 3 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
})


describe('Score tests +4', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${6}   | ${{ "Game status": "InProgress", "Players": 5, "Score": 14 }}  
 `('adds 4 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
})

describe('Score tests +5', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${55}   | ${{ "Game status": "InProgress", "Players": 54, "Score": 15 }} 
 `('adds 2 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
})



describe('Score tests +6', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${4}   | ${{ "Game status": "InProgress", "Players": 3, "Score": 16 }}  
 `('adds 6 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
}) 

describe('Score tests +4', () => {
    let currentScore = 10;

    test.each`
            input   | expectedResult
            ${1}   | ${{ "Game status": "Won", "Players": 0, "Score": 20 }}  
 `('adds 10 to the score when remaining players are $input', ({ input, expectedResult }) => {
        expect(score(input, currentScore)).toStrictEqual(expectedResult)

    })
})