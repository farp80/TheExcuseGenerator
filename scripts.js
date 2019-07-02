window.onload = () => {
    let person = ['The dog', 'My car', 'The door', 'Her cat'];
    let action = ['hid my shoes ', 'was caught in a triple accident', 'got looked', 'eat my dinner'];
    let timeToPass = ['exactly 20 mins before leaving', 'after I left Juan house', 'in the middle of the moving', 'while you were talking to me!'];

    let nbrToGet = parseInt(getNumberToExcuse());

    let excuse = person[nbrToGet] + " " + action[nbrToGet] + " " + timeToPass[nbrToGet];
    document.getElementById("excuse").innerHTML = excuse;


    function getNumberToExcuse()
    {
        return Math.floor(Math.random() * 4);
    }
}
