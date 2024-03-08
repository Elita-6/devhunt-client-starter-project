import {create,  StoreApi, UseBoundStore} from 'zustand'


type State = {
    profileUrl:string
    firstName:string
    lastName:number
    username:string
}
type Action = {
    updateProfileUrl:(profileUrl: State['profileUrl'])=>void
    updateFirstname:(firstName: State['firstName'])=>void
    updateLastname:(firstName: State['lastName'])=>void
    updateUsername:(lastname: State['username'])=>void
}

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}
export const useApartmentDetails = createSelectors(create<State & Action>((set) => ({
    profileUrl:'',
    lastName:0,
    firstName:'',
    username:'',
    updateProfileUrl:(profileUrl)=> set(()=>({profileUrl: profileUrl})),
    updateLastname:(lastName)=> set(()=>({lastName: lastName})),
    updateFirstname:(firstName)=> set(()=>({firstName: firstName})),
    updateUsername:(username)=> set(()=>({username: username})),
})))