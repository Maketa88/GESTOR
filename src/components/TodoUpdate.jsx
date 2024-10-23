import { useRef, useState } from 'react'; // Importa hooks de React para manejar referencias y estado
import { FaEdit } from 'react-icons/fa'; // Importa el ícono de edición desde react-icons
import { useForm } from '../hooks/useForm'; // Importa un hook personalizado para el manejo de formularios

/**
 * Componente TodoUpdate
 *
 * Permite a los usuarios actualizar la descripción de una tarea existente.
 * Proporciona un formulario con un campo de texto que se puede habilitar o deshabilitar,
 * y un botón para enviar la actualización.
 */
export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description, // Inicializa el estado del formulario con la descripción de la tarea
	});

	const [disabled, setDisabled] = useState(true); // Estado para habilitar o deshabilitar el campo de entrada
	const focusInputRef = useRef(); // Crea una referencia para el campo de entrada

	// Maneja el envío del formulario
	const onSubmitUpdate = e => {
		e.preventDefault(); // Previene la recarga de la página al enviar el formulario

		const id = todo.id; // Obtiene el id de la tarea
		const description = updateDescription; // Obtiene la nueva descripción del estado

		handleUpdateTodo(id, description); // Llama a la función para actualizar la tarea

		setDisabled(!disabled); // Alterna el estado de habilitación del campo de entrada

		focusInputRef.current.focus(); // Enfoca el campo de entrada después de la actualización
	};

	// Renderiza el formulario de actualización
	return (
		<form onSubmit={onSubmitUpdate}> {/* Maneja el evento de envío del formulario */}
			<input
				type='text' // Tipo de entrada
				className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`} // Clase CSS condicional
				name='updateDescription' // Nombre del campo
				value={updateDescription} // Valor del campo de texto
				onChange={onInputChange} // Maneja el cambio en el campo de texto
				placeholder='Nombre Tarea' // Texto que se muestra cuando el campo está vacío
				readOnly={disabled} // Si es verdadero, el campo es de solo lectura
				ref={focusInputRef} // Referencia para el campo de entrada
			/>

			<button className='btn-edit' type='submit'> {/* Botón para enviar el formulario */}
				<FaEdit /> {/* Icono de edición */}
			</button>
		</form>
	);
};
