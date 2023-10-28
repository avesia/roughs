import { consume } from "@lit/context";
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import { currentColorTheme, currentStyleValues } from "../../contexts/theme";
import { ColorTheme, StyleValues } from "../../../app/app";

@customElement("avs-button")
export class Button extends LitElement {
    @consume({
        context: currentColorTheme,
        subscribe: true,
    })
    @property({ attribute: false })
    colorTheme: ColorTheme = {styles: {}, labels: {}, controls: {}, input: {}};

    @consume({
        context: currentStyleValues,
        subscribe: true,
    })
    @property({ attribute: false })
    styleValues: StyleValues = {};

    @property()
    variant = "primary";

    @property()
    disabled = false;

    @state()
    private hovered = false;

    private onMouseEnter() {
        this.hovered = true;
    }

    private onMouseLeave() {
        this.hovered = false;
    }

    static styles = css`
        button {
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 0.8rem;
        }
    `;

    render() {
        const styles = this.disabled ? {
            background: this.colorTheme.controls[this.variant].backgroundDisabled,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.controls[this.variant].borderDisabled}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.controls[this.variant].text,
        } : this.hovered ? {
            background: this.colorTheme.controls[this.variant].backgroundHovered,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.controls[this.variant].borderHovered}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.controls[this.variant].text,
        } : {
            background: this.colorTheme.controls[this.variant].background,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.controls[this.variant].border}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.controls[this.variant].text,
        }
        return html`
            <button style=${styleMap(styles)} ?disabled=${this.disabled}>
                <slot>
            </button>
        `;
    }

    constructor() {
        super();

        this.addEventListener("mouseenter", this.onMouseEnter)
        this.addEventListener("mouseleave", this.onMouseLeave)
    }
}
