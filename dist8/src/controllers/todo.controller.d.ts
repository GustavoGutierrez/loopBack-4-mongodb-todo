import { TodoRepository } from '../repositories';
import { Todo } from '../models';
export declare class TodoController {
    protected todoRepo: TodoRepository;
    constructor(todoRepo: TodoRepository);
    createTodo(todo: Todo): Promise<Todo>;
    findTodoById(id: string): Promise<Todo>;
    findTodos(): Promise<Todo[]>;
    replaceTodo(id: string, todo: Todo): Promise<boolean>;
    updateTodo(id: string, todo: Todo): Promise<boolean>;
    deleteTodo(id: string): Promise<boolean>;
}
