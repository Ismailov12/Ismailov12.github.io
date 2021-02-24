const overlay = document.getElementById('overlay');

const closeM = document.getElementById('close');

const openM = document.getElementById('open');

openM.addEventListener('click', function() {
    overlay.classList.add('show');
});

closeM.addEventListener('click', function() {
    overlay.classList.remove('show');
});




$('#buttonsearch').click(function() {
    $('#formsearch').slideToggle("fast", function() {
        $('#content').toggleClass("moremargin");
    });
    $('#searchbox').focus()
    $('.openclosesearch').toggle();
});



const parent = document.querySelector("#parent");
const children = parent.children;

let parentHeight = 0;
for (const key in children) {
    if (typeof children[key].offsetHeight == "number")
        parentHeight += children[key].clientHeight;
}
parent.style.height = `0px`;

const DropdownFunction = () => {
    if (parent.offsetHeight == 0) {
        parent.style.height = `${parentHeight}px`;
    } else parent.style.height = "0";
};