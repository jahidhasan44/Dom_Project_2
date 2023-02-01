const dragArea = document.querySelector(".AppBody");
const dragText = dragArea.querySelector("h3");
const button = dragArea.querySelector("button");
const input = dragArea.querySelector("input");

let Myfile;
button.onclick = () =>{
    input.click()

}
input.addEventListener("change" ,function(){
    Myfile = this.files[0];
    dragArea.classList.add("active");
    showMe()
})

dragArea.addEventListener("dragover", (event) => {

    event.preventDefault();

    dragArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
})
dragArea.addEventListener("dragleave", () =>{

    dragArea.classList.remove("active");

    dragText.textContent = "Drag & Drop";
})
dragArea.addEventListener("drop", (event) =>{
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];
})
function showMe(){
    let fileType = Myfile.type;
    let validEx = ["image/jpeg", "image/jpg", "image/png"];

    if(validEx.includes(fileType)){

        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let  imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt= " ">`

            dragArea.innerHTML = img

        }
        fileReader.readAsDataURL(Myfile);
    }
    else{
        alert("your file is invalid!")
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop";


    }
}