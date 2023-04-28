class LetterNumber{

    constructor(strIn, offset){
        this.strIn = strIn;
        this.offset = offset;
    }

    strIntEncryption(){
        let strIn = this.strIn;
        let offset = this.offset;
        //control + alt + arrow up/down for doing multiple lines at once in vscode, save time on formatting the character set to an object
        let subMap = { ' ': 1, "a": 2, "b": 3, "c": 4, "d": 5, "e": 6, "f": 7, "g": 8, "h": 9, "i": 10, "j": 11, "k": 12, "l": 13, "m": 14, "n": 15, "o": 16, "p": 17, "q": 18, "r": 19, "s": 20, "t": 21, "u": 22, "v": 23, "w": 24, "x": 25, "y": 26, "z": 27, "A": 28, "B": 29, "C": 30, "D": 31, "E": 32, "F": 33, "G": 34, "H": 35, "I": 36, "J": 37, "K": 38, "L": 39, "M": 40, "N": 41, "O": 42, "P": 43, "Q": 44, "R": 45, "S": 46, "T": 47, "U": 48, "V": 49, "W": 50, "X": 51, "Y": 52, "Z": 53, "!": 54, "@": 55, "£": 56, "$": 57, "%": 58, "^": 59, "&": 60, "*": 61, "(": 62, ")": 63, "-": 64, "_": 65, "=": 66, "+": 67, "[": 68, "]": 69, "{": 70, "}": 71, ";": 72, ":": 73, "'": 74, '"': 75, "\\": 76, "|": 77, ",": 78, ".": 79, "<": 80, ">": 81, "/": 82, "?": 83, "`": 84, "~": 85, "§": 86, "±": 87, 1: 88, 2: 89, 3: 90, 4: 91, 5: 92, 6: 93, 7: 94, 8: 95, 9: 96, 0: 97, }
        let encryptedString = '';

        for (let i = 0; i < strIn.length; i++){
            //use mod to get the reminder of sum of the original translation and offset to get the reminder of what would be left
            //for example .. if the current value is 99(the highest to character ciphertext) and the offset is 1, then 99 + 1 == 100.
            // 100 / 100 = 1 with 0 as the reminder. So the value with the value of 99 would be offset to 0.
            let cipherNumber =( subMap[strIn[i]] + offset % 100);
            if (cipherNumber < 10){
                encryptedString += '0' + cipherNumber;
            } else {
                encryptedString += cipherNumber;
            }
            
        }   
        return encryptedString;
    }


}


let letter = new LetterNumber("Hi, Ed!", 302);
console.log(letter.strIntEncryption()); 