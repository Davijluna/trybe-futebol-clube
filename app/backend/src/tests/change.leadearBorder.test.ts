import * as sinon from 'sinon';
import * as chai from 'chai'; //
// @ts-ignore  //
import chaiHttp = require('chai-http');

import { app } from '../app';

import Team from '../database/models/Team'

chai.use(chaiHttp); 
type tipoTimes = {
    id: Number,
    teamName: String,
    matcheHome:
      {
        id:Number;
        homeTeam: number;
        homeTeanGoals: number;
        awayTeam: number;
        awayTeamGoals: number;
       inProgress: number;
      } []
    }[]


const { expect } = chai;

describe('/leaderboard/home', () => {
    const fakeObjectTimes: tipoTimes = 
       [ 
        {
            id: 1,
            teamName: 'Santos',
            matcheHome: 
             [ {
            id: 1,
            homeTeam: 1,
            homeTeanGoals: 3,
            awayTeam: 2,
            awayTeamGoals: 2,
            inProgress: 0,
            }]
          }
        ]
        
        const expertLiderBorder = [
            {
            name: 'Santos',
            totalGames: 1,
            goalsFavor: 9,
            goalsOwn: 3,
            goalsBalance: 6,
            totalDraws: 0,
            totalLosses: 0,
            totalPoints: 9,
            totalVictories: 3,
            efficiency: 100.00,
        }
    ]

    describe('testando primeiro caso de leadearborder', () => {
        it('deve testar o retorno do formato semelhante ao fake', async () => {
            sinon.stub(Team, 'findAll').resolves(fakeObjectTimes as any)
            const response = await chai.request(app).get('/leaderboard/home')
            expect(response.status).to.equal(200)
            expect(response).to.deep.equal(expertLiderBorder)
        })
    })
})

