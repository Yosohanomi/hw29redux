const initialState = {
    tasks: [
        {
            title: "Learn Redux",
            id: Date.now(),
            isCompleted: false
        }
    ]
}

const todoManagerReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case "todoManager/addTask":
            return {...state, task: [
                ...state.tasks,actions.payload
            ]};
        default:
            return state
    }

}

export default todoManagerReducer