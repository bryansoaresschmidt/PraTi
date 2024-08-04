const terms = document.getElementById("terms");

function checkReading() {
    const read = terms.scrollHeight - Math.round(terms.scrollTop) === terms.clientHeight;
    if(read) {
        document.getElementsByTagName("p")[0].innerHTML = "Terms Read, you're able!";
    }
}

terms.onscroll = checkReading;

console.log(terms.scrollHeight) /* área total 1000px*/
console.log(terms.scrollTop) /* 0px */
console.log(terms.clientHeight) /* área visível 400px */
