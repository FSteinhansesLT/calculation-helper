import React from "react";
import {Header} from "../components/static/header/header";
import {Card} from "../components/card/card";
import style from '../styles/modules/home.module.scss';

export default function Home() {
    return (
        <div>
            <Header/>
            <div className={style.container}>
                <div className={'wrapper'}>
                    <Card sum={100000} currency={'€'} project={'Orfeus'}/>
                </div>
            </div>
        </div>
    )
}
