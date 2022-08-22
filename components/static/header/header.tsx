import style from './header.module.scss'

export function Header() {
    return <div className={style.header}>
        <h1>Calculation Helper <span className={style.icon}>📚</span></h1>
    </div>
}
