import React from 'react'
import Tele2 from './components/tele2/Tele2'

export default function App() {
    const tarrifs = [
        {id: 1, title: "Мой онлайн+", price: 700, minutes: 800, text: "на остальные номера Росии", gb: 30 },
        {id: 2, title: "Везде онлайн", price: 500, minutes: 500, text: "на остальные номера Росии", gb: 40 },
        {id: 3, title: "Мой онлайн", price: 400, minutes: 500, text: "на другие мобильные номера домашнего региона", gb: 15 }
    ]
    return (
        <div>
            <Tele2 id={tarrifs[0].id} title={tarrifs[0].title} price={tarrifs[0].price} minutes={tarrifs[0].minutes} text={tarrifs[0].text} gb={tarrifs[0].gb}/>
            <Tele2 id={tarrifs[1].id} title={tarrifs[1].title} price={tarrifs[1].price} minutes={tarrifs[1].minutes} text={tarrifs[1].text} gb={tarrifs[1].gb}/>
            <Tele2 id={tarrifs[2].id} title={tarrifs[2].title} price={tarrifs[2].price} minutes={tarrifs[2].minutes} text={tarrifs[2].text} gb={tarrifs[2].gb}/>
        </div>
    )
}
