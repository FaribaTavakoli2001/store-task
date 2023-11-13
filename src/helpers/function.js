const shorten = (title) => {
    const splitesTitle = title.split(' ');
    const newTilte = `${splitesTitle[0]} ${splitesTitle[1]}`
    return newTilte;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

export { shorten, isInCart };