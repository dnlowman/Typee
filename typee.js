function typee(className, sentences, typeSpeed, sentenceChangeInterval, sentenceRemovalInterval) {
                if(typeof(className) === 'undefined') {
                    console.warn('Typee requires a className!');
                    return;
                }

                if(typeof(sentences) === 'undefined' || sentences.length === 0 || !Array.isArray(sentences)) {
                    console.warn('Typee requires at least one sentence!');
                    return;
                }
                sentenceChangeInterval = (typeof(sentenceChangeInterval) === 'undefined') ? 3000 : sentenceChangeInterval;
                sentenceRemovalInterval = (typeof(sentenceRemovalInterval) === 'undefined') ? 3000 : sentenceRemovalInterval;
                typeSpeed = (typeof(typeSpeed) === 'undefined') ? 200 : typeSpeed;
                var currentSentence = 0;
                var currentSentenceCharacter = 0;
                var displayText = '';

                var REMOVING_PAUSED = 0;
                var CHANGING_SENTENCE_PAUSED = 1;
                var REMOVING = 2;
                var TYPING = 3;
                var state = TYPING;

                setInterval(function() {
                    if(state === REMOVING_PAUSED || state === CHANGING_SENTENCE_PAUSED) return;
                    if(currentSentenceCharacter === sentences[currentSentence].length && state === TYPING) {
                        state = REMOVING_PAUSED;
                        setTimeout(function() {
                            isTyping = false;
                            state = REMOVING;
                        }, sentenceRemovalInterval);
                    }

                    if(currentSentenceCharacter === 0 && state === REMOVING) {
                        state = CHANGING_SENTENCE_PAUSED;
                        displayText = '';
                        currentSentence = (currentSentence === sentences.length - 1) ? 0 : ++currentSentence;
                        setTimeout(function() {
                            state = TYPING;
                        }, sentenceChangeInterval);
                    }

                    switch(state) {
                        case TYPING: {
                            displayText += sentences[currentSentence].slice(currentSentenceCharacter, currentSentenceCharacter + 1);
                            currentSentenceCharacter++;
                            break;
                        }

                        case REMOVING: {
                            displayText = sentences[currentSentence].slice(0, currentSentenceCharacter);
                            currentSentenceCharacter--;
                            break;
                        }
                    }
                    document.getElementsByClassName(className)[0].textContent = displayText;
                }, typeSpeed);
            }
