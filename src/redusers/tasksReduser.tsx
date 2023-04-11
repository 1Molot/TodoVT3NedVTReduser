import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer = (state: TaskType[], action: TsarType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state.filter(el => el.id !== action.payload.taskID)
        }
        case "ADD-TASKS":{
            let newTask = { id: v1(), title: action.payload.title, isDone: false }
            return [newTask,...state]
        }
        default:
            return state
    }
}

type TsarType = RemoveTaskACType | addTaskACType
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskID: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            taskID: taskID     //можно просто taskID(key),если совпадают
        }
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASKS',
        payload: {
            title
        }
    } as const
}