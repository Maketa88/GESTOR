import React from 'react';
import { useForm } from '../hooks/useForm';
/*React se importa para permitir el uso de la sintaxis JSX y para definir el componente funcional.
useForm es un hook personalizado que se importa desde ../hooks/useForm. Este hook se utiliza para manejar
el estado del formulario y las funciones asociadas para actualizarlo y reiniciarlo.*/

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});
/*TodoAdd es un componente funcional que recibe una función handleNewTodo como prop. Esta función se utiliza para manejar
la adición de una nueva tarea.
useForm es un hook personalizado que maneja el estado del formulario. En este caso, el estado inicial es un objeto
con una propiedad description que empieza con una cadena vacía ('').
useForm devuelve un objeto con:
description: El valor actual del campo de entrada de la descripción.
onInputChange: Una función para actualizar el valor de description cuando el usuario escribe en el campo de entrada.
onResetForm: Una función para restablecer el formulario a su estado inicial.*/

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};
/*Función onFormSubmit:
Esta función se llama cuando el formulario se envía. La función previene el comportamiento predeterminado
del formulario (e.preventDefault()), que es recargar la página.
Se verifica si la longitud de description es mayor a 1. Si no lo es, se detiene la ejecución de la función (no se agrega la tarea).
Se crea un nuevo objeto newTodo que representa la nueva tarea, con las siguientes propiedades:
id: Se genera un identificador único basado en la fecha y hora actual (new Date().getTime()).
description: Contiene el texto de la tarea que el usuario ingresó.
done: Se establece en false para indicar que la tarea no está completada.
La función handleNewTodo es llamada con el objeto newTodo como argumento, lo que permite agregar la nueva tarea a la lista de tareas.
Finalmente, se llama a onResetForm para limpiar el campo de entrada y restablecer el estado del formulario.*/

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='add new task'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};
/*Estructura del JSX:
Se devuelve un formulario (<form>) que ejecuta la función onFormSubmit cuando se envía.
El formulario contiene un campo de entrada (<input>):
type='text': El tipo de entrada es texto.
className='input-add': Se utiliza una clase CSS llamada input-add para el estilo del campo de entrada.
name='description': El nombre del campo de entrada es description, que coincide con la propiedad del estado manejada por useForm.
value={description}: El valor del campo de entrada se enlaza con el estado description, 
lo que garantiza que el campo refleje los cambios en el estado.
onChange={onInputChange}: La función onInputChange se llama cada vez que el usuario escribe en el campo, 
actualizando el estado con el valor actual.
placeholder='add new task': El texto que se muestra en el campo cuando está vacío.
También incluye un botón (<button>) para enviar el formulario:
className='btn-add': Clase CSS para el estilo del botón.
type='submit': El tipo del botón es submit, lo que hace que el formulario se envíe cuando se hace clic en el botón.
El texto "Agregar" aparece dentro del botón.*/


/*El componente TodoAdd permite agregar nuevas tareas a una lista de tareas. Utiliza un formulario controlado
con el hook personalizado useForm para manejar el estado del campo de entrada. Al enviar el formulario,
se verifica la validez de la entrada, se crea un nuevo objeto de tarea y se llama a la función handleNewTodo
 para agregar la tarea. Luego, se reinicia el formulario para que el usuario pueda agregar otra tarea.*/
