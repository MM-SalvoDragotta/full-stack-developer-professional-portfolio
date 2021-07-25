// function renderLocalStorage(){
//     var inputUserHours = document.getElementsByTagName('input');
//     for (var i=0; i< hourArray.length ; i++) {
//         var localStorageValue = JSON.parse(localStorage.getItem(hourArray[i].replace(/\s/g, '')));
//         inputUserHours[i].value = localStorageValue 
//     }
// }

// $(".btn").click(function(event){
//     // console.log(event.target.parentElement.previousElementSibling);
//     // console.log(event.target.parentElement.previousElementSibling.id)
//     // console.log(event.target.parentElement.previousElementSibling.getAttribute("data-hour"))
//     // console.log(event.target.parentElement.previousElementSibling.value);    
//     // console.log(event.target.parentElement)
//     // console.log(event.target.parentElement.id)
//     var storageName = event.target.parentElement.previousElementSibling.getAttribute("data-hour");
//     var storageValue = event.target.parentElement.previousElementSibling.value
//     localStorage.setItem(storageName, JSON.stringify(storageValue));


// function init() {    
    
// }