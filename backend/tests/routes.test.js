const supertest = require('supertest')
const { app } = require('../src/server')

let request = supertest(app)

describe('Login Endpoint', () => {
  afterAll(async () => {
  });

  it('for valid login/password should sign in and recive tokens', async () => {
    const res = await request
      .post('/api/v1/auth/login')
      .send({
        email: 'Test.User@gmail.com',
        password: 'Sa@123',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('tokens')
    expect(res.body.tokens).toHaveProperty('accessToken')
    expect(res.body.tokens).toHaveProperty('refreshToken')
  });

  it('for non-existing email should return http error 401 and appropriate message', async () => {
    const res = await request
      .post('/api/v1/auth/login')
      .send({
        email: 'NonExist@gmail.com',
        password: 'Sa@123',
      })
    expect(res.statusCode).toEqual(401)
    expect(res.body).toEqual({ message: 'Non-existing email' });
  });

  it('for invalid password should http error 401 and appropriate message', async () => {
    const res = await request
    .post('/api/v1/auth/login')
    .send({
      email: 'Test.User@gmail.com',
      password: 'Sa@12345',
    })

    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: 'Passwords do not match' });

  });

  it('for invalid password requirements should valudate input', async () => {
    const res = await request
    .post('/api/v1/auth/login')
    .send({
      email: 'Test.User@gmail.com',
      password: 'Sa@12',
    })

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ message: 'Min length 6 symbols' });

  });

  it('for correct reset token should return new acces and reset tokens', async () => {
    const res = await request
      .post('/api/v1/auth/login')
      .send({
        email: 'Test.User@gmail.com',
        password: 'Sa@123',
      })

    const token = res.body.tokens.refreshToken;

    const refreshRes = await request
    .post('/api/v1/auth/reset-token')
    .send({
      token
    })

    expect(res.statusCode).toEqual(200)
    expect(refreshRes.body).toHaveProperty('accessToken')
    expect(refreshRes.body).toHaveProperty('refreshToken')
  });

  it('reset password for existing email should return confirmed and send email', async () => {
    const res = await request
      .post('/api/v1/auth/reset')
      .send({
        email: 'Test.User@gmail.com',
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ message: 'Confirmed' });
  });

  it('reset password for non-existing email should return bed request responce', async () => {
    const res = await request
      .post('/api/v1/auth/reset')
      .send({
        email: 'NonExist@gmail.com',
      })

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ message: 'Non-existing email' });
  });

  it('reset password process should return confirmation and can login with new password', async () => {
    const newPassword = 'Sa@1234';
    const res = await request
      .post('/api/v1/auth/login')
      .send({
        email: 'Test.User@gmail.com',
        password: 'Sa@123',
      })

    const token = res.body.tokens.accessToken

    const resVerify = await request
      .post('/api/v1/auth/verify')
      .send({
        password: newPassword,
        verifiedPassword: newPassword,
        token
      })

    expect(resVerify.statusCode).toEqual(200)
    expect(resVerify.body).toEqual({ message: 'Confirmed' });

    const resLoginAgain = await request
      .post('/api/v1/auth/login')
      .send({
        email: 'Test.User@gmail.com',
        password: newPassword,
      })

    expect(resLoginAgain.statusCode).toEqual(200)
    expect(resLoginAgain.body).toHaveProperty('tokens')
    expect(resLoginAgain.body.tokens).toHaveProperty('accessToken')
    expect(resLoginAgain.body.tokens).toHaveProperty('refreshToken')
  });
})


// describe('POST /templates', function() {
//   afterAll(async () => {});
//   it('for sending array of template fields shoud receive template from db', async () => {

//     const reqBody = [
//       {
//         "name": "education",
//         "type": "text",
//         "isReadOnly": false,
//         "label": "Education",
//         "placeholder": "Education",
//       },
//       {
//         "name": "vacancy",
//         "type": "select",
//         "isReadOnly": false,
//         "label": "Vacancy",
//         "options": ["nurse", "paramedic"],
//         "placeholder": "Vacancy",
//         "validation": "",
//         "defaultValue": "nurse"
//       }
//     ]

//     const res = await request
//       .post('/api/v1/templates')
//       .set('Referer', 'http://localhost:3000/test')
//       .send(reqBody)
//     expect(res.statusCode).toEqual(200)
//     expect(res.body).toHaveProperty('id')
//     expect(res.body).toHaveProperty('industryId')
//     expect(res.body.template).toStrictEqual(reqBody)
//   });
// });
