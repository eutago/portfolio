/* --------------- Skills Progress Bar Animation --------------- */

const firstSkill = document.querySelector(".skill");
const skCounters = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".skill svg circle");

window.addEventListener("scroll", () => {
  if (!skillsPlayed) skillsCounter();
});

const hasReached = (element) => {
  let topPosition = element.getBoundingClientRect().top;

  if (window.innerHeight >= topPosition + element.offsetHeight) return true;
  return false;
};

const updateCount = (num, maxNum) => {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
};

let skillsPlayed = false;

const skillsCounter = () => {
  if (!hasReached(firstSkill)) return;

  skillsPlayed = true;

  skCounters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 628 - 628 * (target / 100);

    progressBars[i].style.setProperty("--target", strokeValue);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  progressBars.forEach(
    (p) => (p.style.animation = "progress 2000ms ease-in-out forwards"),
  );
};
