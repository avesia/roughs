import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('a-button')
export class Button extends LitElement {
    static styles = css`
        main {
            width: 100%;
            height: 100vh;

            background-color: #f1f1f1;
            color: #f1f1f1;
        }
    `;

    render(){
        return html`
            <button>
                <slot>
            </button>
        `;
    }
}
