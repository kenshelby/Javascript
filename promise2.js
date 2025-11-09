// Problem:

// You have an array of users, and each user has a fetchScore() function that returns a promise resolving to a number (the user’s score). Some of the fetchScore() promises may reject.

// Write code to:

// Fetch all user scores in parallel.

// If any promise rejects, catch the error and log "Error fetching scores: <error message>".

// If all promises succeed, calculate the total sum of all scores using reduce().

// Use an initial value in reduce().

// Finally, log "Operation complete" in a finally block.


const users = [
    { name: "Alice", fetchScore: () => Promise.resolve(10) },
    { name: "Bob", fetchScore: () => Promise.resolve(20) },
    { name: "Charlie", fetchScore: () => Promise.resolve(30) },
  ];
  
  function calculateTotalScores(users) {
      Promise.all([users[0].fetchScore(), users[1].fetchScore(), users[2].fetchScore()])
         .then( output => {
                    const score = output.reduce((acc, ele) => acc + ele, 0); 
                    console.log(score)
                }
            )
         .catch(error => console.log("error : ", error))
         .finally(() => console.log("operation succesful"))
  } 
  
  calculateTotalScores(users);

 //********* */ users.map(u => u.fetchScore())