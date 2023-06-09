import * as sinon from 'sinon';
import * as chai from 'chai'; //
// @ts-ignore  //
import chaiHttp = require('chai-http'); //

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserModel from '../database/models/User';

chai.use(chaiHttp);  //

const { expect } = chai;
 //   RENOMEAR O NOME DO ARQUIVO OBS.
describe('/login', () => {
  const fakeUser =  {
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
      // senha: secret_user
  }

  describe('Primeiro caso de teste', () => {
    it('Deve cadastrar', async () => {
      sinon.stub(UserModel, 'findOne').resolves(fakeUser as UserModel)
      const response = await chai.request(app).post('/login').send({
        email: 'user@user.com',  //
        password: 'secret_user',//
      });
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token')
      sinon.restore()
    })
  });

  describe('Primeiro caso de teste falha', () => {
    it('Deve cadastrar', async () => {
      sinon.stub(UserModel, 'findOne').resolves(fakeUser as UserModel)
      const response = await chai.request(app).post('/login').send({
        email: 'useruser.com',  //
        password: 'secret_user',//
      });
      expect(response.status).to.equal(401);
      // expect(response.body).to.have.property('token')
      sinon.restore()
    })
  });

// describe('/login/validate', () => {
//   describe('teste de login validade', () => {
//     it('')
//     // const response = await chai.request(app).get('/login/validate').send({

//     // })
//   })
// })

//   })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
