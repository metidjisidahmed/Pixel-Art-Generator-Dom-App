const ROW_LENGTH= 15
function createTableSheet(rowsNumber){
    let squaresContainer = document.querySelector("#squares-container")

    for(let i =0 ; i< ROW_LENGTH*rowsNumber ; i++){
        let createdSquare = createBlankSquare()
        squaresContainer.appendChild(createdSquare)
    }


}

function createBlankSquare(){
    let square = document.createElement("div")
    square.classList.add("square")

    return square
}


// when i select a color , i will give it the class "selected"
document.querySelectorAll("#squares-colors-picker-container > div").forEach(function(squarePicker){
    squarePicker.addEventListener("click" , ()=>{
        // i have to make sure that the selected square is the only slected one
        clearSelected()
        squarePicker.classList.add("selected")
    })
})

function clearSelected(){
    document.querySelectorAll(".selected").forEach(function(selected){
        selected.classList.remove("selected")
    })
}

// createTableSheet(7)


document.querySelectorAll("#squares-container > .square").forEach(square=>{
    square.addEventListener("click" , function (event){
        let selectedPicker = document.querySelector(".selected")
        console.log("The selceted one is ", selectedPicker)
        let classesString= document.querySelector(".selected").getAttribute("class")
        let classArray= classesString.split(" ")
        let colorClass= classArray.filter(colorClass=> colorClass!="square" && colorClass!="selected")[0]
        event.target.setAttribute("class" , "square "+colorClass)
        // event.target.classList.add(colorClass)
    })
})
