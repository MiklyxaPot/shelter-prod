(() => {
   "use strict";
   function isWebp() {
      function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
               callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }
      testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
      }));
   }
   let addWindowScrollEvent = false;
   setTimeout((() => {
      if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
               document.dispatchEvent(windowScroll);
            }));
      }
   }), 0);
   window["FLS"] = true;
   isWebp();


   
})();

console.log("1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n 2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14.\n 3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n");
console.log("1.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 2. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 3. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6.\n ");
console.log("1.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 2. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n 3. Верстка обеих страниц валидная: +8.\n ");

window.addEventListener("DOMContentLoaded", (() => {

   const iconBurger = document.querySelector(".menu__icon"),
   menuItem = document.querySelectorAll(".menu__item"), 
    list = document.getElementById('list'),
    button = document.getElementById('buttom'),
   menu = document.querySelector(".menu__list");

   // document.onclick = function(e){
   //    if(e.target.id !== 'list' && e.target.id !== 'button'){
   //       menu.classList.remove("menu__list-open");
   //       iconBurger.classList.remove("icon-menu__open");
   //       document.body.style.overflow = "unset";
         
   //    }
   // };
   const closeBurger = () =>{
      menu.classList.remove("menu__list-open");
      iconBurger.classList.remove("icon-menu__open");
      document.body.style.overflow = "unset";
   };

   
   iconBurger.addEventListener("click", (() => {
      if (menu.classList.contains("menu__list-open")) {
         closeBurger();
      } else {
         menu.classList.add("menu__list-open");
         iconBurger.classList.add("icon-menu__open");
         document.body.style.overflow = "hidden";
      }
   }));
   menuItem.forEach((item => {
      item.addEventListener("click", (() => {
         closeBurger();
      }));
   }));
// document.addEventListener('click', (e) =>{
//       if(e.target.id !== list && e.target.id !== button){
//          console.log('kjk');
         
//       }
// })


   // **********slider********
   const prev = document.querySelector(".pets__prew"), 
   next = document.querySelector(".pets__next"), 
   sliders = document.querySelector(".pets__slider"),
   nextNav = document.querySelector(".pets__navigation-next"), 
   prevNav = document.querySelector(".pets__navigation-prew");

   let randomNum;
   function getRandomNum(min = 2, max = 7) {
      min = Math.ceil(min);
      max = Math.floor(max);
       randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   getRandomNum();


 function getSliders() {
      let data =  [{
         "id": "01",
         "name": "Jennifer",
         "img": "img/pets/pets-jennifer.png",
         "type": "Dog",
         "breed": "Labrador",
         "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
         "age": "2 months",
         "inoculations": ["none"],
         "diseases": ["none"],
         "parasites": ["none"]
       },
       {
         "id": "02",
         "name": "Sophia",
         "img": "img/pets/pets-sophia.jpg",
         "type": "Dog",
         "breed": "Shih tzu",
         "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
         "age": "1 month",
         "inoculations": ["parvovirus"],
         "diseases": ["none"],
         "parasites": ["none"]
       },
       {
         "id": "03",
         "name": "Woody",
         "img": "img/pets/pets-woody.png",
         "type": "Dog",
         "breed": "Golden Retriever",
         "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
         "age": "3 years 6 months",
         "inoculations": ["adenovirus", "distemper"],
         "diseases": ["right back leg mobility reduced"],
         "parasites": ["none"]
       },
       {
         "id": "04",
         "name": "Scarlett",
         "img": "img/pets/pets-scarlet.png",
         "type": "Dog",
         "breed": "Jack Russell Terrier",
         "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
         "age": "3 months",
         "inoculations": ["parainfluenza"],
         "diseases": ["none"],
         "parasites": ["none"]
       },
       {
         "id": "05",
         "name": "Katrine",
         "img": "img/pets/pets-katrine.png",
         "type": "Cat",
         "breed": "British Shorthair",
         "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
         "age": "6 months",
         "inoculations": ["panleukopenia"],
         "diseases": ["none"],
         "parasites": ["none"]
       },
       {
         "id": "06",
         "name": "Timmy",
         "img": "img/pets/pets-timmy.png",
         "type": "Cat",
         "breed": "British Shorthair",
         "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
         "age": "2 years 3 months",
         "inoculations": ["calicivirus", "viral rhinotracheitis"],
         "diseases": ["kidney stones"],
         "parasites": ["none"]
       },
       {
         "id": "07",
         "name": "Freddie",
         "img": "img/pets/pets-freddie.png",
         "type": "Cat",
         "breed": "British Shorthair",
         "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
         "age": "2 months",
         "inoculations": ["rabies"],
         "diseases": ["none"],
         "parasites": ["none"]
       },
       {
         "id": "08",
         "name": "Charly",
         "img": "img/pets/pets-charly.jpg",
         "type": "Dog",
         "breed": "Jack Russell Terrier",
         "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
         "age": "8 years",
         "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
         "diseases": ["deafness", "blindness"],
         "parasites": ["lice", "fleas"]
       }];
     
     
      
      let num = randomNum < 7 ? randomNum++ : randomNum = 2;
      sliders.innerHTML = `<div data-modal id=${data[num].id} class="slider__card">
      <div class="slider__img">
         <picture><img src=${data[num].img} alt=${data[num].name}></picture>
      </div>
      <div class="slider__name-pet">${data[num].name}</div>
      <div class="slider__btn pet-btn"> <a href="#" class="slider__link">Learn more</a></div>
   </div>
   <div data-modal  id=${data[num-1].id} class="slider__card hide-523">
      <div class="slider__img">
         <picture><img src=${data[num-1].img} alt=${data[num-1].name}></picture>
      </div>
      <div class="slider__name-pet ">${data[num-1].name}</div>
      <div class="slider__btn pet-btn"> <a href="#" class="slider__link">Learn more</a></div>
   </div>
   <div data-modal id=${data[num+1].id} class="slider__card hide">
      <div class="slider__img">
         <picture><img src=${data[num +1].img} alt=${data[num +1].name}></picture>
      </div>
      <div class="slider__name-pet">${data[num +1].name}</div>
      <div class="slider__btn pet-btn"> <a href="#" class="slider__link">Learn more</a></div>
   </div>`

   }
   getSliders();

   prev.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   next.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   prevNav.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   nextNav.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));

// ************modal**************
const timeAfteLoad = ()=>{
const modalOpen = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal'),
         modalClose = document.querySelector('[data-close]'),
         modalBody = document.querySelector('.modal__body');

         // function getModal() {
         //    let data =  [{
         //       "name": "Jennifer",
         //       "img": "img/pets/pets-jennifer.png",
         //       "type": "Dog",
         //       "breed": "Labrador",
         //       "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
         //       "age": "2 months",
         //       "inoculations": ["none"],
         //       "diseases": ["none"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Sophia",
         //       "img": "img/pets/pets-sophia.jpg",
         //       "type": "Dog",
         //       "breed": "Shih tzu",
         //       "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
         //       "age": "1 month",
         //       "inoculations": ["parvovirus"],
         //       "diseases": ["none"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Woody",
         //       "img": "img/pets/pets-woody.png",
         //       "type": "Dog",
         //       "breed": "Golden Retriever",
         //       "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
         //       "age": "3 years 6 months",
         //       "inoculations": ["adenovirus", "distemper"],
         //       "diseases": ["right back leg mobility reduced"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Scarlett",
         //       "img": "img/pets/pets-scarlet.png",
         //       "type": "Dog",
         //       "breed": "Jack Russell Terrier",
         //       "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
         //       "age": "3 months",
         //       "inoculations": ["parainfluenza"],
         //       "diseases": ["none"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Katrine",
         //       "img": "img/pets/pets-katrine.png",
         //       "type": "Cat",
         //       "breed": "British Shorthair",
         //       "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
         //       "age": "6 months",
         //       "inoculations": ["panleukopenia"],
         //       "diseases": ["none"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Timmy",
         //       "img": "img/pets/pets-timmy.png",
         //       "type": "Cat",
         //       "breed": "British Shorthair",
         //       "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
         //       "age": "2 years 3 months",
         //       "inoculations": ["calicivirus", "viral rhinotracheitis"],
         //       "diseases": ["kidney stones"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Freddie",
         //       "img": "img/pets/pets-freddie.png",
         //       "type": "Cat",
         //       "breed": "British Shorthair",
         //       "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
         //       "age": "2 months",
         //       "inoculations": ["rabies"],
         //       "diseases": ["none"],
         //       "parasites": ["none"]
         //     },
         //     {
         //       "name": "Charly",
         //       "img": "img/pets/pets-charly.jpg",
         //       "type": "Dog",
         //       "breed": "Jack Russell Terrier",
         //       "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
         //       "age": "8 years",
         //       "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
         //       "diseases": ["deafness", "blindness"],
         //       "parasites": ["lice", "fleas"]
         //     }];
           
            // let num = randomNum < 7 ? randomNum++ : randomNum = 2;
         //    modalBody.innerHTML = ` <div class="modal">
         //    <div class="modal__dialog">
         //       <div class="modal__body">
         //             <div data-close class="modal__close">&times;</div>
         //             <img class ="modsl__img" src=${data.img} alt="">
         //             <div class="modal__content">
         //                <div class="modal__title title">${data.name}</div>
         //                <div class="modal__subtitle ">${data.type}</div>
         //                <div class="modal__discrition">${data.description}</div>
         //                <ul class="modal__list">
         //                   <li class="modal__item">Age: <span>${data.age}</span></li>
         //                   <li class="modal__item">Inoculations: <span>${data.inoculations}</span></li>
         //                   <li class="modal__item">Diseases: <span>${data.diseases}</span></li>
         //                   <li class="modal__item">Parasites: <span>${data.parasites}</span></li>
         //                </ul>
         //             </div>
         //       </div>
         //    </div>
         // </div>`
         // };

   modalOpen.forEach(item =>{
      item.addEventListener("click", (e) => {
         console.log(e.target.id);
         // getModal();
         modal.style.display = 'block';
         document.body.style.overflow = 'hidden';
         });
   });


   modalClose.addEventListener('click', ()=>{
     
      modal.style.display = 'none';
      document.body.style.overflow = '';
   });

   modal.addEventListener('click', (e) => {
      if(e.target === modal){
         modal.style.display = 'none';
      document.body.style.overflow = '';
      }
   })

};
const modalLoad = ()=>{
   window.setTimeout(timeAfteLoad, 500);
};
modalLoad();



}));
