const express = require('express')
const app = express()
const request = require('supertest')

app.get('/hello/world', (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,

    })
})

test('Request URL', async () => {
    const response = await request(app).
        get('/hello/world');
    expect(response.body).toEqual({
        path: '/hello/world',
        originalUrl: '/hello/world',
        hostname: '127.0.0.1',
        protocol: 'http',
        secure: false,
    });
})