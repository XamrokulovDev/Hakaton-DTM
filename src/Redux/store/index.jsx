import { configureStore } from "@reduxjs/toolkit"
// import signSlice 
import signReducer from "../signSlice"
// import loginSlice 
import loginReducer from "../loginSlice"
// import fetchReducer 
import fetchReducer from "../fetchApi"

export const store = configureStore({
    reducer: {
        sign: signReducer,
        login: loginReducer,
        api: fetchReducer,
    },
})