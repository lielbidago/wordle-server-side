import {wordleServer} from '../server/wordle-server';
import request from 'supertest';
import { expect } from 'chai';
import { createJWT } from '../services/auth-service';

describe('game word feature', () => {

    describe('GET /words/new-word', () => {
        it('should return game word token', () => {
            return request(wordleServer)
                .get('/words/new-word')
                .expect(200)
                .expect(res => {
                    expect(res.text).to.have.lengthOf.above(6);
                });
                
        });
    
        describe('POST /words/check-word', () => {
            
            it('should return game word status array', () => {
                
                const gameWordToken = createJWT({word:'APPLE'});
                const guess = 'APLRE';

                return request(wordleServer)
                    .post('/words/check-word')
                    .send({GameWord:gameWordToken,guess})
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).to.deep.equal(['green','green','yellow','grey','green']);
                    });
                    
            });

            it('should return ERROR for incorrect word JWT token', () => {
                
                const incorrectToken = (createJWT({word:'APPLE'}));

                const guess = 'APLRE';

                return request(wordleServer)
                    .post('/words/check-word')
                    .send({GameWord:incorrectToken+'9',guess})
                    .expect(400)
                    .expect((res) => {
                        expect(res.text).to.equal('Incorrect game word token!');
                    });
                    
            });


    });

    

});
});
