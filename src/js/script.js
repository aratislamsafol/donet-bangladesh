// donation
for (let data of getInputClass('donetBtn')) {
    data.lastElementChild.addEventListener('click', function (event) {
        event.preventDefault();

        let inputValue = data.firstElementChild.value;
        // trainsition Data pass
        transitionItem('transitionBody' ,inputValue);

        if (isNaN(inputValue) || inputValue.trim() === "") {
            alert("Please enter a valid number!");
            return; 
        }

        // Donet Money & Remove from Main Balance
        let balance = parseInt(getInputId('userBlance').innerText) - parseInt(inputValue);
        let specificItemDonet = data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText;
        if(balance > 0 ){
        let newSpecificDonet = parseInt(specificItemDonet) + parseInt(inputValue);
        data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText = newSpecificDonet;
            getInputId('userBlance').innerText = balance;
            getInputId('userBlance2').innerText = balance;
        }else{
            alert('You dont add extra money');
            data.firstElementChild.value = "";
            return;
        }
        

        data.firstElementChild.value = "";
    });
}

// mobile menu
document.getElementById('humburgerId').addEventListener('click', function(){
    if(document.getElementById('menu').classList.contains('hidden')){
        document.getElementById('menu').classList.add('flex');
        document.getElementById('menu').classList.remove('hidden');
    }else{
        document.getElementById('menu').classList.add('hidden');
    }
});


// toggle 
getInputId('donation').addEventListener('click', function(){
    toggle('donationBody', 'donation');
});

getInputId('transition').addEventListener('click', function(){
    toggle('transitionBody', 'transition');
});
