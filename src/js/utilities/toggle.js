// toogle Donation & Transition
function toggle(id){
    getInputId('transitionBody').classList.add('hidden');
    getInputId("donationBody").classList.add('hidden');

    getInputId(id).classList.remove('hidden');
}