import React from "react";
import { NavLink } from "react-router-dom";
/*React se importa para usar la sintaxis JSX y definir el componente funcional.
NavLink se importa desde react-router-dom para facilitar la navegación entre diferentes vistas (filtros) de la aplicación de tareas.*/

export const TodoFooter = ({
  filter,
  handleClearCompletedTodos,
  pendingTodosCount,
}) => {
  /*TodoFooter es un componente funcional que recibe tres props:
filter: Representa el filtro actual aplicado a la lista de tareas (all, pending, o completed).
handleClearCompletedTodos: Es una función que se llama cuando el usuario desea eliminar todas las tareas completadas.
pendingTodosCount: Es un número que indica cuántas tareas pendientes quedan en la lista.*/
  return (
    <div className="footer">
      <span className="items-left">
        {pendingTodosCount} items left
      </span>

      <div className="filters">
        <NavLink
          to="/all"
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
        >
          All
        </NavLink>
        <NavLink
          to="/pending"
          className={`filter-btn ${filter === "pending" ? "active" : ""}`}
        >
          Pending
        </NavLink>
        <NavLink
          to="/completed"
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
        >
          Completed
        </NavLink>
      </div>
      <button className="clear-btn" onClick={handleClearCompletedTodos}>
        Clear Completed
      </button>
    </div>
  );
};

/*Estructura del JSX - Contador de tareas pendientes:
El componente devuelve un div con la clase footer que contiene tres partes principales.
La primera parte muestra un contador de tareas pendientes:
Se utiliza el valor de pendingTodosCount para mostrar cuántas tareas pendientes quedan.
La expresión {pendingTodosCount } items left añade un mensaje despues del numero.

/*Filtros de navegación:
La segunda parte es un div con la clase filters, que contiene enlaces de navegación (NavLink) para cambiar
 entre diferentes vistas de la lista de tareas:
El primer enlace navega a la ruta /all para mostrar todas las tareas. Si el valor de filter es 'all',
 se añade la clase active al enlace.
El segundo enlace navega a la ruta /pending para mostrar solo las tareas pendientes. Si el
 valor de filter es 'pending', se añade la clase active.
El tercer enlace navega a la ruta /completed para mostrar solo las tareas completadas. Si el valor de
 filter es 'completed', se añade la clase active.
La clase filter-btn se aplica a cada enlace para permitir la personalización del estilo mediante CSS.*/

/*Botón para eliminar tareas completadas:
La tercera parte del pie de página es un botón con la clase clear-btn que, al ser presionado,
 ejecuta la función handleClearCompletedTodos para eliminar todas las tareas marcadas como completadas.*/

 /*Resumen
El componente TodoFooter proporciona una interfaz para:

Mostrar la cantidad de tareas pendientes.
Filtrar las tareas para ver todas, solo las pendientes, o solo las completadas.
Limpiar las tareas completadas con un solo botón.*/
