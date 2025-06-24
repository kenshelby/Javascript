function doSomething(callback) {
    setTimeout(() => {
      console.log("Step 1 done");
      callback("result1");
    }, 500);
  }
  
  function doSomethingElse(input, callback) {
    setTimeout(() => {
      console.log("Step 2 done with " + input);
      callback("result2");
    }, 500);
  }
  
  function doThirdThing(input, callback) {
    setTimeout(() => {
      console.log("Step 3 done with " + input);
      callback("result3");
    }, 500);
  }
  
  // Callback chaining (aka "callback hell")
  doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
      doThirdThing(result2, function(result3) {
        console.log('Final result: ' + result3);
      });
    });
  });