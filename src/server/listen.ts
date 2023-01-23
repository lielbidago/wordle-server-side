import {wordleServer} from './wordle-server';

const host= '0.0.0.0';
const port= 3003;

wordleServer.listen(port, host,()=>{
    console.log('wordleServer is up on port 3003! :)');
})
