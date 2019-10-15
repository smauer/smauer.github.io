var SLIDES = {
    "data": [
        {
            "title": "Slide 1",
            "text": "Can I get this working?",
            "size": "lrg"
        },
        {
            "title": "Slide 2",
            "text": "And then this one?",
            "size": "std"
        },
        {
            "title": "Slide 3",
            "text": "Third slide!",
            "size": "lrg"
        }
    ]
}
var slideIdx = -1;
const nextSlide = function() {
    if (++slideIdx > SLIDES.data.length-1) {
        slideIdx = 0;
    }
    console.log(SLIDES.data[slideIdx]);
    setSlide(SLIDES.data[slideIdx]);
}

const setSlide = (slideData) => {
    document.getElementById("slideTitle").innerHTML = slideData.title;
    let slideText = document.getElementById("slideText");
    slideText.innerHTML = slideData.text;
    slideText.classList = "";
    slideText.classList.add(slideData.size);
}

document.getElementById("nextSlide").onclick = nextSlide;