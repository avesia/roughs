export interface ColorTheme {
    styles: GeneralStyleVariants,
    labels: LabelVariants,
    controls: ControlVariants,
    input: InputColorTheme,
}

interface GeneralStyleVariants {
    [key: string]: GeneralStyleColorTheme,
}

interface GeneralStyleColorTheme {
    background?: string,
    backgroundInactive?: string,
    backgroundShadow?: string,
    backgroundShadowInactive?: string,
    border?: string,
    borderInactive?: string,
    text?: string,
    textInactive?: string,
    textTitle?: string,
    textTitleInactive?: string,
    textSubtle?: string,
    textSubtleInactive?: string,
}

interface ControlVariants {
    [key: string]: ControlColorTheme,
}

interface ControlColorTheme {
    background?: string,
    backgroundHovered?: string,
    backgroundDisabled?: string,
    border?: string,
    borderHovered?: string,
    borderDisabled?: string,
    text?: string,
    textHovered?: string,
    textDisabled?: string,
}

interface LabelVariants {
    [key: string]: LabelColorTheme,
}

interface LabelColorTheme {
    background?: string,
    backgroundShadow?: string,
    border?: string,
    text?: string,
}

interface InputColorTheme {
    background?: string,
    backgroundActive?: string,
    backgroundDisabled?: string,
    border?: string,
    borderActive?: string,
    borderDisabled?: string,
    text?: string,
    textActive?: string,
    textDisabled?: string,
    placeholder?: string,
    placeholderActive?: string,
    placeholderDisabled?: string,
}

export const defaultColorTheme: ColorTheme = {
    styles: {
        "base": {
            background: "#ebf7ee",
            backgroundInactive: "#c4cfc7",
            backgroundShadow: "#898c8a",
            backgroundShadowInactive: "#898c8a",
            border: "#7ea888",
            borderInactive: "#94A394",
            text: "#0A544B",
            textInactive: "#718A78",
            textTitle: "#001412",
            textTitleInactive: "#677E7B",
            textSubtle: "#53817B",
            textSubtleInactive: "#78968F",
        },
        "primary": {
            background: "#EBF7F7",
            backgroundInactive: "#CCD7DF",
            backgroundShadow: "#7EAAD3",
            backgroundShadowInactive: "#7EAAD3",
            border: "#2E80E1",
            borderInactive: "#809BB5",
            text: "#152F71",
            textInactive: "#7B8BB6",
            textTitle: "#0D3B5C",
            textTitleInactive: "#5A819C",
            textSubtle: "#5A74B5",
            textSubtleInactive: "#899DCE",
        },
        "secondary": {
            background: "#F7F7F7",
            backgroundInactive: "#DBDBDB",
            backgroundShadow: "#ACACAC",
            backgroundShadowInactive: "#ACACAC",
            border: "#B0B0B0",
            borderInactive: "#A8A8A8",
            text: "#323744",
            textInactive: "#8E94A3",
            textTitle: "#363E44",
            textTitleInactive: "#7B8790",
            textSubtle: "#5D6271",
            textSubtleInactive: "#979EAE",
        }
    },

    labels: {
        "success": {
            background: "#C0DFCE",
            backgroundShadow: "#056833",
            border: "#518049",
            text: "#033411",
        },
        "warning": {
            background: "#E4E1AE",
            backgroundShadow: "#748F0B",
            border: "#A49F23",
            text: "#342403",
        },
        "danger": {
            background: "#E4BEAE",
            backgroundShadow: "#8F1B0B",
            border: "#A43A23",
            text: "#341803",
        },
        "info": {
            background: "#AECDE4",
            backgroundShadow: "#0B478F",
            border: "#2376A4",
            text: "#031134",
        }
    },

    controls: {
        "primary": {
            background: "#3A443C",
            backgroundHovered: "#252D27",
            backgroundDisabled: "#8F9A92",
            border: "#7D9783",
            borderHovered: "#7D9783",
            borderDisabled: "#4B6450",
            text: "#EEEEEE",
            textHovered: "#EEEEEE",
            textDisabled: "#C2C2C2",
        },
        "secondary": {
            background: "#49708C",
            backgroundHovered: "#374F60",
            backgroundDisabled: "#7895AA",
            border: "#869CD4",
            borderHovered: "#869CD4",
            borderDisabled: "#596C9D",
            text: "#EEEEEE",
            textHovered: "#EEEEEE",
            textDisabled: "#C2C2C2",
        },
        "danger": {
            background: "#A52C24",
            backgroundHovered: "#811F19",
            backgroundDisabled: "#AB8482",
            border: "#830000",
            borderHovered: "#830000",
            borderDisabled: "#A45959",
            text: "#EEEEEE",
            textHovered: "#EEEEEE",
            textDisabled: "#C2C2C2",
        }
    },

    input: {
        background: "#C0D5C5",
        backgroundActive: "#C0D5C5",
        backgroundDisabled: "#ACACAC",
        border: "#7E8E81",
        borderActive: "#009B1F",
        borderDisabled: "#7E8E81",
        text: "#0A544B",
        textActive: "#0A544B",
        textDisabled: "#D5D5D5",
        placeholder: "#A0A0A0",
        placeholderActive: "#A0A0A0",
        placeholderDisabled: "#D5D5D5"
    }
};
