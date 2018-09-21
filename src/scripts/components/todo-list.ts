import { LitElement, html, property } from '@polymer/lit-element';
import { Todo } from '@/models/todo';

export class TodoList extends LitElement {

    @property()
    todoList: Todo[] = [];

    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    render() {
        return html`
        <ul>
        ${this.todoList.map((todo, index) => html`
            <li class="${ todo.isCompleted ? 'completed' : '' }">
                <input type="checkbox" ?checked="${todo.isCompleted}" @change="${(e) => this.handleToggle(todo, !todo.isCompleted)}">
                ${todo.value}
                <button type="button" @click="${e => this.handleClickDelete(todo) }">delete</button>
            </li>
        `)}
        </ul>
        `;
    }

    handleToggle(todo: Todo, value: boolean) {
        const event = new CustomEvent('toggleItem', { detail: { target: todo, value }});
        this.dispatchEvent(event);
    }
    handleClickDelete(todo: Todo) {
        const event = new CustomEvent('delete', { detail: { target: todo }});
        this.dispatchEvent(event);
    }
}