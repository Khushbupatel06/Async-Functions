async function hi() {  
}

const birds = async () => {
    return 'first name, Last name'
}

birds()
    .then((data) =>{
        console.log("Promise resolved with:", data);
    })
    .catch(err => {
        console.log("Oh no, Promise rejected");
        console.log(err);
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}
login('dkneisn', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged in");
        console.log(msg);
    })
    .catch(err => {
        console.log("Error!!!");
        console.log(err);
    })

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}
        
delayedColorChange('pink', 1000)
    .then(() => delayedColorChange('teal', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('red', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
    .then(() => delayedColorChange('white', 1000))

async function rainbow() {
    await delayedColorChange('pink', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('teal', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('red', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('violet', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('white', 1000)
    return "All Done!!"
}

rainbow().then(() => console.log("End of the Rainbow...."))

async function printRainbow() {
    await rainbow();
    console.log("End of the Rainbow....");
}

printRainbow();

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
        let data3 = await fakeRequestPromise('/page3');
        console.log(data3);
    } catch (e) {
        console.log("caught an error...")
        console.log("error is:", e)
    } 
}
