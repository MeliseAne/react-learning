import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const  DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

const Messages = (props) => {

    return (
        <div className={s.message}>{props.messages}</div>
    );
}

let dialogsData = [
    {name: 'Semyon', id: 1},
    {name: 'Vital', id: 2},
    {name: 'Nikita', id: 3},
    {name: 'Kate', id: 4},
    {name: 'Regina', id: 5}
]

let messagesData = [
    {message: 'Hello. How are you?', id: 1},
    {message: 'What are you doing?', id: 2},
    {message: 'Cool! I\'m happy!', id: 3}
]

let dialogs = dialogsData.map (d => <DialogItem name={d.name} id = {d.id}/>) ;

let messagesElement = messagesData.map (m =>  <Messages messages={m.message}/>);


const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs}
                 </div>

                <div className={s.messages}>
                    {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;