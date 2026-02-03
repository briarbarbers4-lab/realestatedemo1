import { useState, useEffect } from 'react';

interface TypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  loop?: boolean;
}

export function useTypewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  loop = true
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const currentPhrase = phrases[phraseIndex];
    const isLastPhrase = phraseIndex === phrases.length - 1;

    if (!isDeleting) {
      if (displayText === currentPhrase) {
        if (isLastPhrase && !loop) {
          setIsComplete(true);
          return;
        }

        if (!isLastPhrase) {
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenPhrases);
          return () => clearTimeout(timeout);
        }
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases, loop, isComplete]);

  return displayText;
}
