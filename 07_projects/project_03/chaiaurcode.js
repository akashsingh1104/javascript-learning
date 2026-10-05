const clock = document.getElementById('clock')
//or const clock = document.querySelector('#clock)

//digital clock h to har second change honi chahiye


setInterval(function(){  //ye bolta h ki koi bhi method mujhe deedo and interval btado kitne interval baad repeat krana h and time is in  miliseconds means in 1 sec
   let date =new Date();
//    console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();

},1000) 
