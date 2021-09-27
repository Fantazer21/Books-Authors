import {v1} from 'uuid';


export type booksType = {
    id: string
    title: string,
    nameAuthor: string,
    surnameAuthor: string,
    firstPublish: string,
    coverPage: string,
    status: boolean,
}


const initialState: Array<booksType> =
    [
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


export const booksReducer = (state = initialState, action: ActionBooksTypes): Array<booksType> => {
    switch (action.type) {
        case 'EDIT_BOOK':
            let book = state.find(b => b.id === action.id)
            if (book) {
                book.title = action.title;
            }
            return [...state]

        case 'CREATE_BOOK':
            const newBook = {
                id: v1(),
                title: "New title",
                nameAuthor: "New Name",
                surnameAuthor: "New surname",
                firstPublish: "New Date",
                coverPage: "link",
                status: true,
            }
            return [...state, newBook]

        case 'REMOVE_BOOK':
            return state.filter(b => b.id !== action.id)

        default:
            return [...state]
    }
}


export const editBookAC = (id: string, title: string,) => {
    return {type: "EDIT_BOOK", id, title} as const;
};
export type EditBookAT = ReturnType<typeof editBookAC>;

export const createBookAC = () => {
    return {type: "CREATE_BOOK"} as const;
};
export type CreateBookAT = ReturnType<typeof createBookAC>;

export const removeBookAC = (id: string) => {
    return {type: "REMOVE_BOOK", id} as const;
};
export type RemoveBookAT = ReturnType<typeof removeBookAC>;


export type ActionBooksTypes = EditBookAT | CreateBookAT | RemoveBookAT



