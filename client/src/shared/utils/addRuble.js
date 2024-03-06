export const addRuble = (val) => {
    let value = val.toString();
    switch (value.length) {
        case 4:
            return `${value.slice(0, 1)} ${value.slice(1)} ₽`;
        case 5:
            return `${value.slice(0, 2)} ${value.slice(2)} ₽`;
        case 6:
            return `${value.slice(0, 3)} ${value.slice(3)} ₽`;
        case 7:
            return `${value.slice(0, 1)} ${value.slice(1, 4)} ${value.slice(4)} ₽`;
        case 8:
            return `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)} ₽`;
        default:
            return value + ' ₽';
    }
};
