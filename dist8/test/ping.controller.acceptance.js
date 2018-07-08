"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const rest_1 = require("@loopback/rest");
const _1 = require("../");
describe('PingController', () => {
    let app;
    let server;
    let client;
    before(givenAnApplication);
    before(givenARestServer);
    before(async () => {
        await app.boot();
        await app.start();
    });
    before(() => {
        client = testlab_1.createClientForHandler(server.requestHandler);
    });
    after(async () => {
        await app.stop();
    });
    it('invokes GET /ping', async () => {
        await client.get('/ping?msg=world').expect(200);
    });
    function givenAnApplication() {
        app = new _1.StarterApplication({
            rest: {
                port: 0,
            },
        });
    }
    async function givenARestServer() {
        server = await app.getServer(rest_1.RestServer);
    }
});
//# sourceMappingURL=ping.controller.acceptance.js.map