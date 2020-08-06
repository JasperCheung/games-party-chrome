function simulateKeyInput(keyCode, cellId) {
    var input = String.fromCharCode(keyCode);
    console.log(input + " at " + cellId);
    var targetText = document.querySelector(`rect[id='${cellId}'] ~ text:last-of-type`);
    targetText.innerHTML = input;
    targetText.style.fill = 'rgba(0, 0, 0, 0.4)';
}

function simulateBackspace(cellId) {
    console.log("deletion at " + cellId);
    var targetText = document.querySelector(`rect[id='${cellId}'] ~ text:last-of-type`);
    targetText.innerHTML = '';
}

document.querySelectorAll("rect[role='cell']").forEach(cell => {
    cell.addEventListener('keydown', function(event) {
        if (event.keyCode >= 48 && event.keyCode <= 90) { // if alphanumeric key pressed
            simulateKeyInput(event.keyCode, cell.id); 
        } else if (event.keyCode == 8 || event.keyCode == 46) { // if backspace or delete pressed
            simulateBackspace(cell.id); 
        }
    });
});
