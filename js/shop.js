document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.shop-carousel');
    const videos = carousel.querySelectorAll('video');

    // เล่นวิดีโอที่อยู่ตรงกลางของ viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'scale(1)';
            } else {
                entry.target.pause();
                entry.target.style.opacity = 0.7;
                entry.target.style.transform = 'scale(0.9)';
            }
        });
    }, {
        root: carousel,
        threshold: 0.6
    });

    videos.forEach(video => observer.observe(video));
});
