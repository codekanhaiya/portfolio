// =========================== typing animation ====================
var typed = new Typed(".typing" ,{
    strings : ["Web Development" , "App Development","Software Development", "Anchoring"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ===================== Aside ======================
const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;

allSection = document.querySelectorAll(".section");
totalSection = allSection.length;



for(let i=0; i<totalNavList; i++){

    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        
        removeBackSection();
        for(let j=0; j<totalNavList; j++){

            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }

            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active")
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }

}

function addBackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element){

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");    
}



function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler");
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}


// =====Certificate======

 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 //for single image-// var img = document.getElementById("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");

 //for Expand image and Text
 function myCerti(imgs) {
   imgs.onclick = function () {
     modal.style.display = "block";
     modalImg.src = this.src;
     captionText.innerHTML = this.alt;
   }
 }


 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
   modal.style.display = "none";
 }