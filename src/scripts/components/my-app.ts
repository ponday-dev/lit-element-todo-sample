import { LitElement, html, property } from '@polymer/lit-element';
import { Todo, createTodo } from '../models/todo';

export class MyApp extends LitElement {

    @property()
    todo: Todo[] = [];

    render() {
        return html`
        <style>
        .container {
            width: 80vw;
        }
        </style>
        <div class="container">
            <todo-input @add="${this.handleAdd.bind(this)}"></todo-input>
            <todo-list
                .todoList=${this.todo}
                @toggleItem="${this.handleToggleItem.bind(this)}"
                @delete="${this.handleDelete.bind(this)}"
            ></todo-list>
        </div>
        `;
    }

    handleAdd(event: CustomEventInit<{ value: string }>) {
        this.todo = this.todo.concat(createTodo(event.detail.value));
    }
    handleToggleItem(event: CustomEventInit<{ target: Todo, value: boolean }>) {
        const targetId = event.detail.target.id;
        this.todo = this.todo.map(todo => {
            if (todo.id === targetId) {
                return Object.assign({}, todo, { isCompleted: event.detail.value });
            } else {
                return todo;
            }
        });
    }
    handleDelete(event: CustomEvent<{ target: Todo }>) {
        const targetId = event.detail.target.id;
        this.todo = this.todo.filter(todo => todo.id !== targetId);
    }
}
