import {v1} from "uuid";
import {booksReducer, booksType, createBookAC, editBookAC, removeBookAC} from "./booksReducer";


let startState: Array<booksType>

beforeEach(() => {
    startState = [
        {
            id: v1(),
            title: 'Cippolino',
            nameAuthor: 'Giovanni',
            surnameAuthor: 'Rodari',
            firstPublish: '1957',
            coverPage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Russia_stamp_1992_No_16.jpg/330px-Russia_stamp_1992_No_16.jpg',
            status: true,
        },
        {
            id: v1(),
            title: 'Karlsson-on-the-Roof',
            nameAuthor: 'Anna-Emilia',
            surnameAuthor: 'Lindgren',
            firstPublish: '1955',
            coverPage: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Russia_stamp_1992_No_18.jpg',
            status: true,
        },
        {
            id: v1(),
            title: 'Dunno on the moon',
            nameAuthor: 'Nikolya',
            surnameAuthor: 'Nosov',
            firstPublish: '1953',
            coverPage: 'https://upload.wikimedia.org/wikipedia/en/1/17/Neznaika_1965.jpg',
            status: true,
        },
    ]
})

test('Book should be added', () => {
    const action = createBookAC()
    const endState = booksReducer(startState, action)

    expect(endState.length).toBe(4)
})

test('Book should be removed', () => {
    const idBook = startState[2].id
    const action = removeBookAC(idBook)
    const endState = booksReducer(startState, action)

    expect(endState.length).toBe(2)
})

test("Title in book should be changed", () => {
    const idBook = startState[2].id
    const newTitle = 'New title'

    const action = editBookAC(idBook, newTitle)
    const endState = booksReducer(startState, action)

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe('New title')

})

