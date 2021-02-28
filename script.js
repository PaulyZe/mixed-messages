const messageThemes = {
    _stonk: ['$gme', '$btc', '$amc', '$tsla'],
    _color: ['yellow', 'green', 'black', 'red'],
    _action: ['drive to the moon', ' flex on the clowns', 'crash it because you\'re rich and can buy another']
};

const randomString = (array) => {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
};

const randomMessage = () => {
    return `Invest in ${randomString(messageThemes._stonk)}, it is going to the MOON and you want the tendies! Then, buy a ${randomString(messageThemes._color)} lambo and ${randomString(messageThemes._action)}!`
};

console.log(randomMessage());