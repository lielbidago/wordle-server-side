import { wordsList } from "../resources/wordsList";

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}

export class wordsService{
    #wordsLst: string[];
    
    constructor(wordsLst:string[]){
        this.#wordsLst = wordsLst;
    }

    getWord():string{
        return this.#wordsLst[getRandomInt(this.#wordsLst.length)];
    }
    
    checkWord(word: string, wordEntered: string):string[]{
        
        let wordColors = wordEntered.split("");
        let wordStatus = ['grey','grey','grey','grey','grey'];
        
        wordStatus=wordColors.map((letter:string, index:number)=>{
    
                if(word.includes(letter)){
                    
                    if(word[index]===letter){
                        return 'green';
                    }else{
                        return 'yellow';
                    }
                    
                }
                return 'grey'
     
            })
        
        return wordStatus
    }
    
}

export function createWordsService(wordsLst:string[]){
    return new wordsService(wordsLst);
}

export default createWordsService(wordsList);