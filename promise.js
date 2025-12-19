const loadScript = (src) => {
     return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            alert("loaded")
            resolve("resolved promise")
        }

        script.onerror = () => {
            alert("there was an error!!")
            reject("Promise rejected")
        }
     })
}


let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js");
p1.then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>

let p11  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("p11 solved")
    }, 1000)
})

let p2  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("p2 solved")
    }, 2000)
})

let p3  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("p3 solved")
    }, 3000)
})

async function prom_func(params) {
    let a1 = p11;
    let a2 = p2;
    let a3 = p3;
    let res = await Promise.all([p11, p2, p3]);
    console.log(res);
}

prom_func();

// response@@@@@@@

function p11() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p11 solved");
      }, 1000);
    });
  }
  
  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 solved");
      }, 2000);
    });
  }
  
  function p3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 solved");
      }, 3000);
    });
  }
  
  async function prom_func() {
    // Call the functions to get promises
    const res = await Promise.all([p11(), p2(), p3()]);
    console.log(res); // ["p11 solved", "p2 solved", "p3 solved"]
  }
  
  prom_func();
  