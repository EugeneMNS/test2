import {FilterValuesType, TodolistType} from "../App"
import {v1} from 'uuid'

export type RemoveTodolistActionType={
    type: 'REMOVE-TODOLIST'
    id:string
}

export type AddTodoListActionType={
    type:'ADD-TODOLIST'
    id: string
    title: string
}

export type ChangeTodoListActionType={
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export type ChangeTodolistFilter={
    id: string
    title: string
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType
    | AddTodoListActionType
    | ChangeTodoListActionType
    | ChangeTodolistFilter

export  const todolistsReducer = (state: Array<TodolistType>,
                                  action: ActionsType): Array<TodolistType> =>{
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl=> tl.id !=action.id)
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: "all"}]
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER':{
            const todolist=state.find(tl=> tl.id === action.id);
            if (todolist) {
                todolist.filter = action.filter;
        }
            return [...state]
        }
    }}