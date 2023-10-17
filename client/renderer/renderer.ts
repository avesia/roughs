import { CSSResultGroup, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = css`
        main {
            width: 100%;
            height: 100vh;

            background-color: #1f1f1f;
            color: #f1f1f1;
        }
    `;

    render(){
        return html`
            <main>
                <span>Hello world</span>
            </main>
        `;
    }
}
