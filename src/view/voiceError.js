export function voiceError() {
    var ispis = document.getElementById("zaIspis");
    ispis.innerHTML = `<h1 id="errorMsg">Voice message unrecognised. Please repeat 
                       your message or use our oldfashioned search.</h1>`
}