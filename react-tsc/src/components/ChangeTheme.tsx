import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export const ChangeTheme = () => {
    const { toggle } = useContext(ThemeContext);
    
    return (
        <section className="view-section">
            <div className="theme-btns">
                <button onClick={toggle}>Change THEME</button>
            </div>
        </section>
    )
}
