function showMessage() {
    const msg = document.getElementById("secret-message");
    msg.classList.remove("hidden");
}

async function animateTextLoop() {
    const container = document.getElementById("loop-text");
    const text = container.textContent.trim();

    container.innerHTML = "";
    const spans = [...text].map(char => {
        const span = document.createElement("span");
        span.textContent = char;
        container.appendChild(span);
        return span;
    });

    while (true) {
        for (let i = 0; i < spans.length; i++) {
            spans[i].classList.add("visible");
            await delay(100);
        }

        await delay(5000);

        for (let i = spans.length - 1; i >= 0; i--) {
            spans[i].classList.remove("visible");
            await delay(100);
        }

        await delay(500);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    animateTextLoop();
    updateCarousel();
});

let currentIndex = 0;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const total = items.length;

    items.forEach((item, index) => {
        const relativeIndex = (index - currentIndex + total) % total;

        // ปรับตำแหน่งแบบหมุนวน
        let offset = relativeIndex;
        if (relativeIndex > total / 2) {
            offset = relativeIndex - total;
        }

        const position = offset * 320; // ระยะห่างระหว่างวิดีโอ (รวม margin)
        item.style.transform = `translateX(${position}px) scale(${offset === 0 ? 1 : 0.8})`;
        item.style.opacity = offset === 0 ? 1 : 0.5;
        item.style.zIndex = offset === 0 ? 10 : 1;

        item.classList.remove('active');
        item.pause();
        item.currentTime = 0;

        if (offset === 0) {
            item.classList.add('active');
            item.play();
        }
    });
}



function prevVideo() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function nextVideo() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}
