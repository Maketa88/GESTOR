import React from "react";
import { TodoItem } from "./TodoItem";
/*Se importa React para poder utilizar JSX y definir el componente funcional.
TodoItem es un componente que se importa para renderizar cada tarea individual. Este componente maneja la lógica y la interfaz de cada tarea.*/

export const TodoList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  /*Declaración del Componente:
TodoList es un componente funcional que recibe varias propiedades (props):
todos: Un array de objetos que representan las tareas. Cada objeto tiene propiedades como id, description y done.
handleUpdateTodo: Función para actualizar una tarea.
handleDeleteTodo: Función para eliminar una tarea.
handleCompleteTodo: Función para marcar una tarea como completada o pendiente.*/
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
};

/*Estructura del JSX - Elemento de la Lista (<ul>):

El componente devuelve una lista no ordenada (<ul>) que contiene múltiples elementos <li> representados por el componente TodoItem.
Iteración sobre el Array de Tareas:

Se utiliza el método map para iterar sobre el array todos.
Por cada tarea en el array, se genera un componente TodoItem que se encarga de renderizar la información y la funcionalidad de la tarea específica.
Cada TodoItem recibe varias propiedades:
key={todo.id}: Se utiliza el id de la tarea como clave única para optimizar el rendimiento y evitar errores en la renderización.
todo={todo}: Pasa el objeto de la tarea actual al componente TodoItem.
handleUpdateTodo, handleDeleteTodo, handleCompleteTodo: Estas funciones se pasan
 al componente TodoItem para que pueda manejar la actualización, eliminación y el marcado de la tarea como completada.*/

/*Resumen
El componente TodoList actúa como un contenedor que renderiza una lista de tareas. Cada tarea se muestra mediante
el componente TodoItem, lo cual permite modularizar la funcionalidad y el manejo de cada elemento individual de la lista.
Las funciones para actualizar, eliminar y completar una tarea se pasan como props para que TodoItem pueda interactuar
con la lista de tareas y modificarla según sea necesario.

Este enfoque permite que la lógica de la aplicación esté bien organizada, ya que TodoList se encarga
solo de la lista de tareas, mientras que TodoItem maneja cada tarea de forma específica.*/
