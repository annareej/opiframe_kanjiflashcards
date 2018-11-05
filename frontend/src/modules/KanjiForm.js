import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';


export default class KanjiForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id:0,
            onyomi:"",
            kunyomi:"",
            meaning:"",
            hiragana : {
                '.': '。',
                ',': '、',
                ':': '：',
                '/': '・',
                '!': '！',
                '?': '？',
                '~': '〜',
                '-': 'ー',
                '‘': '「',
                '’': '」',
                '“': '『',
                '”': '』',
                '[': '［',
                ']': '］',
                '(': '（',
                ')': '）',
                '{': '｛',
                '}': '｝',
              
                'a': 'あ',
                'i': 'い',
                'u': 'う',
                'e': 'え',
                'o': 'お',
                'yi': 'い',
                'wu': 'う',
                'whu': 'う',
                'xa': 'ぁ',
                'xi': 'ぃ',
                'xu': 'ぅ',
                'xe': 'ぇ',
                'xo': 'ぉ',
                'xyi': 'ぃ',
                'xye': 'ぇ',
                'ye': 'いぇ',
                'wha': 'うぁ',
                'whi': 'うぃ',
                'whe': 'うぇ',
                'who': 'うぉ',
                'wi': 'うぃ',
                'we': 'うぇ',
                'va': 'ゔぁ',
                'vi': 'ゔぃ',
                'vu': 'ゔ',
                've': 'ゔぇ',
                'vo': 'ゔぉ',
                'vya': 'ゔゃ',
                'vyi': 'ゔぃ',
                'vyu': 'ゔゅ',
                'vye': 'ゔぇ',
                'vyo': 'ゔょ',
                'ka': 'か',
                'ki': 'き',
                'ku': 'く',
                'ke': 'け',
                'ko': 'こ',
                'lka': 'ヵ',
                'lke': 'ヶ',
                'xka': 'ヵ',
                'xke': 'ヶ',
                'kya': 'きゃ',
                'kyi': 'きぃ',
                'kyu': 'きゅ',
                'kye': 'きぇ',
                'kyo': 'きょ',
                'ca': 'か',
                'ci': 'き',
                'cu': 'く',
                'ce': 'け',
                'co': 'こ',
                'lca': 'ヵ',
                'lce': 'ヶ',
                'xca': 'ヵ',
                'xce': 'ヶ',
                'qya': 'くゃ',
                'qyu': 'くゅ',
                'qyo': 'くょ',
                'qwa': 'くぁ',
                'qwi': 'くぃ',
                'qwu': 'くぅ',
                'qwe': 'くぇ',
                'qwo': 'くぉ',
                'qa': 'くぁ',
                'qi': 'くぃ',
                'qe': 'くぇ',
                'qo': 'くぉ',
                'kwa': 'くぁ',
                'qyi': 'くぃ',
                'qye': 'くぇ',
                'ga': 'が',
                'gi': 'ぎ',
                'gu': 'ぐ',
                'ge': 'げ',
                'go': 'ご',
                'gya': 'ぎゃ',
                'gyi': 'ぎぃ',
                'gyu': 'ぎゅ',
                'gye': 'ぎぇ',
                'gyo': 'ぎょ',
                'gwa': 'ぐぁ',
                'gwi': 'ぐぃ',
                'gwu': 'ぐぅ',
                'gwe': 'ぐぇ',
                'gwo': 'ぐぉ',
                'sa': 'さ',
                'si': 'し',
                'shi': 'し',
                'su': 'す',
                'se': 'せ',
                'so': 'そ',
                'za': 'ざ',
                'zi': 'じ',
                'zu': 'ず',
                'ze': 'ぜ',
                'zo': 'ぞ',
                'ji': 'じ',
                'sya': 'しゃ',
                'syi': 'しぃ',
                'syu': 'しゅ',
                'sye': 'しぇ',
                'syo': 'しょ',
                'sha': 'しゃ',
                'shu': 'しゅ',
                'she': 'しぇ',
                'sho': 'しょ',
                'shya': 'しゃ', // 4 character code
                'shyu': 'しゅ', // 4 character code
                'shye': 'しぇ', // 4 character code
                'shyo': 'しょ', // 4 character code
                'swa': 'すぁ',
                'swi': 'すぃ',
                'swu': 'すぅ',
                'swe': 'すぇ',
                'swo': 'すぉ',
                'zya': 'じゃ',
                'zyi': 'じぃ',
                'zyu': 'じゅ',
                'zye': 'じぇ',
                'zyo': 'じょ',
                'ja': 'じゃ',
                'ju': 'じゅ',
                'je': 'じぇ',
                'jo': 'じょ',
                'jya': 'じゃ',
                'jyi': 'じぃ',
                'jyu': 'じゅ',
                'jye': 'じぇ',
                'jyo': 'じょ',
                'ta': 'た',
                'ti': 'ち',
                'tu': 'つ',
                'te': 'て',
                'to': 'と',
                'chi': 'ち',
                'tsu': 'つ',
                'ltu': 'っ',
                'xtu': 'っ',
                'tya': 'ちゃ',
                'tyi': 'ちぃ',
                'tyu': 'ちゅ',
                'tye': 'ちぇ',
                'tyo': 'ちょ',
                'cha': 'ちゃ',
                'chu': 'ちゅ',
                'che': 'ちぇ',
                'cho': 'ちょ',
                'cya': 'ちゃ',
                'cyi': 'ちぃ',
                'cyu': 'ちゅ',
                'cye': 'ちぇ',
                'cyo': 'ちょ',
                'chya': 'ちゃ', // 4 character code
                'chyu': 'ちゅ', // 4 character code
                'chye': 'ちぇ', // 4 character code
                'chyo': 'ちょ', // 4 character code
                'tsa': 'つぁ',
                'tsi': 'つぃ',
                'tse': 'つぇ',
                'tso': 'つぉ',
                'tha': 'てゃ',
                'thi': 'てぃ',
                'thu': 'てゅ',
                'the': 'てぇ',
                'tho': 'てょ',
                'twa': 'とぁ',
                'twi': 'とぃ',
                'twu': 'とぅ',
                'twe': 'とぇ',
                'two': 'とぉ',
                'da': 'だ',
                'di': 'ぢ',
                'du': 'づ',
                'de': 'で',
                'do': 'ど',
                'dya': 'ぢゃ',
                'dyi': 'ぢぃ',
                'dyu': 'ぢゅ',
                'dye': 'ぢぇ',
                'dyo': 'ぢょ',
                'dha': 'でゃ',
                'dhi': 'でぃ',
                'dhu': 'でゅ',
                'dhe': 'でぇ',
                'dho': 'でょ',
                'dwa': 'どぁ',
                'dwi': 'どぃ',
                'dwu': 'どぅ',
                'dwe': 'どぇ',
                'dwo': 'どぉ',
                'na': 'な',
                'ni': 'に',
                'nu': 'ぬ',
                'ne': 'ね',
                'no': 'の',
                'nya': 'にゃ',
                'nyi': 'にぃ',
                'nyu': 'にゅ',
                'nye': 'にぇ',
                'nyo': 'にょ',
                'ha': 'は',
                'hi': 'ひ',
                'hu': 'ふ',
                'he': 'へ',
                'ho': 'ほ',
                'fu': 'ふ',
                'hya': 'ひゃ',
                'hyi': 'ひぃ',
                'hyu': 'ひゅ',
                'hye': 'ひぇ',
                'hyo': 'ひょ',
                'fya': 'ふゃ',
                'fyu': 'ふゅ',
                'fyo': 'ふょ',
                'fwa': 'ふぁ',
                'fwi': 'ふぃ',
                'fwu': 'ふぅ',
                'fwe': 'ふぇ',
                'fwo': 'ふぉ',
                'fa': 'ふぁ',
                'fi': 'ふぃ',
                'fe': 'ふぇ',
                'fo': 'ふぉ',
                'fyi': 'ふぃ',
                'fye': 'ふぇ',
                'ba': 'ば',
                'bi': 'び',
                'bu': 'ぶ',
                'be': 'べ',
                'bo': 'ぼ',
                'bya': 'びゃ',
                'byi': 'びぃ',
                'byu': 'びゅ',
                'bye': 'びぇ',
                'byo': 'びょ',
                'pa': 'ぱ',
                'pi': 'ぴ',
                'pu': 'ぷ',
                'pe': 'ぺ',
                'po': 'ぽ',
                'pya': 'ぴゃ',
                'pyi': 'ぴぃ',
                'pyu': 'ぴゅ',
                'pye': 'ぴぇ',
                'pyo': 'ぴょ',
                'ma': 'ま',
                'mi': 'み',
                'mu': 'む',
                'me': 'め',
                'mo': 'も',
                'mya': 'みゃ',
                'myi': 'みぃ',
                'myu': 'みゅ',
                'mye': 'みぇ',
                'myo': 'みょ',
                'ya': 'や',
                'yu': 'ゆ',
                'yo': 'よ',
                'xya': 'ゃ',
                'xyu': 'ゅ',
                'xyo': 'ょ',
                'ra': 'ら',
                'ri': 'り',
                'ru': 'る',
                're': 'れ',
                'ro': 'ろ',
                'rya': 'りゃ',
                'ryi': 'りぃ',
                'ryu': 'りゅ',
                'rye': 'りぇ',
                'ryo': 'りょ',
                'la': 'ら',
                'li': 'り',
                'lu': 'る',
                'le': 'れ',
                'lo': 'ろ',
                'lya': 'りゃ',
                'lyi': 'りぃ',
                'lyu': 'りゅ',
                'lye': 'りぇ',
                'lyo': 'りょ',
                'wa': 'わ',
                'wo': 'を',
                'lwe': 'ゎ',
                'xwa': 'ゎ',
                //'n': 'ん',
                'nn': 'ん',
                'n\'': 'ん', // n' should equal single ん
                'n ': 'ん', // n + space
                'xn': 'ん',
                'ltsu': 'っ',  // 4 character code
              }
        }
    }

    isVowel = (char) =>{
        if(char.length == 1)
        {
            return /[aeiou]/.test(char);
        }
    }
    
    getChunk = (text,start,end) =>{
        return text.slice(start,end);
    }

    isCharJapanese = (char) => {
        let containsJapanese = char.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/);
        return containsJapanese;
    }
    
    toKana = (input) => {
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
                    chunk = this.getChunk(input,cursor,cursor+chunkSize);    
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
                    if(this.isCharJapanese(chunk.charAt(0))){
                        console.log(this.isCharJapanese(chunk.charAt(0)));
                        if(!this.isVowel(chunk.charAt(0)) && chunk.charAt(0) !== 'n'){
                        if(chunk.charAt(0) === chunk.charAt(1)){                       
                                chunkSize = 1;
                                chunk = 'っ';                          
                        }
                    }
                    }
                    
                    
                    kana = this.state.hiragana[chunk];
                    
                        
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

    onChange = (event) => {
        let state = {};
        state[event.target.name] = this.toKana(event.target.value);
        this.setState(state);
    }

    submit = (event) => {

    }

    render(){

        return(
            <Form id="kanji_answer">
                <Form.Field>
                    <label>Onyomi:</label>
                    <input type="text" name="onyomi" onChange={this.onChange} value={this.state.onyomi}/>
                </Form.Field>
                <Form.Field>
                    <label>Kunyomi:</label>
                    <input type="text" name="kunyomi" onChange={this.onChange} value={this.state.kunyomi}/>
                </Form.Field>
                <Form.Field>
                    <label>Onyomi:</label>
                    <input type="text" name="meaning" onChange={this.onChange} value={this.state.meaning}/>
                </Form.Field>
            </Form>
        )

    }

}