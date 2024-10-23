import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoreducer';

// Custom Hook para gestionar la lógica de la lista de tareas (todos)
export const useTodo = () => {
    // Estado inicial para la lista de tareas
    const initialState = [];

    // Función para inicializar el estado a partir de localStorage
    const init = () => {
        // Obtiene las tareas guardadas en localStorage o retorna un arreglo vacío
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    // useReducer para manejar el estado de las tareas usando el reducer definido
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    // Contador total de tareas
    const todosCount = todos.length;
    // Contador de tareas pendientes (no completadas)
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    // Efecto para sincronizar el estado de las tareas con localStorage
    useEffect(() => {
        // Guarda el estado actual de las tareas en localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); // Solo se ejecuta cuando 'todos' cambia

    // Función para agregar una nueva tarea
    const handleNewTodo = todo => {
        const action = {
            type: 'Add Todo', // Tipo de acción
            payload: todo, // Carga útil (nueva tarea)
        };
        dispatch(action); // Dispara la acción
    };

    // Función para eliminar una tarea por su ID
    const handleDeleteTodo = id => {
        const action = {
            type: 'Delete Todo', // Tipo de acción
            payload: id, // Carga útil (ID de la tarea a eliminar)
        };
        dispatch(action); // Dispara la acción
    };

    // Función para alternar el estado de completado de una tarea
    const handleCompleteTodo = id => {
        const action = {
            type: 'Complete Todo', // Tipo de acción
            payload: id, // Carga útil (ID de la tarea a completar)
        };
        dispatch(action); // Dispara la acción
    };

    // Función para actualizar la descripción de una tarea
    const handleUpdateTodo = (id, description) => {
        const action = {
            type: 'Update Todo', // Tipo de acción
            payload: {
                id, // ID de la tarea a actualizar
                description, // Nueva descripción de la tarea
            },
        };
        dispatch(action); // Dispara la acción
    };

    // Función para eliminar todas las tareas completadas
    const handleClearCompletedTodos = () => {
        const action = {
            type: 'Clear Completed Todos', // Tipo de acción
        };
        dispatch(action); // Dispara la acción
    };

    // Retorna el estado y las funciones para manipular la lista de tareas
    return {
        todos, // Lista de tareas
        todosCount, // Total de tareas
        pendingTodosCount, // Total de tareas pendientes
        handleNewTodo, // Función para agregar una nueva tarea
        handleDeleteTodo, // Función para eliminar una tarea
        handleCompleteTodo, // Función para completar una tarea
        handleUpdateTodo, // Función para actualizar una tarea
        handleClearCompletedTodos, // Función para eliminar tareas completadas
    };
};
