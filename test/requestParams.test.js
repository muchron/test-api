const express = require('express')
const request = require('supertest')
const app = express()

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
})

test('Test query parameter', async () => {
    const response = await request(app)
        .get('/')
        .query({ firstName: 'John', lastName: 'Doe' });
    expect(response.text).toBe(`Hello John Doe`);
})