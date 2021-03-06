import { LitElement, html, property } from '@polymer/lit-element';

export class TodoInput extends LitElement {
    @property()
    value = '';

    render() {
        return html`
        <style>
        form {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        input[type="text"] {
            flex: 1 1 auto;
            padding: 0.5rem;
            margin-right: 1rem;
        }
        button {
            padding: 0.5rem 1.5rem;
            color: white;
            border: 1px solid #1e88e5;
            background-color: #1e88e5;
        }
        button:hover {
            background-color: #42a5f5;
        }
        </style>
        <form @submit="${this.handleSubmit.bind(this)}">
            <input type="text" .value="${this.value}" @keyup="${this.handleKeyup.bind(this)}" />
            <button>add</button>
        </form>
        `;
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        const event = new CustomEvent<{ value: string }>('add', { detail: { value: this.value }});
        this.dispatchEvent(event);
        this.value = '';
    }

    handleKeyup({ target }: KeyboardEvent) {
        this.value = (target as HTMLInputElement).value;
    }
}