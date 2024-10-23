// Reducer para gestionar el estado de la lista de tareas (todos)
export const todoReducer = (initialState, action) => {
    // Se evalúa el tipo de acción
    switch (action.type) {
        // Agrega una nueva tarea al estado
        case 'Add Todo':
            return [...initialState, action.payload]; // Retorna un nuevo arreglo con la nueva tarea añadida

        // Elimina una tarea basada en su ID
        case 'Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload); // Retorna un nuevo arreglo sin la tarea eliminada

        // Alterna el estado de completado de una tarea
        case 'Complete Todo':
            return initialState.map(todo => {
                // Verifica si la tarea actual es la que se quiere completar/desmarcar
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done, // Cambia el estado 'done' de la tarea
                    };
                }
                return todo; // Retorna la tarea sin cambios si no es la seleccionada
            });

        // Actualiza la descripción de una tarea
        case 'Update Todo':
            return initialState.map(todo => {
                // Verifica si la tarea actual es la que se quiere actualizar
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description, // Actualiza la descripción
                    };
                }
                return todo; // Retorna la tarea sin cambios si no es la seleccionada
            });

        // Elimina todas las tareas que están completadas
        case 'Clear Completed Todos':
            return initialState.filter(todo => !todo.done); // Retorna un nuevo arreglo sin las tareas completadas

        // Retorna el estado actual si el tipo de acción no coincide con ninguno de los casos anteriores
        default:
            return initialState;
    }
};
