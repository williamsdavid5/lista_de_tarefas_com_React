import React, { useState } from "react"

const TodoForm = ({ addTodo }) => {

    const [value, setvalue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        addTodo(value, category);
        setvalue("");
        setCategory("");
    }

    return (
        <div className="todoForm">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" onChange={(e) => setvalue(e.target.value)} value={value} />
                <select name="" id="" onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm