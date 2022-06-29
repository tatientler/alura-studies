import { Item } from "./Item/item.jsx";
import style from './Lista.module.scss'

function Lista({ tarefas, selecionaTarefa }) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item} //Essa é uma forma de abreviação para utilizar todos os "atributos". Ex: tarefa={item.tarefa} + tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista