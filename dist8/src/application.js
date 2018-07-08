"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const sequence_1 = require("./sequence");
const db_datasource_1 = require("./datasources/db.datasource");
// juggler imports are required to infer types for RepositoryMixin!
const repository_1 = require("@loopback/repository");
/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
const boot_1 = require("@loopback/boot");
/* tslint:enable:no-unused-variable */
class StarterApplication extends boot_1.BootMixin(repository_1.RepositoryMixin(rest_1.RestApplication)) {
    constructor(options) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
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
        const datasource = this.options && this.options.datasource
            ? new repository_1.juggler.DataSource(this.options.datasource)
            : db_datasource_1.db;
        this.dataSource(datasource);
    }
    async start() {
        await super.start();
        const server = await this.getServer(rest_1.RestServer);
        const port = await server.get(rest_1.RestBindings.PORT);
        console.log(`Server is running at http://127.0.0.1:${port}`);
        console.log(`Try http://127.0.0.1:${port}/ping`);
    }
}
exports.StarterApplication = StarterApplication;
//# sourceMappingURL=application.js.map