import React from 'react'

export default function Tarrif(props) {
    return (
        <div className="tarrifs__block">
            <p><b>{props.title}</b></p>
            <p><b>{props.price}</b>р /Месяц</p>
            <p>Безлимит на Tele2 Росии</p>
            <p><b>{props.minutes}</b> мин. {props.text}</p>
            <p><b>{props.gb}</b> ГБ интернета</p>
        </div>
    )
}
