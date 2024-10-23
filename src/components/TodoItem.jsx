import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';
/*React se importa para poder usar JSX y definir el componente funcional.
FaTrash se importa desde react-icons/fa, un paquete que proporciona iconos de Font Awesome. Aquí se usa para mostrar un ícono de basurero.
TodoUpdate es un componente personalizado que se importa para actualizar la tarea.*/


export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
/*Declaración del Componente:
TodoItem es un componente funcional que recibe cuatro props:
todo: Un objeto que representa la tarea, con propiedades como id, description y done.
handleUpdateTodo: Una función para actualizar la tarea.
handleDeleteTodo: Una función para eliminar la tarea.
handleCompleteTodo: Una función para marcar la tarea como completada o pendiente.*/
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};

/*Marcado de la tarea:
El componente contiene un <span> que envuelve un <label> y permite marcar la tarea como completada al hacer clic.
El evento onClick llama a la función handleCompleteTodo con el id de la tarea para cambiar su estado (completada o pendiente).
La clase container-done se combina con active si la tarea está marcada como completada (todo.done es true).
 Esto facilita aplicar estilos condicionales mediante CSS.*/

 /*Componente TodoUpdate:
Se utiliza el componente TodoUpdate para proporcionar la funcionalidad de actualización de la tarea.
Este componente recibe el objeto todo y la función handleUpdateTodo como props, lo que le permite editar la descripción de la tarea.*/

/*Botón para eliminar la tarea:
El botón tiene la clase btn-delete para estilizarlo mediante CSS.
Al hacer clic, se llama a la función handleDeleteTodo con el id de la tarea para eliminarla.
Se utiliza el componente FaTrash para mostrar un ícono de basurero, lo que indica la acción de eliminar.*/