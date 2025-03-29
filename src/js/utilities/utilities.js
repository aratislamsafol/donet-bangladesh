function getInputClass(input){
    return document.getElementsByClassName(input);
}

function getInputId(input){
    return document.getElementById(input);
}

function transitionItem(id, inputAmount){
    document.getElementById(id).innerHTML += `
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer w-full">
            <div class="p-4">
                <h5 class="mb-2 text-slate-800 text-md md:text-xl font-semibold">
                    ${inputAmount} Taka is Donated for famine-2024 at Feni, Bangladesh
                </h5>
                <p class="text-slate-600 leading-normal font-light text-sm md:text-base">
                    Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
                </p>
            </div>
        </div>
    `;
}


