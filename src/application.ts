import {ApplicationConfig} from '@loopback/core';
import {RestApplication, RestServer, RestBindings} from '@loopback/rest';
import {MySequence} from './sequence';
import {db} from './datasources/db.datasource';

// juggler imports are required to infer types for RepositoryMixin!
import {
  Class,
  Repository,
  RepositoryMixin,
  juggler,
} from '@loopback/repository';
/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
import {BootMixin, Booter, Binding} from '@loopback/boot';
/* tslint:enable:no-unused-variable */

export class StarterApplication extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  constructor(options?: ApplicationConfig) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
    this.setupDatasources();
  }

  setupDatasources() {
    // This will allow you to test your application without needing to
    // use a "real" datasource!
    const datasource =
      this.options && this.options.datasource
        ? new juggler.DataSource(this.options.datasource)
        : db;
    this.dataSource(datasource);
  }

  async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);
  }
}
