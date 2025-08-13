function getPass(length = 14) {
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",
        "0","1","2","3","4","5","6","7","8","9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
        "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)];
    }
    return pass;
}

let passwordbox1El = document.getElementById("p1-el");
let passwordbox2El = document.getElementById("p2-el");

function genPass() {
    passwordbox1El.textContent = getPass();
    passwordbox2El.textContent = getPass();
}



