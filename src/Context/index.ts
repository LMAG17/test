import { createContext } from "react";
import { Animated } from "react-native";

export type ContextContent = {
    title?: string;
    setTitle?: (value: string) => void;
}

export type ContextContentAnimated = {
    contentPositionAnimation: Animated.Value;
    toggleDrawer: () => void;
}

export const Context = createContext({
    title: "Context Title",
    setTitle: (value: string) => { },
    contentPositionAnimation: new Animated.Value(0),
    toggleDrawer: () => { }
});