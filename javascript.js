   let  playbutton=document.getElementById("playbutton");
  let audio=document.querySelector("audio");
  let i=0;
  playbutton.addEventListener("click", play);
  function play()
  {
    
      if(i==0)
      {
audio.play();
//  audio.loop=true;
playbutton.src="pause.png";

i=1;
      }
    else{
        audio.pause();
        playbutton.src="play-button.png";
i=0;
    }

    };

    let range=document.getElementById("range");
   
     range.addEventListener("input",()=>
    {
       
     audio.currentTime= range.value;
    
     
    });
    range.addEventListener("insert",()=>{
      if(range.value>=audio.duration-1)
      {
        changeNext();
      }
    });

   setInterval(()=>
   {
    range.value= audio.currentTime;
    range.max=audio.duration; 
    
   },10);
   setInterval(()=>
   {
    if(range.value>=audio.duration-1)
    {
      changeNext();
    }
   },100)
   window.addEventListener("load",()=>  
   {
    audio.src=songsrc[count];
    } );

    var songsrc= ["2_Seater__Gippy_Grewal_(Official_Video)_Afsana_Khan__Amrit_Maan__Sukh_Sanghera__Geet_MP3(256k).mp3","7 Knaalan _ Happy Raikoti _ Latest Punjabi Songs 2015 _ Speed Records(MP3_160K).mp3","Bewafa-(Mr-Jatt.com).mp3","Lakh Rupiya - Veer Sandhu (Official Video) _ Latest Punjabi Songs 2021 _ New Punjabi Songs 2021(MP3_160K).mp3"];
    
   let pervious=document.getElementById("pervious");
   pervious.addEventListener("click",changePervious); 
   var count=0;
   
   function changePervious()
   {
    if(count>0)
    {
     count--;
    }
    else{
      count=songsrc.length-1;
    }
     changesong();
   };
   let j=0;
   function changesong()
   {
   
      
     audio.src=songsrc[count];
     console.log(songsrc[count]);
     range.max=audio.duration
       if(i==1)
       {
         i=0;
       play();
       
       }
    };
    let next=document.getElementById("next");
   next.addEventListener("click",changeNext); 
    function changeNext()
   {
    if(count<songsrc.length-1){
     count++;
    }
     else{
       count=0;
     }
     changesong();
    
   }

   document.addEventListener("keydown",(event)=>
   {
if(event.key="ArrowRight")
{
  if(range.value<range.max)
  audio.currentTime+=5;
}
if(event.key="ArrowLeft")
{ if(range.value>range.min)
  audio.currentTime-=5;
}
else
console.log(event.key);
   })
 
   

  
