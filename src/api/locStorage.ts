


export function setLocalStorage<T>(key: string, state: T) {
    localStorage.setItem(key, JSON.stringify(state))
}

const func = (key: string): string|undefined => {

    const getLocalItemState = localStorage.getItem(key)
    if (getLocalItemState === null) {
        return undefined
    }
    return JSON.parse(getLocalItemState)
}
export async function getLocalStorage(key: string) {
    return new Promise((resolve, reject) => {
        func(key)
    }).then(res => res).catch(() => undefined)
}