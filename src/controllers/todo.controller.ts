import {repository} from '@loopback/repository';
import {TodoRepository} from '../repositories';
import {Todo} from '../models';
import {
  HttpErrors,
  post,
  param,
  requestBody,
  get,
  put,
  patch,
  del,
} from '@loopback/rest';

export class TodoController {
  constructor(@repository(TodoRepository) protected todoRepo: TodoRepository) {}

  @post('/todos')
  async createTodo(@requestBody() todo: Todo) {
    if (!todo.title) {
      throw new HttpErrors.BadRequest('title is required');
    }
    return await this.todoRepo.create(todo);
  }

  @get('/todos/{id}')
  async findTodoById(@param.path.string('id') id: string): Promise<Todo> {
    return await this.todoRepo.findById(id);
  }

  @get('/todos')
  async findTodos(): Promise<Todo[]> {
    return await this.todoRepo.find();
  }

  @put('/todos/{id}')
  async replaceTodo(
    @param.path.string('id') id: string,
    @requestBody() todo: Todo,
  ): Promise<boolean> {
    return await this.todoRepo.replaceById(id, todo);
  }

  @patch('/todos/{id}')
  async updateTodo(
    @param.path.string('id') id: string,
    @requestBody() todo: Todo,
  ): Promise<boolean> {
    return await this.todoRepo.updateById(id, todo);
  }

  @del('/todos/{id}')
  async deleteTodo(@param.path.string('id') id: string): Promise<boolean> {
    return await this.todoRepo.deleteById(id);
  }
}
