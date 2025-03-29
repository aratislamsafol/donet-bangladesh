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

        // specific Donet Calculation
        let specificItemDonet = data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText;
        let newSpecificDonet = parseInt(specificItemDonet) + parseInt(inputValue);
        data.parentNode.children[0].children[1].querySelector('.donateAmount').innerText = newSpecificDonet;

        // Donet Money & Remove from Main Balance
        let balance = parseInt(getInputId('userBlance').innerText) - parseInt(inputValue);
        getInputId('userBlance').innerText = balance;
        getInputId('userBlance2').innerText = balance;

        data.firstElementChild.value = "";
    });
}

// transition




// toggle 
getInputId('donation').addEventListener('click', function(){
    toggle('donationBody');
});

getInputId('transition').addEventListener('click', function(){
    toggle('transitionBody');
});
