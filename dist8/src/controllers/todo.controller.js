"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const models_1 = require("../models");
const rest_1 = require("@loopback/rest");
let TodoController = class TodoController {
    constructor(todoRepo) {
        this.todoRepo = todoRepo;
    }
    async createTodo(todo) {
        if (!todo.title) {
            throw new rest_1.HttpErrors.BadRequest('title is required');
        }
        return await this.todoRepo.create(todo);
    }
    async findTodoById(id) {
        return await this.todoRepo.findById(id);
    }
    async findTodos() {
        return await this.todoRepo.find();
    }
    async replaceTodo(id, todo) {
        return await this.todoRepo.replaceById(id, todo);
    }
    async updateTodo(id, todo) {
        return await this.todoRepo.updateById(id, todo);
    }
    async deleteTodo(id) {
        return await this.todoRepo.deleteById(id);
    }
};
__decorate([
    rest_1.post('/todos'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    rest_1.get('/todos/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findTodoById", null);
__decorate([
    rest_1.get('/todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findTodos", null);
__decorate([
    rest_1.put('/todos/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "replaceTodo", null);
__decorate([
    rest_1.patch('/todos/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    rest_1.del('/todos/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
TodoController = __decorate([
    __param(0, repository_1.repository(repositories_1.TodoRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map