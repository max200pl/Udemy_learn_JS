console.log("test start"); //! first executed 
setTimeout(() => { //! finally timer // the callback queue
    console.log('0 sec timer');
}, 0)

Promise.resolve('Resolved promise 1').then( //!thirds Executed first // this micro-tasks queue priority over the callback queue
    res => console.log(res)
)

Promise.resolve('Resolved promise 2').then(res => { // immediately resolve this task but he has a microtask;
    for (let i = 0; i < 1000000; i++) { }
    console.log(res);
})

console.log('Test end'); //! second executed


const lotteryPromise = new Promise(function (resolve, reject) { // get one parameter executer function

    console.log("lottery draw is happening");

    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve('You WIN'); // 
        } else {
            reject(new Error('Yoy lost your money'));
        }
    }, 2000);
})

lotteryPromise
    .then((res) => console.log(res))
    .catch(err => console.error(err))

// Promisified setTimeout 
const wait = function (second) {
    return new Promise(function (resolve) {
        setTimeout(resolve, second * 1000);
    })
}

wait(2).then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
}).then(() => console.log('I waited for 1 seconds'));