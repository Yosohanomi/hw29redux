export const addTask = ({title, id}) => (
    {
        type: "todoManager/addTask",
        payload: {title, id, isCompleted: false},
    }
)

export const deleteTask = (id) => (
    {
        type: "todoManager/deleteTask",
        payload: id,
    }
)

export const completedTask = (id) => (
    {
        type: "todoManager/completedTask",
        payload: id,
    }
)