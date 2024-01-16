document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dotContainer = document.querySelector(".dots-container");
    const totalSlides = slides.length;

    const updateSlidePosition = (current) => {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${current * 100}%)`;
        });
    };

    const updateDots = (current) => {
        const dots = dotContainer.children;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
            if (i === current) {
                dots[i].classList.add('active');
            }
        }
    };

    const createDots = () => {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlidePosition(i);
                updateDots(i);
            });
            dotContainer.appendChild(dot);
        }
    };

    createDots();
    updateDots(0); // Set the first dot as active

    // Optional: Automatic slide change
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition(currentSlide);
        updateDots(currentSlide);
    }, 5000); // Adjust time as needed
});
