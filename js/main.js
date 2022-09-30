(function() {
    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.grid')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach((item) => {
                if (filter === 'all'){
                    item.style.display = 'block'
                } else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

})();

//moon y sun
const btnSwitch = document.querySelector("#switch")
btnSwitch.addEventListener('click',() =>{
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});


//Boton que sube 
window.onscroll = function(){
    //console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 10) {
      document.querySelector('.go-top-container').classList.add('show');
       
    }
    else{
      document.querySelector('.go-top-container').classList.remove('show');
    }
  }
   
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


