const { GenericContainer } = require("testcontainers");

describe("Hello World Test", () => {
    let container;

    beforeAll(async () => {
        container = await new GenericContainer("alpine")
            .withCommand(["echo", "Hello World"])
            .start();
    });

    afterAll(async () => {
        await container.stop();
    });

    test("should print Hello World", async () => {
        const logs = await container.getLogs();
        expect(logs).toContain("Hello World");
    });
});