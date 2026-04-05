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
            return {...state, tasks: [
                ...state.tasks,actions.payload
            ]};
        case "todoManager/deleteTask":
            return {...state, tasks: state.tasks.filter((task) => task.id !== actions.payload)}
        default:
            return state
    }

}

export default todoManagerReducer