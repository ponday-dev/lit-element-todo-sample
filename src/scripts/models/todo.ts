export interface Todo {
    id: Symbol;
    value: string;
    isCompleted: boolean;
}

export function createTodo(value: string): Todo {
    return {
        id: Symbol(),
        value,
        isCompleted: false
    };
}
