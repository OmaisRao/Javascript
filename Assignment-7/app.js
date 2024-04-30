
var round_input = document.getElementById('round_input')
var round_result = document.getElementById('round_result')
var random_result = document.getElementById('random_result')

function round() {
    var roundResult = Math.round(round_input.value);
    round_result.innerText = roundResult
}