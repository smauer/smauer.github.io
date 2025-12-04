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
    fetch('https://www.affirmations.dev')
      .then(response => {
        // Check if the response was successful (e.g., status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response body as JSON
        setSlide(response.json());
      })
      .then(data => {
        console.log(data); // Process the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors
      });
    
    
}

const setSlide = (slideData) => {
    document.getElementById("slideTitle").innerHTML = "Daily Affirmation";
    let slideText = document.getElementById("slideText");
    slideText.innerHTML = slideData.affirmation;
}

document.getElementById("nextSlide").onclick = nextSlide;

nextSlide();
