// import { app } from '../app';
// import * as sinon from 'sinon';
// import * as chai from 'chai'; //

// import chaiHttp = require('chai-http');

// import { app } from '../app';


// import Team from '../database/models/Team'

// chai.use(chaiHttp); 

// const { expect } = chai;

// describe('/team', () => {
//     const fakeTeams = {
//             team_name: 'Avaí/Kindermann',
//     }

//     describe('Primeiro caso de teste para teams', () => {
//         it('deve testar se returna o formato semelhante ao fake', async () => {
//             sinon.stub(Team, 'findOne').resolves(fakeTeams as Team)
//             const response = await chai.request(app).post('/team').send({
//                team: 'Avaí/Kindermann',
//             });
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('object')
//             sinon.restore()
//         })
//     })
// })

