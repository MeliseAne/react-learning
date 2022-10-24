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
        <div className={s.message}>{props.text}</div>
    );
}

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Semyon' id = '1'/>
                    <DialogItem name='Vitaly' id = '2'/>
                    <DialogItem name='Nikita' id = '3'/>
                    <DialogItem name='Kate' id = '4'/>
                    <DialogItem name='Regina' id = '5'/>
                 </div>
                <div className={s.messages}>
                    <Messages text='Hello. How are you?'/>
                    <Messages text='What are you doing?'/>
                    <Messages text="Cool! I'm happy!"/>
            </div>
        </div>
    );
}

export default Dialogs;