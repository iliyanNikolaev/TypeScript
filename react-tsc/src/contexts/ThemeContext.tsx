import { createContext, useState } from "react";

interface IInitState {
    mode: string,
    toggle: () => void
}

const init_state: IInitState = {
    mode: 'Light',
    toggle: () => {}
}

export const ThemeContext = createContext(init_state);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState("Light");

    const toggle = () => {
        setMode(prev => prev == 'Light' ? 'Dark' : 'Light')
    }

    const ctx = {
        mode,
        toggle
    }

    return <ThemeContext.Provider value={ctx}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>
}
