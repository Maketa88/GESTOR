import { useState } from 'react';

// Custom Hook para gestionar el estado de un formulario
export const useForm = (initialForm = {}) => {
	// Estado que almacena los valores del formulario
	const [formState, setFormState] = useState(initialForm);

	// Función para manejar los cambios en los campos de entrada
	const onInputChange = e => {
		// Obtiene el nombre del campo de entrada que se está modificando
		const name = e.target.name;
		// Obtiene el nuevo valor del campo de entrada
		const value = e.target.value;

		// Actualiza el estado del formulario con el nuevo valor
		setFormState({
			...formState, // Mantiene el estado anterior
			[name]: value, // Actualiza el campo correspondiente
		});
	};

	// Función para restablecer el formulario a su estado inicial
	const onResetForm = () => {
		setFormState(initialForm); // Restaura el estado del formulario al inicial
	};

	// Retorna el estado actual del formulario y las funciones para manejar cambios y restablecimientos
	return {
		...formState, // Desestructura el estado del formulario para acceder a sus valores
		formState, // Retorna el estado completo del formulario
		onInputChange, // Retorna la función para manejar cambios en los campos de entrada
		onResetForm, // Retorna la función para restablecer el formulario
	};
};
