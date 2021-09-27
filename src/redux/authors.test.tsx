import {v1} from 'uuid';
import {
    authorsReducer,
    createAuthorAC,
    editAuthorNameAC,
    editAuthorSurnameAC,
    newAuthor,
    removeAuthorAC
} from "./authorsReducer";

let startState: Array<newAuthor>

beforeEach(() => {
    startState = [
        {
            id: v1(),
            name: 'Giovanni',
            surname: 'Rodari',
            link: 'https://en.wikipedia.org/wiki/Gianni_Rodari',
            status: true
        },
        {
            id: v1(),
            name: 'Anna-Emilia',
            surname: 'Lindgren',
            link: 'https://en.wikipedia.org/wiki/Astrid_Lindgren',
            status: true
        },
        {
            id: v1(),
            name: 'Nikolay',
            surname: 'Nosov',
            link: 'https://en.wikipedia.org/wiki/Nikolay_Nosov',
            status: true
        },
    ]
})

test('Edit name should be corrected', () => {
    const id = startState[0].id
    const name = 'bla bla'


    const action = editAuthorNameAC(id, name)
    const endState = authorsReducer(startState, action)

    expect(endState[0].name).toBe('bla bla')
})

test('Edit surname should be corrected', () => {
    const id = startState[0].id
    const surname = 'bla bla'


    const action = editAuthorSurnameAC(id, surname)
    const endState = authorsReducer(startState, action)

    expect(endState[0].surname).toBe('bla bla')
})

test('Create author should be corrected', () => {
    const action = createAuthorAC()
    const endState = authorsReducer(startState, action)

    expect(endState.length).toBe(4)
})

test('Remove author should be corrected', () => {

    const a = startState[0].id
    const action = removeAuthorAC(a)
    const endState = authorsReducer(startState, action)

    expect(endState.length).toBe(2)
})
