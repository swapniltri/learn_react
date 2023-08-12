import React from 'react';
import Card from '../UI/Card';
import style from '../../styles/userList.module.css';

const UserList = (props) => {
    return <Card className={style.users}>
        <ul>
            {props.userList.map(each => {
                return <li key={each.id}>{each.username} {each.age}</li>
            })}
        </ul>
    </Card>
}

export default UserList;