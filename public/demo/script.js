const panel = document.getElementById("carousel3D");

panel.addEventListener("mousemove", (e) => {
    const rect = panel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    panel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

panel.addEventListener("mouseleave", () => {
    panel.style.transform = "rotateX(0) rotateY(0)";
});

const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // create particles
    for (let i = 0; i < 2; i++) {
        particles.push({
            x: mouse.x,
            y: mouse.y,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
            life: 60
        });
    }
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, "rgba(99,102,241,0.8)"); // indigo
        gradient.addColorStop(1, "rgba(45,212,191,0)");   // cyan fade
        ctx.fillStyle = gradient;

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

/* ================================
   MAGNETIC HOVER EFFECT
================================ */
const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach(el => {
    el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0,0)";
    });
});


// ---------------------------------------------------------

const cards = document.querySelectorAll(".card");
const viewer = document.getElementById("cardViewer");
const viewerContent = viewer.querySelector(".viewer-content");
const backdrop = viewer.querySelector(".viewer-backdrop");

cards.forEach(card => {
  card.style.pointerEvents = "auto"; // enable clicks

  card.addEventListener("click", () => {
    // clone card image
    const img = card.querySelector("img").cloneNode();
    viewerContent.innerHTML = "";
    viewerContent.appendChild(img);

    viewer.classList.remove("hidden");
  });
});

// close viewer
backdrop.addEventListener("click", () => {
  viewer.classList.add("hidden");
  viewerContent.innerHTML = "";
});
