function changeAttribute(){
    const el = document.getElementById("img");
    el.src = (el.src === "https://s2-techtudo.glbimg.com/TN3B8p9bJJWkr9gqgTsFFalkYJ0=/0x0:4000x2667/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/v/b/uK7UeHSKG04m3jBZIKFw/dalle2.jpg") ? "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" : "https://s2-techtudo.glbimg.com/TN3B8p9bJJWkr9gqgTsFFalkYJ0=/0x0:4000x2667/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/v/b/uK7UeHSKG04m3jBZIKFw/dalle2.jpg";
    // const el = document.getElementById("button").src = "./img/lupa.png"
}

function changeType() {
    const el = document.getElementById("range");
    el.type = (el.type === "range") ? "checkbox" : "range";
    
    const button = document.getElementById("buttonChange");
    button.firstChild.nodeValue = (el.type === "range") ? "Change to Checkbox": "Change to Range";
}

function teste() {
    const el = document.getElementById("teste");
    const p = document.querySelector("p");

    p.innerHTML = el.innerHTML;
}
