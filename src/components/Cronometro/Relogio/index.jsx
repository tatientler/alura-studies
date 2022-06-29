import style from './Relogio.module.scss'

export function Relogio({ tempo = 0 }) {
    const minutos = Math.floor(tempo / 60) //Math.floor nos permite pegar somente os números inteiros
    const segundos = tempo % 60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    // .padStart nos deixa definir um valor padrão
    
    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}