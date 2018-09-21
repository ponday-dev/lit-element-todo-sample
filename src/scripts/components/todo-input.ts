import { LitElement, html, property } from '@polymer/lit-element';

export class TodoInput extends LitElement {
    @property()
    value = '';

    render() {
        return html`
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