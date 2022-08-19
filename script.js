let disp_el = document.getElementById("disp");
let opr = 0
let ansGiven = false

function clrtext() {
    disp_el.textContent = "0"
    num1 = 0
    num2 = 0
    ansGiven = false
}

function plreset() {
    if(ansGiven === true) {
        alert("Please reset after getting the answer!")
        disp_el.textContent = disp_el.textContent.slice(0, -1)  // -ve means from end
        opr = 0
    }
}

function del() {
    disp_el.textContent = disp_el.textContent.slice(0, -1)  // -ve means from end
    if(disp_el.textContent === "") {
        disp_el.textContent = "0"
    }
}


function press1() {
    if(opr !== 0 && disp_el.textContent == num1 ) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 1
}
function press2() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 2
}
function press3() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 3
}
function press4() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 4
}
function press5() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 5
}
function press6() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 6
}
function press7() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 7
}
function press8() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 8
}
function press9() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 9
}
function press0() {
    if(opr !== 0 && disp_el.textContent == num1) {
        disp_el.textContent = ""
    }
    else if(disp_el.textContent === "0") {
        disp_el.textContent = ""
    }
    disp_el.textContent += 0
}
function presspoint() {
    disp_el.textContent += "."
}

function pressadd() {
    num1 = parseFloat(disp_el.textContent)
    // disp_el.textContent = "+"
    // disp_el.textContent = ""
    opr = 1
}
function presssub() {
    num1 = parseFloat(disp_el.textContent)
    // disp_el.textContent += "-"
    // disp_el.textContent = ""
    opr = 2
}
function pressmul() {
    num1 = parseFloat(disp_el.textContent)
    // disp_el.textContent += "*"
    // disp_el.textContent = ""
    opr = 3
}
function pressdiv() {
    num1 = parseFloat(disp_el.textContent)
    // disp_el.textContent += "/"
    // disp_el.textContent = ""
    opr = 4
}


function pressequ() {
    num2 = parseFloat(disp_el.textContent)
    if(opr === 1) {
        disp_el.textContent = num1 + num2
        opr = 0
    } else if(opr === 2) {
        disp_el.textContent = num1 - num2
        opr = 0
    } else if(opr === 3) {
        result = num1*num2
        disp_el.textContent = result.toFixed(8)
        opr = 0
    } else if(opr === 4) {
        result = num1/num2
        disp_el.textContent = result.toFixed(8)
        opr = 0
    } else {
        disp_el.textContent = "error"
    }
    ansGiven = true
}
