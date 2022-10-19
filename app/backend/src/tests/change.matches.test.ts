import * as sinon from 'sinon';
import * as chai from 'chai'; //
// @ts-ignore  //
import chaiHttp = require('chai-http');

import IMachts from '../entities/IMatch'

import { app } from '../app';


import Matches from '../database/models/Matches'

chai.use(chaiHttp); 

const { expect } = chai;

interface nameTimes {
    teamName: string,
}  

class testMatches extends Matches {
    public teamHome: nameTimes;
    public teamAway: nameTimes;
}

describe('/matches', () => {
    const fakeTeams = [
    {
        id: 1,
        homeTeam: 16,
        homeTeamGoals: 1,
        awayTeam: 8,
        awayTeamGoals: 1,
        inProgress: 0,
        teamHome: {
          teamName: "São Paulo"
        },
        teamAway: {
          teamName: "Grêmio"
        }
    }
    ]

    describe('Primeiro caso de teste para matches', () => {
        it('deve testar se returna o formato semelhante ao fake', async () => {
            sinon.stub(Matches, 'findAll').resolves(fakeTeams as unknown as testMatches[])
            const response = await (await chai.request(app).get('/matches'))
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal(fakeTeams);
            sinon.restore()
        });
    });

    const messageFake = "Finished";

    describe('teste de requisito 24 da rota /matches/:id/finish', () => {
        it('Deve-se retornar, com um status 200 a seguinte mensagem "message": "Finished"', async () => {
            sinon.stub(Matches,'create').resolves(messageFake as any)
            const response = await (await chai.request(app).patch('/matches/1/finish'))
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal(messageFake)
        });
    });

    // const objectsTimes = {
    //     "message": "It is not possible to create a match with two equal teams"
    //   }
    // describe('teste de requisito 23 da rota /matches', () => {
    //     it('deve-se retornar os dados da partida, com status 201', async () => {
    //         sinon.stub(Matches,'create').resolves(objectsTimes as any)
    //         const response = await (await chai.request(app).post('/matches'))
    //         // expect(response.status).to.equal(201);
    //         expect(response.body === objectsTimes).to.equal(401)
    //     })
    // })
});

