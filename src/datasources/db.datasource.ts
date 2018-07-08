import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./db.datasource.json');

export class db extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}
