import { createContext } from "@lit/context";
import { ColorTheme } from "../../app/colorTheme";
import { StyleValues } from "../../app/styles";

export const currentColorTheme =
    createContext<ColorTheme>(Symbol("colortheme"));

export const currentStyleValues =
    createContext<StyleValues>(Symbol("stylevalues"));
