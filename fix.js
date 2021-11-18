const form = document.getElementById("formSacar")
const checkbox = document.getElementById("burger")

checkbox.onclick = function(){
    if(checkbox.checked){
        form.style.display = "none";
    }
    else{
        form.style.display = "flex";
    }

}