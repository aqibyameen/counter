 const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        let timer;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        function formatTime() {
            let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }

        function startTimer() {
            timer = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                display.textContent = formatTime();
            }, 1000);
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }

        function stopTimer() {
            clearInterval(timer);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }

        function resetTimer() {
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
            hours = 0;
            display.textContent = formatTime();
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }

        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);
