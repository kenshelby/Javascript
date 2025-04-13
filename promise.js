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