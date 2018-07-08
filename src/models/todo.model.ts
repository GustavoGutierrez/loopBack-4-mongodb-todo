import {Entity, property, model} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete: boolean;

  getId() {
    return this.id;
  }
}
