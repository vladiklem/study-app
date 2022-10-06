import { useState } from "react";
import { reducer } from "./reducer";

export const useStore = (initialState) => {
    const [state, setState] = useState(initialState);

    const dispatcher = (action) => {
        const newState = reducer(state, action);

        setState(newState);
    }

    return [state, dispatcher]
}