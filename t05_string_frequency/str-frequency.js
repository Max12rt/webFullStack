module.exports = class StrFrequency {
    constructor(input) {
        this.input = input.toLowerCase();
    }

    letterFrequencies() {
        const letterFrequency = {};
        const lettersOnly = this.input.replace(/[^a-z]/g, '');

        for (const letter of lettersOnly) {
            if (letterFrequency.hasOwnProperty(letter))
                letterFrequency[letter]++;
            else
                letterFrequency[letter] = 1;
        }

        return letterFrequency;
    }

    wordFrequencies() {
        const wordFrequency = {};
        const words = this.input.match(/\b\w+\b/g);

        if (!words)
            return wordFrequency;

        for (const word of words) {
            const wordLower = word.toLowerCase();
            if (wordFrequency.hasOwnProperty(wordLower))
                wordFrequency[wordLower]++;
            else
                wordFrequency[wordLower] = 1;
        }

        return wordFrequency;
    }

    reverseString() {
        return this.input.split('').reverse().join('');
    }
}
