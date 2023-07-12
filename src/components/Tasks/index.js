import React, { useEffect, useState } from 'react';
import '../../style/components/_tasks.sass'
import { AiOutlineDelete } from 'react-icons/ai';

const Tasks = () => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [taskId, setTaskId] = useState(0);

    const addTask = (e) =>{
        e.preventDefault();
        if(!name || !description){
            return;
        }
        setTaskList([...taskList,{name, description, id: taskId}]);
        setTaskId(taskId + 1);
    }

    const removeTask = (id) =>{
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    return (
        <section className='tasks'>
            <div className='credits'>
                <a href="https://www.linkedin.com/in/opedrohamartins/">© Pedro Martins 2023</a>
            </div>
            <div className='register__container'>
                <form className='register__form'>
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    <textarea name="description"cols="30" rows="5" className='register__description' placeholder='Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button onClick={addTask}>Insert task</button>
                </form>
            </div>
            <div className='tasks__container'>
                {taskList.map((task, index) => (
                    <div key={index} className='tasks__item'>
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <AiOutlineDelete className='delete' onClick={() => removeTask(task.id)}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tasks;