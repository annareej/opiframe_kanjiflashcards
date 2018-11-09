import {ROMAJI_TO_HIRAGANA} from './MapKanaToRomaji';
import {getChunk} from './getChunk';
import {isCharJapanese, isCharVowel} from './IMEChecks'

export const ToKana = (input, kanatable) => {
    var chunk = '';
    var word = [];
    var chunkMAX = 3;
    var chunkSize = 0;
    var cursor = 0;
    var length = input.length;
    
        while(cursor < length){
            var kana = null;
            chunkSize = Math.min(chunkMAX, length - cursor);
            while(chunkSize > 0){
                chunk = getChunk(input,cursor,cursor+chunkSize);    
                chunk = chunk.toLowerCase();
 
                /*if (chunkSize == 1){
                    kana = ONE_LETTER_HIRA[chunk];
                }
                if (chunkSize == 2){
                    kana = TWO_LETTER_HIRA[chunk];
                }           
                if(chunkSize == 3){
                    kana = THREE_LETTER_HIRA[input];
                }*/
                if(!isCharJapanese(chunk.charAt(0))){
                    if(!isCharVowel(chunk.charAt(0)) && chunk.charAt(0) !== 'n'){
                        if(chunk.charAt(0) === chunk.charAt(1)){                       
                                chunkSize = 1;
                                chunk = 'っ';                          
                        }
                    }
                }
                
                kana = kanatable[chunk];
                
                if(kana != null){
                    break;
                }                   
                if(chunkSize === 4){
                    chunkSize -= 2;
                }else{
                    chunkSize -= 1;
                }                                        
            }
            
            if(kana == null){
                kana = chunk;
            }
            
            //else{
            //    kana = input;
            //}
            //kana = chunk;
            //if(kana != null){
             //   cursor+=chunkSize
             //   chunkSize = 0;
             //   word.push(kana);
             //   kana = null;
            //}
            //else{kana=chunk}
            
            
            
            //chunkSize = 0;
            cursor += chunkSize || 1;
            console.log("cursor "+cursor)
            console.log("chunkSize "+chunkSize);
            chunkSize = 0;
            word.push(kana);
            
        }
    
    return word.join("");
}