import React from "react";
import { useTheme } from "../themes/ThemeContext";

const Button = () => {
    const { changeTheme } = useTheme();

    return (
        <button onClick={changeTheme}>
            Cambiar estado
        </button>
    );
};

export default Button;