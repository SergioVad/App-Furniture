export const Timer = ({ value }) => {
    // const [temp, setTemp] = useState(0);
    // setInterval(() => {
    //     setTemp((prevState) => prevState + 1);
    // }, 1000);
    let t = Date.parse(value) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 60 / 60) % 24),
        days = Math.floor(t / 1000 / 60 / 60 / 24);
    return `${days}: ${hours - 3}: ${minutes}: ${seconds}`;
};
