import React from 'react';
import style from '../../styles/button.module.css';

const Button = (props) => {
    return <button className={style.button} type={props.type || "button"} onClick={props.onClick}>{props.content}</button>;
}

export default Button;