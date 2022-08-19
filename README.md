# About
This cipher was a small project I started in Python and transferred to Javascript. It's a pretty simple cipher that took only a few minutes to code up.

![image](https://user-images.githubusercontent.com/79621965/185628608-5910d49c-f974-4e0d-9a16-8d0c5afa2999.png)

# Process
To simplify the process, it functions as a *caeser cipher but for every character* in your text. However it does not work with numbers since I am lazy to create a code 
that works with numbers. 

**Encryption**

Using my exceptional drawing abilities, I have designed a diagram that visualizes how the encryption process works.

![whatthefuck](https://user-images.githubusercontent.com/79621965/185631064-9c3fd1ac-5afb-463c-b487-2b9cc45390db.png)

The user will input a plaintext and converted to lower case. A random integer key will be generated according to the length of the plaintext.
The plaintext will be converted into numbers according to the ASCII table with an offset of -96. **Spaces will turn into the letter a**. The key
will also turn into characters for ease of readability.

The now integer plaintext will have each index summed up with each index of the integer key. If the index is higher than 26, it will minus 26. The
result is an encrypted text that took me way too long to write.
