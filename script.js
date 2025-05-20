const dark = document.querySelector(".dark")
const clickdark = document.querySelector(".body")
dark.addEventListener("click" , ()=> {
    clickdark.classList.toggle("active")
})


const MenuBtn = document.querySelector(".menu-btn")
const NavBtn = document.querySelector(".nav-lists")
MenuBtn.addEventListener("click" , ()=> {
    NavBtn.classList.toggle("active")
})



const scrollRevealOption = {
    distance: "60px",
    duration: 2500,
    delay: 400,

  };
  
  ScrollReveal().reveal("#Home " , {
     
    origin: "right",
    
    delay: 800,
    interval: 400,
  });
  ScrollReveal().reveal(".apost h1 , .apost p  ,.cover" , {
   
    origin: "button",
    
    delay: 800,
    interval: 400,
  });
  ScrollReveal().reveal(" .cover-main" , {
   
    origin: "left",
    
    delay: 800,
    interval: 400,
  });
  ScrollReveal().reveal(" .box h3 , .box h2 , .box p , .box-1" , {
   
    origin: "top",
    
    delay: 800,
    interval: 400,
  });



  ScrollReveal().reveal("  .fpost-box h3 ,.fpost-box h1  , .fpost-box p ,.box-item  , .inputs input , .inputs textarea " , {
      origin: "left",
    delay: 800,
    interval: 400,
  });
ScrollReveal().reveal(" .fpost-box-2 h1 ,.fpost-box-2 p , .fpost-box-2 button ", {
    delay: 800,
    origin: "top",
    interval: 500,
  });

  
ScrollReveal().reveal(" .items .fcover , .items .fcover .box  ,.items p,.items .nav-lis ul li , .email h1 , .email input ", {
    delay: 800,
    origin: "top",
    interval: 500,
  });

  

