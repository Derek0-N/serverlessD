const { app } = require('@azure/functions');

app.http('HelloWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { body: "Hello, World!" };
    }
});
