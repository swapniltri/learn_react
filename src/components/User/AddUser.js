import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import style from '../../styles/addUser.module.css';

const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [isError, setIsError] = useState(false);

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setIsError(true);
            setErrorTitle('Something Missing');
            setErrorContent('Input fields should not be empty');
            return;
        }
        if (+age < 1) {
            setIsError(true);
            setErrorTitle('Invalid Age');
            setErrorContent('Age cannot be less than 1');
            return;
        }
        setIsError(false);
        const userDetails = {
            id: Math.random().toString(),
            username: username,
            age: age
        };
        props.addUserDetails(userDetails);
        setUsername('');
        setAge('');
    }

    const onClickErrorModalOkayButton = () => {
        setIsError(false);
    }

    return <div>
        {isError && <ErrorModal title={errorTitle} message={errorContent} onClick={onClickErrorModalOkayButton} />}
        <Card className={style.input}>
            <form onSubmit={submitHandler} >
                <label htmlFor="username">Username</label>
                <input value={username} onChange={usernameHandler} id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input value={age} onChange={ageHandler} id="age" type="number" />
                <Button type="submit" content="Add User" />
            </form>
        </Card>
    </div>;
}

export default AddUser;