function showMessage() {
    const msg = document.getElementById("secret-message");
    msg.classList.remove("hidden");
}
async function animateTextLoop() {
    const container = document.getElementById("loop-text");
    const text = container.textContent.trim();

    // เตรียม span ทีละตัว
    container.innerHTML = "";
    const spans = [...text].map(char => {
        const span = document.createElement("span");
        span.textContent = char;
        container.appendChild(span);
        return span;
    });

    while (true) {
        // แสดงทีละตัว
        for (let i = 0; i < spans.length; i++) {
            spans[i].classList.add("visible");
            await delay(100);
        }

        await delay(5000); // พัก 5 วิ

        // หายไปทีละตัว
        for (let i = spans.length - 1; i >= 0; i--) {
            spans[i].classList.remove("visible");
            await delay(100);
        }

        await delay(500); // เว้นนิดก่อนเริ่มรอบใหม่
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// เริ่มทำงานหลังโหลดหน้า
document.addEventListener("DOMContentLoaded", animateTextLoop);
