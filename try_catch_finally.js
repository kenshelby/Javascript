try {
    console.log(hello)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("inside finally")
}

/*
finally will always run regardless of the error.
why we need finally is in case when we get an error inside of catch block
we can exit the file
close the loop
log file
*/

const myfunction = () =>{
    try {
        let a = 0;
        console.log(abc);
        return //even if we use return the finally block will be executed...
    } catch (error) {       
         console.log("inside catch")
         console.log(undefined_var) //this will throw an error...
    }
    finally{
        console.log("inside finally block")
    }
}