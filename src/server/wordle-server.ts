import express from 'express';
import cors from 'cors';
import {words} from '../controllers/words-router'

export const wordleServer = express();

wordleServer.use(cors());

wordleServer.use('/words', words);

