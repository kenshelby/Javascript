async function myfunction(params) {
    console.log("inside async...");
    const result = await someFunction(); 
    console.log(result);
}

function someFunction(){
    console.log("b4 promise start")
    return new Promise((resolve, reject) => {
        //resolve("resolved immediately");
        setTimeout(()=>{resolve("resolved after 5 secs"), 1000})
        console.log("promise finished")
    })
    
}

myfunction();

/* if we dont use await, the promise will be pending if it is taking even 1 sec to solve
    incase it is solved immediately it will print the output.
    this happens due to the event loop.
    Anytime there is an async code, it will go to callback queue/ task queue.
    synchronous code will be inside of call stack
    once the sync task is done, it will move the async code inside the call stack and will be executed one by one.
    if the async task will take some time to execute for that reason we have to use the await keyword..
*/