import {create,  StoreApi, UseBoundStore} from 'zustand'


type State = {
    design:string
    numApp:string
    rent:number
}
type Action = {
    updateDesign:(workspaceTitle: State['design'])=>void
    updateNumApp:(taskDetails: State['numApp'])=>void
    updateRent:(taskDetails: State['rent'])=>void
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
    design:'',
    rent:0,
    numApp:'',
    updateDesign:(design)=> set(()=>({design: design})),
    updateRent:(rent)=> set(()=>({rent: rent})),
    updateNumApp:(numApp)=> set(()=>({numApp: numApp}))
})))