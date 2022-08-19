const btn = document.getElementById("submitButton");
const keyOutput = document.getElementById("keyOutput");
const cipherOutput = document.getElementById("cipherOutput");

btn.onclick = function encrypt(){
    const inputs = document.getElementById("plainText").value;
    let cipher = [];
    let encryptedText = [];
    let key = [];
    let strKey = [];
    
    for (const input of inputs){
        cipher.push(input.charCodeAt() - 96);
    }

    for (const chars of cipher){
        let keyVal = Math.floor(Math.random() * 25 + 1);
        key.push(keyVal);
        strKey.push(String.fromCharCode(97 + keyVal));
    }
    strKey = strKey.toString().replace(/,/g,'');

    for (let i = 0; i < cipher.length; i++){
        encryptedText.push(cipher[i] + key[i]);
    }
    
    for (let i = 0; i < encryptedText.length; i++){
        if (encryptedText[i] >= 26){
            encryptedText[i] -= 26;
        }
        if (encryptedText[i] < 0){
            encryptedText[i] += 64
        }
        encryptedText[i] = (String.fromCharCode(97 + encryptedText[i]));
    }
    encryptedText = encryptedText.toString().replace(/,/g,'');
    keyOutput.innerHTML = strKey;
    cipherOutput.innerHTML = encryptedText;

}

