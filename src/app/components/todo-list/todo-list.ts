import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  todos: WritableSignal<Todo[]> = signal([
    { id: 1, title: 'Learn Angular Signals', isCompleted: false },
    { id: 2, title: 'Build Todo App', isCompleted: false }
  ]);

  completedToDos = computed(() => this.todos().filter(t => t.isCompleted));
  remainingToDos = computed(() => this.todos().filter(t => !t.isCompleted));

  toggle(todo: Todo) {
    this.todos.update(list =>
      list.map(t =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  }

  add(newTitle: string) {
    if (!newTitle.trim()) return;
    const newTodo: Todo = { id: Date.now(), title: newTitle, isCompleted: false };
    this.todos.update(list => [...list, newTodo]);
  }

  remove(todo: Todo) {
    this.todos.update(list => list.filter(t => t.id !== todo.id));
  }
}
