import { provide } from "@lit/context";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import { currentColorTheme, currentStyleValues } from "./contexts/theme";
import { ColorTheme, defaultColorTheme } from "../app/colorTheme";
import { StyleValues } from "../app/styles";

export * from "./components/widgets/button"
export * from "./components/widgets/input"

@customElement("avesia-app")
export class AvesiaAppElement extends LitElement {
    @property()
    name?: string;

    @provide({ context: currentColorTheme })
    @property({ attribute: false })
    colorTheme: ColorTheme = defaultColorTheme;

    @provide({ context: currentStyleValues })
    @property({ attribute: false })
    styleValues: StyleValues = {
        fontFamily: "system-ui, sans-serif",
        borderWidth: "2px",
        shadowProps: "0px 1px 10px -3px"
    }

    _inputChanged(e: CustomEvent) {
        console.log(e.detail)
        this.name = e.detail.value;
    }


    static styles = css`
        :host {
            user-select: none;
        }

        main {
            width: 100%;
            height: 100vh;
        }
    `;

    render(){
        const styles = {
            background: this.colorTheme.styles["base"].background,
            color: this.colorTheme.styles["base"].text,
            fontFamily: this.styleValues.fontFamily,
        }

        return html`
            <main style=${styleMap(styles)}>
                <avs-input @inputValue=${this._inputChanged}></avs-input>
                <span>Hello world ${this.name}</span>
                <avs-button><span>${this.name}</span></avs-button>
                <avs-button variant="secondary"><span>${this.name}</span></avs-button>
                <avs-button variant="danger"><span>${this.name}</span></avs-button>
                <avs-button disabled=${true}><span>${this.name}</span></avs-button>
                <avs-button variant="secondary" disabled=${true}><span>${this.name}</span></avs-button>
                <avs-button variant="danger" disabled=${true}><span>${this.name}</span></avs-button>
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
