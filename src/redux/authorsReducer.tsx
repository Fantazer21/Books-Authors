import {v1} from 'uuid';

export type newAuthor = {
    id: string
    name: string,
    surname: string,
    link: string,
    status: boolean
}


export const editAuthorNameAC = (id: string, name: string) => {
    return {type: "EDIT_AUTHOR_NAME", id, name} as const;
};
export type EditAuthorNameAT = ReturnType<typeof editAuthorNameAC>;

export const editAuthorSurnameAC = (id: string, surname: string) => {
    return {type: "EDIT_AUTHOR_SURNAME", id, surname} as const;
};
export type EditAuthorSurNameAT = ReturnType<typeof editAuthorSurnameAC>;

export const createAuthorAC = () => {
    return {type: "CREATE_AUTHOR"} as const;
};
export type CreateAuthorAT = ReturnType<typeof createAuthorAC>;

export const removeAuthorAC = (id: string) => {
    return {type: "REMOVE_AUTHOR", id} as const;
};
export type RemoveAuthorAT = ReturnType<typeof removeAuthorAC>;

export type ActionAuthTypes = CreateAuthorAT | RemoveAuthorAT | EditAuthorNameAT | EditAuthorSurNameAT

const initialState: Array<newAuthor> = [
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


export const authorsReducer = (state = initialState, action: ActionAuthTypes): Array<newAuthor> => {
    switch (action.type) {
        case 'EDIT_AUTHOR_NAME' :
            let author = state.find(a => a.id === action.id)
            if (author) {
                author.name = action.name
            }
            return [...state]
        case 'EDIT_AUTHOR_SURNAME' :
            let authorS = state.find(a => a.id === action.id)
            if (authorS) {
                authorS.surname = action.surname
            }
            return [...state]
        case 'CREATE_AUTHOR':
            let newAuthor = {
                id: v1(),
                name: "New Name",
                surname: "New Surname",
                link: 'unnamed',
                status: true

            }
            return [...state, newAuthor]
        case 'REMOVE_AUTHOR':
            return state.filter(a => a.id !== action.id)
        default:
            return [...state]
    }
}



