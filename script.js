"use strict";

window.addEventListener("load", (e) => {
  const [h, m, s] = [4, 51, 16];

  let updateZeroTime = (number) => {
    if (number < 10) {
      return "0" + number;
    } else if (number <= 0) {
      return "00";
    } else {
      return number.toString();
    }
  };

  function startTimer() {
    const nowTime = new Date();
    let stopTime;
    stopTime = nowTime.setHours(nowTime.getHours() + h);
    stopTime = nowTime.setMinutes(nowTime.getMinutes() + m);
    stopTime = nowTime.setSeconds(nowTime.getSeconds() + s);

    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const remain = stopTime - now;
      let hour = Math.floor((remain / (1000 * 60 * 60)) % 24);
      let min = Math.floor((remain / 1000 / 60) % 60);
      let sec = Math.floor((remain / 1000) % 60);

      hour = updateZeroTime(hour);
      min = updateZeroTime(min);
      sec = updateZeroTime(sec);

      document.getElementById("timer").innerText = `${hour}:${min}:${sec}`;

      if (remain < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerText = "00:00:00";
      }
    }, 1000);
  }
  startTimer();

  let itemImage = document.getElementById("itemImage");
  let colorsVariant = document.querySelectorAll(".colors__variant");

  colorsVariant.forEach((item) => {
    item.addEventListener("click", (e) => {
      itemImage.style.backgroundImage = e.target.style.backgroundImage;
    });
  });
});
