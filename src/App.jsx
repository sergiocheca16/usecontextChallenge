import React from "react";
import { useTheme } from "./themes/ThemeContext";
import RoutesApp from "./routes/RoutesApp";
import "./App.css"; // Archivo de estilos CSS

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <RoutesApp />
    </div>
  );
};

export default App;