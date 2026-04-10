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
        case "todoManager/completedTask":
            return {...state, tasks: state.tasks.map((task) => task.id === actions.payload ? {...task, isCompleted: true} : task)}
        default:
            return state
    }

}

export default todoManagerReducer