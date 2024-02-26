import React from 'react';
import Toolbar from "./Toolbar";
import { ThemeContext, themes } from "./ThemeContext";
class MyApp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
                <ThemeContext.Provider value={themes.light}>
                     <Toolbar />
                </ThemeContext.Provider>
            </ThemeContext.Provider>
            
        );
    }
}

export default MyApp;