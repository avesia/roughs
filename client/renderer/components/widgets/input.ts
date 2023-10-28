import { consume } from "@lit/context";
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

import { currentColorTheme, currentStyleValues } from "../../contexts/theme";
import { ColorTheme, StyleValues } from "../../../app/app";

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
    colorTheme: ColorTheme = {styles: {}, labels: {}, controls: {}, input: {}};

    @consume({
        context: currentStyleValues,
        subscribe: true,
    })
    @property({ attribute: false })
    styleValues: StyleValues = {};

    @property()
    disabled = false;

    @property()
    placeholder = "";

    @state()
    private focused = false;

    @state()
    private classes = {
        avsinput: true,
        hideplaceholder: false
    };

    private _onFocusIn() {
        this.focused = true;
    }

    private _onFocusOut() {
        this.focused = false;
    }

    private _dispatchInputEvent(e: Event) {
        //Placeholder
        this.classes.hideplaceholder = !((e.target as HTMLInputElement).value === "");
        this.requestUpdate();

        console.log(this.classes.hideplaceholder);

        this.dispatchEvent(new CustomEvent("inputValue", {detail: { value: (e.target as HTMLInputElement).value }, bubbles: true, cancelable: true, composed: true}));
    }

    static styles = css`
        .avsinput {
            position: relative;
            display: inline-block;
            padding: 6px 12px;
            font-size: 0.8rem;

            cursor: text;
        }

        .avsinput input {
            display: block;

            width: 100%;

            background: transparent;
            color: inherit;
            border: none;
            outline: none;
            font-family: inherit;
            font-size: inherit;
        }

        .avsinput .placeholder {
            position: absolute;
            top: 50%;
            left: 15px;

            max-width: calc(100% - (15px * 2));

            color: inherit;
            border: none;
            outline: none;
            font-family: inherit;
            font-size: inherit;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            transform: translateY(-50%);
        }

        .avsinput.hideplaceholder .placeholder {
            display: none;
        }
    `;

    render() {
        console.log("rernder")
        const styles = this.disabled ? {
            background: this.colorTheme.input.backgroundDisabled,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.input.borderDisabled}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.input.textDisabled,
        } : this.focused ? {
            background: this.colorTheme.input.backgroundActive,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.input.borderActive}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.input.textActive,
        } : {
            background: this.colorTheme.input.background,
            border: `solid ${this.styleValues.borderWidth} ${this.colorTheme.input.border}`,
            fontFamily: this.styleValues.fontFamily,
            color: this.colorTheme.input.text,
        }

        const placeholderStyles = this.disabled ? {
            color: this.colorTheme.input.placeholderDisabled,
        } : this.focused ? {
            color: this.colorTheme.input.placeholderActive,
        } : {
            color: this.colorTheme.input.placeholder,
        }

        return html`
            <label class=${classMap(this.classes)} style=${styleMap(styles)}>
                <input ?disabled=${this.disabled} @input=${this._dispatchInputEvent} @focusin=${this._onFocusIn} @focusout=${this._onFocusOut} />
                <span class="placeholder" style=${styleMap(placeholderStyles)}>${this.placeholder}</span>
            </label>
        `;
    }

    constructor() {
        super();
    }
}
