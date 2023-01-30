import {Router} from 'express';
import { Request, Response } from 'express';
import {createJWT, verifyJWT} from '../services/auth-service';
import bodyParser from 'body-parser';
import wordsService from '../services/wordsService';



export const words = Router();

words.get('/new-word',(req:Request, res:Response)=>{
    const word = wordsService.getWord();
    const wordToken = createJWT({word});
    res.send(wordToken);
});

words.post('/check-word',bodyParser.json(),(req:Request, res:Response)=>{
    const {guess,GameWord} = req.body;

    let wordDecypted:string = null;
    try{
        const {word} = verifyJWT(GameWord);
        wordDecypted = word;

    }catch(e){
        // console.log(e);
        res.status(400).send('Incorrect game word token!');
        return;
    }

    const letterStatusArray = wordsService.checkWord(wordDecypted.toUpperCase(),guess);
    res.json(letterStatusArray);
});
