import {Router} from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import wordsService from '../services/wordsService';

export const words = Router();


words.get('/new-word',(req:Request, res:Response)=>{
    const word = wordsService.getWord();
    res.send(word);
});

// words.post('/is-word',bodyParser.json(),(req:Request, res:Response)=>{
//     const {currentWord,currGameWord} = req.body;
//     const wordCheck = wordsService.isWord(currentWord,currGameWord);
//     res.send(wordCheck)
// });

words.post('/check-word',bodyParser.json(),(req:Request, res:Response)=>{
    const {currentWord,currGameWord} = req.body;
    const wordStatus = wordsService.checkWord(currentWord,currGameWord);
    res.json(wordStatus);
});
