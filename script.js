const click1 = document.getElementById("btn1");
const display = document.getElementById("display");
function enable(){
   display.removeAttribute("disabled");
};
click1.addEventListener('click', enable);
function dis(val){
    // whenever user click on value then it store as a parameter and return same 
  display.value+=val ;
  return val;
};
function clr() {
    display.value = '';
};
function solve(){
    // x contains value which is enter by user
    let x = display.value;
    // now value of x is evaluated by eval function and assign to y
    let y = eval(x);
// now y is show on the text box
    display.value = y;
}
