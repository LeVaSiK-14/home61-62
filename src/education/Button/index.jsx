import React from 'react';
import {button} from './Button.module.scss';
import './App.scss';

class Button extends React.Component{
    render() {
        return(
            <button className={button}>Click</button>
        );
    };
};

export default Button;