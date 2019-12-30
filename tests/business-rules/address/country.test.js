// const request = require('supertest');
// const app = require('../../../server');

// describe('Post Endpoint', () => {
//   it('Should create a new country', async () => {
//     const country = { name: 'Brasil' };
//     const res = await request(app).post('/api/countries').send(country);

//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty('data');
//     expect(res.body.data).toHaveProperty('name');
//     expect(res.body.data.name).toBe(country.name);
//   });
// });
