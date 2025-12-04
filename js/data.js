const nextSlide = function() {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://affirmations.dev')}`)
        .then(response => {
        	if (response.ok) return response.json()
        	throw new Error('Network response was not ok.')
        })
        .then(data => {
            console.log(data.contents);
            setSlide(data.contents);
        });
}

const setSlide = (slideData) => {
    document.getElementById("slideTitle").innerHTML = "Daily Affirmation";
    let slideText = document.getElementById("slideText");
    slideText.innerHTML = slideData.affirmation;
}

document.getElementById("nextSlide").onclick = nextSlide;

nextSlide();
