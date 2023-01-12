
function drawWindow(size) {
    let container = document.getElementById("container");
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.className = "column";
            column.setAttribute("onmouseover", "this.style.background='black'");
            row.appendChild(column);

        }
        container.appendChild(row);
    }
    
}
function changeSize() {
    let amount = window.prompt("How big? (Limit: 100)", "8");
    if (amount <= 100) {
        let element = document.getElementById("container");
        let child = element.lastElementChild;
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
        drawWindow(amount);
    }
}