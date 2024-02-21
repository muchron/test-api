const express = require('express')
const app = express()
const request = require('supertest')

app.get('/', (req, res) => res.send(`Hello ${req.query.name}`))

test('Request HTTP', async () => {
    const response = await request(app).get('/').query({ name: 'World!' });
    expect(response.text).toBe('Hello World!');
})