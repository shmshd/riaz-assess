module.exports = async function (fastify, opts) {

    // Get all items
    fastify.get('/todos', async (request, reply) => {
        return await fastify.mysql.query('SELECT * FROM items');
    });

    // Add a new item
    fastify.post('/todos', async (request, reply) => {
        const { title, completed } = request.body;
        await fastify.mysql.query('INSERT INTO items (title, completed) VALUES (?, ?)', [title, completed]);
        return { status: 'ok' };
    });

    // Update an item
    fastify.put('/todos/:id', async (request, reply) => {
        const { id } = request.params;
        const { title, completed } = request.body;
        await fastify.mysql.query('UPDATE items SET title = ?, completed = ? WHERE id = ?', [title, completed, id]);
        return { status: 'ok' };
    });

// Delete an item
    fastify.delete('/todos/:id', async (request, reply) => {
        const { id } = request.params;
        await fastify.mysql.query('DELETE FROM items WHERE id = ?', [id]);
        return { status: 'ok' };
    });
}