export interface Todo {
    id: number;
    value: string;
    isCompleted: boolean;
}

const idGenerator = (function*() {
    for(let i = 1; true; i++) {
        yield i;
    }
})();

export function createTodo(value: string): Todo {
    return {
        id: idGenerator.next().value,
        value,
        isCompleted: false
    };
}
