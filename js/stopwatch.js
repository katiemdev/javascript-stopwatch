function Stopwatch(elem) {
    //private variables
    let time = 0
    let interval;
    let offset;

    //private functions
    function update() { //this function will run every 10 seconds. Adds amount of time passed to time variable.
        if(this.isOn) {
        time += delta();
        }
        let formattedTime = timeFormatter(time);
        elem.textContent = formattedTime;
    }

    function delta() { 
        let now = Date.now();
        let timePassed = now - offset
        offset = now //offset is originally defined as Date.now() in the start() function below. However, after the first run, we don't want it to use that original offset, so we make it equal now, so that it calculates the amount of time that's passed correctly.
        return timePassed
    }

    function timeFormatter(timeInMilliseconds) {
        let time = new Date(timeInMilliseconds) // different to private time variable
        let minutes = time.getMinutes().toString()
        let seconds = time.getSeconds().toString()
        let mSeconds = time.getMilliseconds().toString()

        if(minutes.length < 2) {
            minutes = '0' + minutes
        }
        if(seconds.length < 2) {
            seconds = '0' + seconds
        }
       
        while(mSeconds.length < 3) {
            mSeconds = '0' + mSeconds
        }

        document.getElementById('t1').innerText = minutes
        document.getElementById('t2').innerText = seconds
        document.getElementById('t3').innerText = mSeconds
    }

    this.isOn = false

    this.start = function() {
        if(!this.isOn) {
            interval = setInterval(update.bind(this), 10) //'this' on set interval points to the window object. Using update.bind, we can make this point back to our stopwatch object/
            offset = Date.now()
            this.isOn = true;
        }
     }

    this.stop = function() {
        if(this.isOn) {
            clearInterval(interval)
            interval = null;
            this.isOn = false;
        }
    }

    this.reset = function() {
        if(!this.isOn) {
        time = 0
        update()
        }
    }
}
