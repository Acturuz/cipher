const encryptBtn = document.getElementById("encryptButton");
const keyOutput = document.getElementById("keyOutput");
const cipherOutput = document.getElementById("cipherOutput");

const decryptBtn = document.getElementById("decryptBtn");
const plainTextOutput = document.getElementById("plainTextOutput");


// Encryption
encryptBtn.onclick = function encrypt(){
    const inputs = document.getElementById("plainText").value.toLowerCase().replace(/ /g, ",");
    let cipher = [];
    let encryptedText = [];
    let key = [];
    let strKey = [];
    // Changes input into ASCII codes with a -96 offset (eg: a -> 97 -> 1)
    for (const input of inputs){
        cipher.push(input.charCodeAt() - 96);
    } 
    // Key generation
    for (const chars of cipher){
        let keyVal = Math.floor(Math.random() * 25 + 1);    // Creates random number from 1 - 25 
        key.push(keyVal);                                   // Number goes into an array (key)
        strKey.push(String.fromCharCode(96 + keyVal));      // Number gets converted into characters and added into a string key
    }
    strKey = strKey.toString().replace(/,/g,'');
    // Actual encryption starts
    for (let i = 0; i < cipher.length; i++){
        encryptedText.push(cipher[i] + key[i]);             // Sum of cipher array and key array
    }
    
    for (let i = 0; i < encryptedText.length; i++){
            if (encryptedText[i] > 26){
                encryptedText[i] -= 26;
            }
        console.log(`Ciphered code: ${encryptedText}\nKey: ${key}`);
        encryptedText[i] = (String.fromCharCode(96 + encryptedText[i]));    // Converts number to chars
    }
    
    
    encryptedText = encryptedText.toString().replace(/,/g,'');
    keyOutput.innerHTML = strKey;
    cipherOutput.innerHTML = encryptedText;

}
// Decryption
decryptBtn.onclick = function decrypt(){
    cipherInput = document.getElementById("cipherText").value;
    keyInput = document.getElementById("keyText").value;

    let key = [];
    let cipher = [];
    let plainText = [];
    // Changes input into ASCII codes with a -96 offset (eg: a -> 97 -> 1) 
    for (const input of cipherInput){
        cipher.push(input.charCodeAt() - 96);
    }
    // Changes key into ASCII codes with a -96 offset
    for (const keys of keyInput){
        key.push(keys.charCodeAt() - 96);
    }
    // Actual decryption begins
    for (let i = 0; i < cipher.length; i++){
            plainText.push(cipher[i] - key[i])
    }
    // Conditions for decryption
    for (let i = 0; i < plainText.length; i++){
            if (plainText[i] > 26){
                plainText[i] -= 26;
            }
            if (plainText[i] <= 0){
                plainText[i] += 26;
            }
        plainText[i] = (String.fromCharCode(96 + plainText[i])) 
        if (plainText[i] == "F"){   // For spaces (need fixing)
            plainText[i] = " ";
        }
    }
    console.log(plainText)
    plainText = plainText.toString().replace(/,/g,'');
    plainTextOutput.innerHTML = plainText;
}