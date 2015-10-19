Typee
===================

![enter image description here](https://camo.githubusercontent.com/ff66b183730d39a5fb69af040e7b777ae1917761/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f732f356733746172727874747a3038696f2f74797065652e676966)

Typee is a function to display typewriter style text in the browser. Typee is currently not a module and is simply enabled by invoking 

typee(className, sentences, typeSpeed, sentenceChangeInterval, sentenceRemovalInterval)

**className (string)** = The DOM element with the specified className to Typeeify.
**sentences (Array[string])** = The array of sentences to display.
**typeSpeed (number)** = The amount of time typee should wait before typing a character.
**sentenceChangeInterval (number)** = The amount of time typee should wait before writing the next sentence.
sentenceRemovalInterval = The amount of time typee should wait before removing the current sentence.
