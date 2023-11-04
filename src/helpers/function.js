export const shorten = (title) => {
    const splitesTitle = title.split(' ');
    const newTilte = `${splitesTitle[0]} ${splitesTitle[1]}`
    return newTilte;
}