export const addTask = ({title, id}) => (
    {
        type: "todoManager/addTask",
        payload: {title, id, isCompleted: false},
    }
)