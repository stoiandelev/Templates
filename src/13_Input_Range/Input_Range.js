let inputRange = document.querySelector("input"),
    lineProgress = document.querySelector(".line-progress"),
    counter = document.querySelector(".counter");

inputRange.addEventListener("input", () => {
    let value = inputRange.value;
    lineProgress.style.width = value + "%";
    counter.textContent = value * 2;
    counter.style.left = (value) + "%";
    counter.classList.add("show-coun");

    inputRange.onblur = function () {
        counter.classList.remove("show-coun");
    };
});

inputRange.addEventListener("click", () => {
    counter.classList.add("show-coun");
})

