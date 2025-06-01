// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

function playClickSound() {
  const e = document.getElementById("clickSound");
  e.currentTime = 0;
  e.play().catch((e) => console.log("Audio playback failed:", e));
}

const image = document.getElementById("dynamicImage"),
  glowLayer = document.getElementById("glowLayer");

image.addEventListener("mousemove", (e) => {
  const t = image.getBoundingClientRect(),
    n = e.clientX - t.left - t.width / 2,
    o = e.clientY - t.top - t.height / 2,
    i = 20,
    r = 30,
    a = 10,
    l = 15;
  const s = -(n / t.width) * i,
    d = (o / t.height) * i,
    c = -(n / t.width) * r,
    u = -(n / t.width) * a,
    f = (o / t.height) * a,
    m = -(n / t.width) * l;
  image.style.transform = `perspective(1000px) skewX(${s}deg) skewY(${d}deg) rotateY(${c}deg)`;
  glowLayer.style.transform = `perspective(1000px) skewX(${u}deg) skewY(${f}deg) rotateY(${m}deg)`;
});

image.addEventListener("mouseleave", () => {
  image.style.transform = "perspective(1000px) skewX(0deg) skewY(0deg) rotateY(0deg)";
  glowLayer.style.transform = "perspective(1000px) skewX(0deg) skewY(0deg) rotateY(0deg)";
});
