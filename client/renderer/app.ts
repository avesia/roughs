import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export * from "./components/widgets/button"

@customElement('avesia-app')
export class MyElement extends LitElement {
    static styles = css`
        :host {
            user-select: none;
        }

        main {
            width: 100%;
            height: 100vh;

            background-color: #f1f1f1;
            color: #1f1f1f;
        }
    `;

    @state()
    name: string;

    constructor() {
        super();
        this.name = "a"
    }

    _inputChanged(e: Event) {
        this.name = (e.target as HTMLInputElement).value;
    }   

    render(){
        return html`
            <main>
                <input @input=${this._inputChanged} .value=${this.name}>
                <span>Hello world ${this.name}</span>
                <a-button>${this.name}</a-button>
            </main>
        `;
    }
}

export class AvesiaShell {
    constructor(id: string) {
        const container = document.getElementById(id);

        if (container) {
            const app_element = document.createElement("avesia-app");

            container.appendChild(app_element);
        } else {
            console.error(`couldn't find the element with id "${id}"`);
        }
    }
}