import {expect} from 'chai';
import wordsService from './wordsService';
import { wordsList } from '../resources/wordsList';

describe('wordsService service unit tests', ()=>{
    
    describe('getWord()',()=>{
        it("return a random word from wordLst", ()=>{
            const randWord = wordsService.getWord();
            expect(wordsList).to.be.includes(randWord);
        });
        
    });

    describe('checkWord()',()=>{
        
        const gameWord = 'APPLE';
        
        it("return a word status array for a correct guess", ()=>{
            const statusArr = wordsService.checkWord(gameWord, 'APPLE');
            expect(statusArr).to.deep.equal(['green','green','green','green','green']);
        });
        
        it("return a word status array for a incorrect guess", ()=>{
            const statusArr = wordsService.checkWord(gameWord, 'APPES');
            expect(statusArr).to.deep.equal(['green','green','green','yellow','grey']);
        });
    });
});