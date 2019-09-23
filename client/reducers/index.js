import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// Actions
const GET_EVENTS = "GET_EVENTS"

// Action Creators
const showEvents = events => ({
    type: SHOW_EVENTS,
    events
})

export const getEvents = () => {
    return async (dispatch, getState, { axios }) => {
        const { data } = await axios.get('/api/events')
        dispatch(showEvents(data))
    }
}

// Reducer
const dummyState = {
    events: [{time: "7am", title: "breakfast"}, {time: "12pm", title: "lunch"}, {time: "6pm", title: "dinner"}]
}
const initialState = {
    events: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_EVENTS:
            return {...state, events: action.events};
        default:
            return state;
    }
}

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware.withExtraArgument({ axios }),
        loggingMiddleware
    )
)