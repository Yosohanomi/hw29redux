import { createSlice } from "@reduxjs/toolkit";

export const todoManagerSlice = createSlice({
    name: "todoManager",
    initialState: {
        tasks: [{
            title: "Learn Redux",
            id: Date.now(),
            isCompleted: false
        }],
        reducers: {
            addTask: (state, action) => {
                state.tasks.push(action.payload)
            },
            deleteTask: (state, action) => {
                state.tasks = state.tasks.filter((task) => task.id !== action.payload)
            },
            completedTask: (state, action) => {
                const task = state.tasks.find((el)=> el.id === action.payload)
                if(task) {
                    task.isCompleted = true
                }
            }
        }
    }
})

export const {addTask, deleteTask, completedTask} = todoManagerSlice.actions
export default todoManagerSlice.reducer

// const initialState = {
//     tasks: [
//         {
//             title: "Learn Redux",
//             id: Date.now(),
//             isCompleted: false
//         }
//     ]
// }

// const todoManagerReducer = (state = initialState, actions) => {

//     switch (actions.type) {
//         case "todoManager/addTask":
//             return {...state, tasks: [
//                 ...state.tasks,actions.payload
//             ]};
//         case "todoManager/deleteTask":
//             return {...state, tasks: state.tasks.filter((task) => task.id !== actions.payload)}
//         case "todoManager/completedTask":
//             return {...state, tasks: state.tasks.map((task) => task.id === actions.payload ? {...task, isCompleted: true} : task)}
//         default:
//             return state
//     }

// }

// export default todoManagerReducer