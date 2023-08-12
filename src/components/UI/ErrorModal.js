import React from 'react';
import Card from './Card';
import Button from './Button';
import style from '../../styles/errorModal.module.css';

const ErrorModal = (props) => {

    const clickHandler = () => {
        props.onClick();
    }

    return <div>
        <div className={style.backdrop} onClick={clickHandler} />
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.message}</p>
            </div>
            <footer className={style.actions}>
                <Button content="Okay" onClick={clickHandler} />
            </footer>
        </Card>
    </div>;
}

export default ErrorModal;