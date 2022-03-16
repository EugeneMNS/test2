import {TasksStateType} from "../App"


export type RemoveTaskActionCreater={
    type: 'REMOVE-TASK'
    todolistsId: string
    taskId: string
}

export type SomeActionCreatorActionType2={
    type: ' '
    id:string
}

type ActionsType = RemoveTaskActionCreater | SomeActionCreatorActionType2

export  const tasksReducer = (state: TasksStateType,
                              action: ActionsType): TasksStateType =>{
    switch (action.type) {
        case 'REMOVE-TASK':{
            
        return state
        }
        default: throw  new Error("I dont understand this action type")
    }
    }

    export const SomeAC1=(id:string): SomeActionCreatorActionType1=>{
    return {type: ' ', id:id}
    }

export const SomeAC2=(id:string): SomeActionCreatorActionType2=>{
    return {type: ' ', id:id}
}