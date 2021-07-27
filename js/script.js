let stepBlock1 = document.getElementById('stepblock1');
let stepBorder1 = document.getElementById('stepborder1');

let stepBlock2 = document.getElementById('stepblock2');
let stepBorder2 = document.getElementById('stepborder2');

let stepBlock3 = document.getElementById('stepblock3');
let stepBorder3 = document.getElementById('stepborder3');

stepBlock1.onmouseover = () => {
    stepBorder1.style.borderBottom = '3px solid white';
}

stepBlock1.onmouseout = () => {
    stepBorder1.style.borderBottom = '3px solid black';
}

stepBlock2.onmouseover = () => {
    stepBorder2.style.borderBottom = '3px solid white';
}

stepBlock2.onmouseout = () => {
    stepBorder2.style.borderBottom = '3px solid black';
}

stepBlock3.onmouseover = () => {
    stepBorder3.style.borderBottom = '3px solid white';
}

stepBlock3.onmouseout = () => {
    stepBorder3.style.borderBottom = '3px solid black';
}