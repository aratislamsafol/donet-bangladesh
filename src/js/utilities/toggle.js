// toogle Donation & Transition
function toggle(id, activeId){
    getInputId('transitionBody').classList.add('hidden');
    getInputId("donationBody").classList.add('hidden');
    getInputId("donation").classList.remove('active');
    getInputId("transition").classList.remove('active');

    getInputId(id).classList.remove('hidden');
    getInputId(activeId).classList.add('active');
}