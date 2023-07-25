
// request in vanilla  js 
var xmlReq  = new XMLHttpRequest();
 xmlReq.onload  = function (){
          var responseJSON = JSON.parse(xmlReq.response);
        //   console.log(responseJSON);
        //   console.log(responseJSON.message);
          const selectList = document.getElementById('select-list');
          for( const i in responseJSON.message){
            let opt= document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            selectList.appendChild(opt);
          }
 }
 xmlReq.open('get','https://dog.ceo/api/breeds/list/all');
 xmlReq.send();


const btnDog = document.getElementById('btn');
btnDog.addEventListener('click', function(){

       // access selected breed 
       //reference to the <select> element
       const selectELement = document.getElementById('select-list');       
       //reference to the <option> element 
       const selectOption = selectELement.options[selectELement.selectedIndex];
       //get value of selected option
       const selectValue = selectOption.value;
        console.log(selectValue);
       //get the text content of the selected option
       const selectText = selectOption.textContent;
       console.log(selectText);
      //access completed then send text with api url
      var dogXhrReq = new XMLHttpRequest();
      dogXhrReq.onload = function(){
          console.log(dogXhrReq.response);
          var jsonDogData = JSON.parse(dogXhrReq.response);
          console.log(jsonDogData);
          var imgUrl = jsonDogData.message;
          $('#dog-img').attr('src',imgUrl);
      };
       dogXhrReq.open('get',`https://dog.ceo/api/breed/${encodeURIComponent(selectText)}/images/random`);
       dogXhrReq.send(); 

       const nextButton = document.getElementById('next-btn');

       nextButton.addEventListener('click',function(){
           console.log("next button are pressed");
           var nextReq = new XMLHttpRequest();
           nextReq.onload = function (){
            var nextDogData = JSON.parse(nextReq.response);
            $('#dog-img').attr('src', nextDogData.message);
           }
           nextReq.open('get',`https://dog.ceo/api/breed/${encodeURIComponent(selectText)}/images/random`);
           nextReq.send(); 
       });
});
 // request in JQuery



