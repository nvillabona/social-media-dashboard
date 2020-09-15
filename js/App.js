const checkbox = document.querySelector('#checkbox');


if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    console.log(checkbox.checked)
    checkbox.setAttribute('checked', true);
    console.log(checkbox.checked)
}

checkbox.addEventListener('change', function(event){
    
    if(this.checked){
        document.body.classList.remove('is-light-mode');
        document.body.classList.add('is-dark-mode');

    }else{
        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');
    }

})