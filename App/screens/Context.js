import React from 'react'
export const DailyBodyCareContext = React.createContext(null)

const initialState = {
    Skin: [],
    OralCavity: [],
    Eyes: [],
    Ears:[],
    Lips:[],
    Feet:[]

}
export  function Context(props) {
    const [state, setState] = React.useState(initialState)
    return (
        <DailyBodyCareContext.Provider value={{state,setState}}>
            {props.children}
        </DailyBodyCareContext.Provider>
    )
}
