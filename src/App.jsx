import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import { TodoAdd } from './components/TodoAdd';  // Componente para añadir nuevas tareas
import { TodoList } from './components/TodoList'; // Componente para mostrar la lista de tareas
import { TodoFooter } from './components/TodoFooter'; // Componente para el pie de página de tareas
import { useTodo } from './hooks/useTodo'; // Hook personalizado para gestionar la lógica de tareas

/**
 * Componente principal de la aplicación que gestiona la lista de tareas.
 * Utiliza un hook personalizado (useTodo) para manejar el estado y las operaciones
 * relacionadas con las tareas.
 */
function App() {
    // Se extraen las funciones y el estado del hook useTodo
    const {
        todos,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
        handleClearCompletedTodos
    } = useTodo();

    // Obtiene la ubicación actual del router
    const location = useLocation();

    // Determina el filtro de tareas a partir de la ruta actual
    const filter = location.pathname.slice(1) || 'all';

    // Filtra las tareas en función del filtro seleccionado
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true; // Muestra todas las tareas
        if (filter === 'pending') return !todo.done; // Muestra solo las tareas pendientes
        if (filter === 'completed') return todo.done; // Muestra solo las tareas completadas
        return true; // En caso de que el filtro no coincida, muestra todas las tareas
    });

    return (
        <>
            <div className='card-to-do'>
                <div className='containercolor'>
                    <h1>My Day</h1>
                    <h1>All my tasks in one place</h1>
                    <div className='counter-todos'>
                        {/* Se puede añadir lógica para mostrar contadores de tareas aquí */}
                    </div>
                    <div className='add-todo'>
                        {/* Componente para añadir nuevas tareas */}
                        <TodoAdd handleNewTodo={handleNewTodo} />
                    </div>
                </div>

                {/* Componente que muestra la lista de tareas filtradas */}
                <TodoList
                    todos={filteredTodos}
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />

                {/* Componente que muestra el pie de página con filtros y limpieza de tareas completadas */}
                <TodoFooter
                    filter={filter}
                    handleClearCompletedTodos={handleClearCompletedTodos}
                    pendingTodosCount={pendingTodosCount}
                />
            </div>
        </>
    );
}

/**
 * Componente que envuelve la aplicación en un Router y define las rutas.
 */
export default function AppWrapper() {
    return (
        <Router>
            <Routes>
                {/* Redirige de la ruta raíz a '/all' */}
                <Route path="/" element={<Navigate to="/all" replace />} />
                <Route path="/all" element={<App />} /> // Ruta para mostrar todas las tareas
                <Route path="/pending" element={<App />} /> // Ruta para mostrar solo tareas pendientes
                <Route path="/completed" element={<App />} /> // Ruta para mostrar solo tareas completadas
            </Routes>
        </Router>
    );
}
