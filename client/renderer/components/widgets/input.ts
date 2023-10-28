import { consume } from "@lit/context";
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import { currentColorTheme, currentStyleValues } from "../../contexts/theme";
import { ColorTheme } from "../../../app/colorTheme";
import { StyleValues } from "../../../app/styles";

/**
 * 
 * Tag name: `avs-input`  
 * To get a value when it changed, listen `inputValue` event and get value from `e.detail.value`
 * 
 *  */
@customElement("avs-input")
export class Input extends LitElement {
    @consume({
        context: currentColorTheme,
        subscribe: true,
    })
    @property({ attribute: false })
    colorTheme: ColorTheme = {styles: {}, labels: {}, controls: {}};

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

    private _dispatchInputEvent(e: Event) {
        this.dispatchEvent(new CustomEvent("inputValue", {detail: { value: (e.target as HTMLInputElement).value }, bubbles: true, cancelable: true, composed: true}));
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
            <input @input=${this._dispatchInputEvent} style=${styleMap(styles)} ?disabled=${this.disabled} />
        `;
    }

    constructor() {
        super();

        this.addEventListener("mouseenter", this.onMouseEnter)
        this.addEventListener("mouseleave", this.onMouseLeave)
    }
}
