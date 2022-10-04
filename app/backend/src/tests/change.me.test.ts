import * as sinon from 'sinon';
import * as chai from 'chai'; //
// @ts-ignore  //
import chaiHttp = require('chai-http'); //

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);  //

const { expect } = chai;
 //   RENOMEAR O NOME DO ARQUIVO OBS.
describe('/login', () => {
  describe('Primeiro caso de teste', () => {
    it('Deve cadastrar', async () => {
      const response = await chai.request(app).post('/login').send({
        email: 'user@user.com',  //
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO' //
      });
      expect(response.status).to.equal(200);
    })

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
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
