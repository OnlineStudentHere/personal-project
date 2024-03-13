


// created by online student .ie


// cards courses START ---------------------------------------------------------------------   
   let cards_courses = [

    { 
    image: "https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323524.jpg?w=996&t=st=1709468589~exp=1709469189~hmac=a0814fce69fc7f8d288e293a4ecb5cd3228bbe67e47e24c870743c253193ba03",
    course_descripton: "HTML",
    level: "Beginner",
    rate: "4.9",
    reviews: "(9,704 reviews)",
    skills: "HTML",
    video_hours: "28 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?w=996&t=st=1709468732~exp=1709469332~hmac=9b93c1bfd6a2893adbe9dd60486181a2979e5c5779ae09eeef0a42f115c6f89c",
    course_descripton: "JavaScript",
    level: "Middle",
    rate: "5.0",
    reviews: "(4,727 reviews)",
    skills: "JavaScript, TypeScript",
    video_hours: "60 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/website-setup-concept-landing-page_23-2148322849.jpg?w=996&t=st=1709474628~exp=1709475228~hmac=338c5c38f31322c6f4329216088c164fc43e42154afbcc34b14ecd57cb644e35 alt=",
    course_descripton: "PHP",
    level: "Advanced",
    rate: "5.0",
    reviews: "(3,524 reviews)",
    skills: "PHP, Laravel",
    video_hours: "35 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg?w=996&t=st=1709474486~exp=1709475086~hmac=1e012fd68e79ef255117c1ffccfc3b9691aeb7ddb065afc043a7f0d27cae945c",
    course_descripton: "React",
    level: "Advanced",
    rate: "4.4",
    reviews: "(5,028 reviews)",
    skills: "React, React Native",
    video_hours: "40.5 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?w=996&t=st=1709469233~exp=1709469833~hmac=83c7c93a5a249a53dc12f7eb803c209cfe738c077353e826782a429ffa6a3ed6",
    course_descripton: "Angular",
    level: "Advanced",
    rate: "4.8",
    reviews: "(7,454 reviews)",
    skills: "Angular",
    video_hours: "47.5 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-7425.jpg?w=996&t=st=1709474659~exp=1709475259~hmac=443d055fc091a697758147030fbecf71281ec60b1223a30f5d0a0d4056f10adb",
    course_descripton: "CSS",
    level: "Beginner",
    rate: "4.9",
    reviews: "(18,534 reviews)",
    skills: "CSS 3",
    video_hours: "26.5 total hours"
     },

    { 
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149262964.jpg?w=996&t=st=1709474646~exp=1709475246~hmac=0424a7ce4d779fb1392669bc56b2685835c7193f611cf232aae5cfe0fffe569f",
    course_descripton: "Node.js",
    level: "Advanced",
    rate: "4.5",
    reviews: "(2,891 reviews)",
    skills: "Node.js",
    video_hours: "25.5 total hours"
     }
   ];


   const grid_layout = document.querySelector('.grid-layout-section-3');

   cards_courses.forEach(card => {
    let element = document.createElement('div');
    element.innerHTML = `
    <div class="card-wrapper">
    <div class="image-wrapper">
       <img class="im" src="${card.image}" alt="card">
    </div>
<div class="card-content-wrapper">
    <h3>${card.course_descripton}</h3>
    <h5>${card.level}</h5>
<div class="indicators"> 
   <div class="from-1to5"> ${card.rate}</div> 
    <span class="starts-ranking">  
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
   </span>
   <span class="total-students">${card.reviews}</span>
</div>
<div class="skills-description-wrapper">
   <span>skills you will gain:</span>
   <span> ${card.skills}, DataBase Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolore impedit deserunt magnam omnis tempora.</span>
</div>
   <div class="hours-of-videos">${card.video_hours}</div>
</div>
</div>
   `;
   
    grid_layout.insertAdjacentHTML('beforeend', element.outerHTML);
   });

   // cards courses END ----------------------------------------------------------------





   // Slider start -----------------------------------------------------------------------------

function sliderImages() {
    const imageHTML = `
    <div class="images-wrapper-2">

        <p id="image-2">
        I like this Site very mach.
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br>
         Coupti ducimus perferendis molestiae iure, sint est suscipit, iste
         <br>
        voluptates voluptatum cupiditate modi unde ipsam adipisicing elit.
        <br>
        cbasdhibcgihsadbc bciacgiagbcigaic hcuaghcugascgc
        <br>
        voluptates voluptatum cupiditate modi unde ipsam quidem eum.
        <br>
        -Mike Wood-
         </p>


        <p id="image-2">
        This was my first experience in programming.
        <br>
        lorem ipsum dolor sit amet adipisicing elit modi ipsum dolor iowejnfnn 
        <br>
        Ipsum dolor sit amet consectetur adipisicing eli ipsum dolor
        <br>
        voluptatum cupiditate ipsum dolor iowejnfnn consectetur adipisicing elit
        <br>
        olor sit  consectetur adipisicing elit ipsum dolor ipsum dolor
        <br>
        ipsum dolor ipsum dolor sit amet consectetur sit amet consectetur
        <br>
        sit amet consectetur elit modi ipsum dolor elit modi ipsum dolor elit modi
        <br>
        -Jessica Flower-
        </p>


        <p id="image-2">
        Courses are very informative.
        <br>
        Ddipisicing elit.  Lorem ipsum dolor sit amet consectetur amet consectetur 
        <br>
        pisicing elit.  Lorem ipsum dolor sit amet consectetur 
        <br>
        orem ipsum dolor sit amet iowejnfnn consectetur adipisicing elit.
        <br>
        Ddipisicing elit.  Lorem dolor sit amet consectetur 
        <br>
        Lorem ipsum dolor sit amet iowejnfnn consectetur adipisicing elit.
        <br>
        -Den Power-
        </p>

    </div>
    `;
 
    const wrapper_slider = document.querySelector('.wrapper-slider-2')
    wrapper_slider.insertAdjacentHTML('afterbegin', imageHTML);
}
sliderImages();

const btn_left_2 = document.querySelector('.btn-left-2');
const btn_right_2 = document.querySelector('.btn-right-2');
var id_images_2 = Array.from(document.querySelectorAll('#image-2'));

id_images_2 = id_images_2.length;
// console.log(id_images_2)

let currentPhoto = 1;
let timeout_delay;

// button right
btn_right_2.addEventListener("click", () => {
    currentPhoto++;
    clearTimeout(timeout_delay);
    newPhoto();
  });
  
  // button left
  btn_left_2.addEventListener("click", () => {
    currentPhoto--;
    clearTimeout(timeout_delay);
    newPhoto();
  });



  const images_wrapper_2 = document.querySelector(".images-wrapper-2");
  const newPhoto = () => {
    if (currentPhoto > id_images_2) {
      currentPhoto = 1;
    } 
    else if (currentPhoto < 1) {
      currentPhoto = id_images_2;
    }
    images_wrapper_2.style.transform = `translateX(-${(currentPhoto - 1) * 800}px)`;
  
    timeout_delay = setTimeout(() => {
      currentPhoto++;
      newPhoto();
    }, 4000);
  }
  newPhoto();
//------ Slider 2 END -------------------------------------------------------



