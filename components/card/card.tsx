import style from './card.module.scss';
import variables from 'styles/modules/variables.module.scss'

interface Input {
    sum: number;
    currency: string
    project: string
}

export function Card(props: Input) {
    return <div className={style.card}>
        <div className={style.cardHeader}>
            <h2 color={variables.primaryColor}>{props.sum} <i>{props.currency}</i> </h2>
            <span>{props.project}</span>
        </div>
        <div className={style.cardContent}>
        </div>
    </div>
}
