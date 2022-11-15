
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));


function getFigur(figur)
{
    switch (figur) {
        case "Q":
            return "?";
        case "E":
            return "!";
        default: 
            return ".";
    }
}

function getSentence(arr,figur) 
{
    const GAP   = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        // wenn ich noch NICHT das letzte Element habe --> gap
        // wenn ich das letzte Element habe -->  punct
        // a = a + 1 || a += 1  

        if (i < arr.length - 1) 
        // if (i != arr.length -1)
        {
            str += arr[i] + GAP;
        } else {
            str += arr[i];
        }
    }

    return str + getFigur(figur);

}
function output(outputStr) {
    console.log(outputStr);
}