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
        },
        {
            "title": "New Slide",
            "text": "New Text",
            "size": "lrg"
        }
    ]
}
var slideIdx = -1;
const nextSlide = function() {
    //if (++slideIdx > SLIDES.data.length-1) {
    //    slideIdx = 0;
    //}
    //console.log(SLIDES.data[slideIdx]);
    //setSlide(SLIDES.data[slideIdx]);
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.affirmations.dev')}`)
        .then(response => {
        	if (response.ok) return response.json()
        	throw new Error('Network response was not ok.')
        })
        .then(data => setSlide(data.contents));
}

const setSlide = (slideData) => {
    document.getElementById("slideTitle").innerHTML = "Daily Affirmation";
    let slideText = document.getElementById("slideText");
    slideText.innerHTML = slideData.affirmation;
}

document.getElementById("nextSlide").onclick = nextSlide;

nextSlide();
