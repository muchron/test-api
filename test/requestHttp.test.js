const express = require('express')
const app = express()
const request = require('supertest')

app.get('/', (req, res) => res.send('Hello World!'))

test('Test ExpressJS', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
})