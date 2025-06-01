const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

  gsap.to("#header", {x:30, y: 50, ease:"bounce",delay: .5,  duration: 2.5})
  

function startTimer() {
    const minute = Number(document.querySelector("#minute").value);
    const second = Number(document.querySelector("#second").value);
    let calculateSecond = (minute * 60) + second;

    function calculateTime() {
        const countdown = document.querySelector("#countdown");
        let min = Math.floor(calculateSecond/60);
        let sec = calculateSecond%60;
        calculateSecond--;

        if (sec < 10) {
            sec = "0" + sec;
        }
       
        countdown.textContent = `${min} : ${sec}`;
        if (calculateSecond < 0) {
            stopTimer();
            calculateSecond = 0;
        }

        function stopTimer() {
            clearInterval(timerId);
            document.querySelector("#audio").play();
        }
    }
    let timerId = setInterval(calculateTime, 1000);
}

 const btn = document.querySelector("#btn");
 btn.addEventListener("click", function() {
    startTimer();
 })