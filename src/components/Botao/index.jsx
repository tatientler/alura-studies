import React from "react";
import style from './Botao.module.scss'

function Botao({ texto, onClick }){
    return (
        <button onClick={onClick} className={style.botao}>{texto}</button>
    )
}

export default Botao