//Check if input is vowel
export const isCharVowel = (char) => {
    if(char.length == 1){
            return /[aeiou]/.test(char);
    }
}

//Check if input is japanese
// 3000-303F : punctuation
// 3040-309F : hiragana
// 30A0-30FF : katakana
// FF00-FFEF : Full-width roman + half-width katakana
// 4E00-9FAF : Common and uncommon kanji
export const isCharJapanese = (char) => {
    let containsJapanese = char.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/);
    return containsJapanese;
} 