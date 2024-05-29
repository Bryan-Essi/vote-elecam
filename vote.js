var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')
// var paths = map.querySelectorAll('.map__image path')

var links = map.querySelectorAll('.map__list a')



function active_carte (id) {
    /* active sur la carte  */
    console.log(id , " : id dans la fonction active card");
    document.querySelector("#" + id).classList.add("a_active")

    /* active sur le texte  */
    console.log("#list-" + id , " : id dans la fonction active card");
    document.querySelector("#list-" + id).classList.add("a_active")
}

function inactive_carte (id) {
    /* desactive sur la carte  */
    document.querySelector("#" + id).classList.remove("a_active")

    /* desactive sur le texte  */
    document.querySelector("#list-" + id).classList.remove("a_active")
}

paths.forEach(element => {
    element.addEventListener('mouseenter', function() {
        active_carte(element.id);
    })
});

paths.forEach(element => {
    element.addEventListener('mouseleave', function() {
        inactive_carte(element.id);
    })
});

links.forEach(element => {
    element.addEventListener('mouseenter', function() {
        // console.log(typeof(element.id.substring(5, element.id.length)))
        active_carte(element.id.substring(5, element.id.length))
    })
});

links.forEach(element => {
    element.addEventListener('mouseleave', function() {
        inactive_carte(element.id.substring(5, element.id.length))
    })
});












// js des images defilantes
const observer = new IntersectionObserver((entries) => {
    console.log("entries : ", entries);
   entries.forEach((entry) => {
        // console.log("entry.isIntersecting : " , entry.isIntersecting);
      if (entry.isIntersecting) {
        // console.log("on a traverse la ligne en descendant");
        entry.target.classList.add("in-view")
        entry.target.classList.remove('not-in-view')
      } else {
        console.log("on a traverse la ligne en remontant");
        entry.target.classList.remove('in-view')
        entry.target.classList.add('not-in-view')
      }
   })
 },
 {
  rootMargin: "0px",
  threshold: [0, 0.1, 1],  
 },
)

const tags = document.querySelectorAll(".left img, .box > *,h1, h2, h3, .right > *")

tags.forEach((tag) => {
    observer.observe(tag)
})



//js du mode sombre
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
          icon.src = "image-elecam/lovepik-sun-png-image_401705442_wh1200-removebg-preview.png";
    }else{
          icon.src = "image-elecam/images-removebg-preview.png";
    }
}

// js swiper images
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const sliderButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    // Slide images according to the slide button clicks
    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = (imageList.clientWidth + 18 ) * direction ;
            console.log(scrollAmount);
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    
}

window.addEventListener("load", initSlider);



// counts number 
const counts = document.querySelectorAll('.count')
const speed = 350
counts.forEach((counter) => {
    function upData() {
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if (count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upData, 1)
        }else{
           counter.innerText = target
        }
    }
    upData()
});