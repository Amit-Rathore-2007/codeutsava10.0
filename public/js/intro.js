let enterHero = document.querySelector(".intro-container .intro-content .intro-button");
let heroContainer = document.querySelector(".hero-container");
let introContainer = document.querySelector(".intro-container");
let introToHero = document.querySelector(".intro-to-hero");

enterHero.addEventListener("click",e => {
    introToHero.style.animationPlayState = "running";
    setTimeout(() => {
        if (!introContainer.classList.contains("dis-none"))
            introContainer.classList.add("dis-none");
        heroContainer.classList.remove("dis-none");
    },3700)
})

const runner = document.querySelector(".naruto-runner");
const items = document.querySelectorAll(".timeline-item");

function updateTimeline() {

    const runnerRect =
        runner.getBoundingClientRect();

    const runnerCenter =
        runnerRect.top + runnerRect.height / 2;


    items.forEach(item => {

        const dot =
            item.querySelector(".dot");

        const dotRect =
            dot.getBoundingClientRect();

        const dotCenter =
            dotRect.top + dotRect.height / 2;


        if (runnerCenter >= dotCenter) {
            
            item.classList.add("timeline-item-active");

        }

    });

    requestAnimationFrame(updateTimeline);
}

const wallTimeline = document.querySelector(".timeline-wall")

runner.addEventListener("animationstart", e => {
    updateTimeline();
});

runner.addEventListener("animationend", e => {
    e.target.src = "/assets/part1-1.gif";
    setTimeout(() => {
        wallTimeline.src = "/assets/part2-2.gif"
    },2800);
});

const timelineItems = document.querySelectorAll(
    ".naruto-timeline .timeline .timeline-item"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runner.style.animationPlayState = "running";
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

timelineItems.forEach(item => {
    observer.observe(item);
});

const track = document.querySelector(".all-sponsors");
const firstSet = track.querySelector(".sponsor-set1");

let position = 0;
const speed = 1;

function moveSponsors() {

    position -= speed;

    if (-position >= firstSet.offsetWidth) {
        position += firstSet.offsetWidth;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(moveSponsors);
}

moveSponsors();


const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        // Close other FAQs
        document.querySelectorAll(".faq-item").forEach(faq => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });

        // Toggle current FAQ
        item.classList.toggle("active");

    });

});