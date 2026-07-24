const time = document.querySelector("#time");

const updateTime = () => {
  if (!time) return;
  time.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

updateTime();
setInterval(updateTime, 1000);
