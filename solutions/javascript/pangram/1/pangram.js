export const isPangram = (string) => {
    let str = string.toLowerCase();
    let charactersPresent = new Set();
    [...str].forEach(char => { if ('a' <= char && char <= 'z') charactersPresent.add(char) });
    return charactersPresent.size === 26;
};
