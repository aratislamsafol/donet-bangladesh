// donation
for(let data of getInputClass('donetBtn')){
    data.lastElementChild.addEventListener('click', function(event){
        event.preventDefault();
        
        // specific Donet Calculaton
        let specificItemDonet = data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText;
        let newSpecificDonet = parseInt(specificItemDonet) +  parseInt(data.firstElementChild.value);
        data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText = newSpecificDonet;

        // Donet Money & Remove from Main Balance
        let balance = parseInt(getInputId('userBlance').innerText) - data.firstElementChild.value;
        getInputId('userBlance').innerText = balance;

        data.firstElementChild.value = ""
    })
}