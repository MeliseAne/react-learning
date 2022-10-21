import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>Semyon</div>
                    <div className={s.dialog}>Vitaly</div>
                    <div className={s.dialog}>Nikita</div>
                    <div className={s.dialog}>Kate</div>
                 </div>
                <div className={s.messages}>
                <div className={s.message}>Hoy</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Priv</div>
            </div>
        </div>
    );
}

export default Dialogs;