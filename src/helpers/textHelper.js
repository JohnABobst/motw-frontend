export const slowDisplayText = (text, setText) => {
    const words = text.split(' ');
    let currentIndex = 0;
    const displayInterval = setInterval(() => {
        if (currentIndex <= words.length) {
            setText(words.slice(0, currentIndex).join(' '));
            currentIndex++;
        } else {
            clearInterval(displayInterval);
        }
    }, 100); // Adjust typing speed here (milliseconds per word)
};