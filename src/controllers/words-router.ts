import {Router} from 'express';
import { Request, Response } from 'express';
import {createJWT, WORDLE_JWT_KEY, verifyJWT} from '../services/auth-service';
import bodyParser from 'body-parser';
import wordsService from '../services/wordsService';
import { Console } from 'console';


export const words = Router();


words.get('/new-word',(req:Request, res:Response)=>{
    const word = wordsService.getWord();
    const wordToken = createJWT({word});
    res.send(wordToken);
});

// words.post('/is-word',bodyParser.json(),(req:Request, res:Response)=>{
//     const {currentWord,currGameWord} = req.body;
//     const wordCheck = wordsService.isWord(currentWord,currGameWord);
//     res.send(wordCheck)
// });

words.post('/check-word',bodyParser.json(),(req:Request, res:Response)=>{
    const {guess,GameWord} = req.body;

    let wordDecypted:string = null;
    try{
        const {word} = verifyJWT(GameWord);
        wordDecypted = word;

    }catch(e){
        console.log(e);
    }
    // console.log(wordDecypted.toUpperCase(),guess)
    const letterStatusArray = wordsService.checkWord(wordDecypted.toUpperCase(),guess);
    res.json(letterStatusArray);
});
