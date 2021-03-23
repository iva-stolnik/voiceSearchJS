export function typoError(rez) {
    var ispis = document.getElementById("zaIspis");
    ispis.innerHTML = `<h1 id="errorMsg">You have entered wrong keyword <span>(${rez})</span>
                       or country isn't on this list.
                       </h1>`
};


