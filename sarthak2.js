



gsap.from(".imgbox",{



   x:50,
   duration:1

})


var first=function(){
   document.querySelector("#img1").addEventListener("mousemove",function(){
      console.log("move");
      gsap.to("#img1",{
         top:"48%",
   
      })
   
   })
   document.querySelector("#img1").addEventListener("mouseleave",function(){
      console.log("move");
      gsap.to("#img1",{
         
   
         top:"50%",
   
      })
   
   })
   
   
   // document.querySelector("#img2").addEventListener("mousemove",function(){
   //    console.log("move");
   //    gsap.to("#img2",{
   //       top:"32%",
   
   //    })
   
   // })
   // document.querySelector("#img2").addEventListener("mouseleave",function(){
   //    console.log("move");
   //    gsap.to("#img2",{
   //       top:"34%",
   
   //    })
   
   // })
   
   document.querySelector("#img3").addEventListener("mousemove",function(){
      console.log("move");
      gsap.to("#img3",{
         top:"74%",
   
      })
   
   })
   document.querySelector("#img3").addEventListener("mouseleave",function(){
      console.log("move");
      gsap.to("#img3",{
         top:"75%",
   
      })
   
   })

}

first();






// page2 


gsap.from('#page2>h1',{
   scrollTrigger:{
   trigger:'#page2',
   scroller:"body",
   // markers:true,
   scrub:1,
   start:"top 110%",
   end:"bottom 90%"
   },
   bottom:"-80%",
   transition:'1s',
   delay:0.5,
})


// page3

gsap.from('#page3>#leftp3>.imgp',{
   
   left:"-80%",
   scrollTrigger:{
      trigger:'#page3',
      scroller:"body",
      // markers:true,

      // scrub:5,
      start:"top 20%",
      end:"bottom 10%"
   },

})

gsap.from('#writtenp3',{
   scrollTrigger:{
      trigger:'#page3',
      scroller:"body",
      // markers:true,
      // scrub:5,
      start:"top 20%",
      end:"bottom 10%"
   },
   left:"100%", 
})



// page4



gsap.from('#page4>h3',{
   scrollTrigger:{
      scroller:'body',
      trigger:'#page4',
      start:"top 70%",
      
   },
   top:"-500%",

})

gsap.from('#photocontainer>#leftp4',{
   scrollTrigger:{
      scroller:'body',
      trigger:'#page4',
      start:"top 50%",
   },

   left:'-500%',

})

gsap.from('#photocontainer>#rightp4',{

   scrollTrigger:{
      scroller:'body',
      trigger:'#page4',
      start:"top 50%",
   },
   left:'500%',

})





gsap.from('#mainp1>h1',{

   onStart:function(){
      $('#mainp1>h1').textillate({ 
         in: { effect: 'swing',
      }   
  
      });
      
  
   }
})


// #page6



const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

   