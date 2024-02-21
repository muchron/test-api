const express = require('express')
const app = express()
const request = require('supertest')

app.get('/', (req, res) => {
    const type = req.get("accept");
    res.send(`Hello ${type}`);
})

test('Test ExpressJS', async () => {
    const response = await request(app)
        .get('/')
        .set('Accept', 'text/plain');
    expect(response.text).toBe('Hello text/plain');
})