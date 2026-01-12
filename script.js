
const container = document.querySelector(".container");

for (let x = 0; x < 16; x++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";

    for (let i = 0; i < 16; i++) {
        const gridBox = document.createElement("div");
        gridBox.style.flex = "1";
        gridBox.style.border = "1px solid black";
        gridBox.style.backgroundColor = "blue";
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "orange";

            setTimeout(() => {
                gridBox.style.backgroundColor = "blue";
            }, 500);
        });

        row.appendChild(gridBox);
    }

    container.appendChild(row);
}

const button = document.querySelector("button");

button.addEventListener("click", () => {

    let userInput = prompt("Please enter the new X by X value");
    while(userInput > 100){
        alert("Input has to less than or equal to 100");
        userInput = prompt("Please enter the new X by X value");
    }
    const container = document.querySelector(".container");
    container.remove();

    const newContainer = document.createElement("div");
    newContainer.className = "container";
    const styles = {
        backgroundColor: 'black',
        width: '1000px',
        height: '1000px',
        display: 'flex',
        flexDirection: 'column',
    }

    Object.assign(newContainer.style, styles);

    for (let x = 0; x < userInput; x++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";

    for (let i = 0; i < userInput; i++) {
        const gridBox = document.createElement("div");
        gridBox.style.flex = "1";
        gridBox.style.border = "1px solid black";
        gridBox.style.backgroundColor = "blue";
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "orange";

            setTimeout(() => {
                gridBox.style.backgroundColor = "blue";
            }, 500);
        });

        row.appendChild(gridBox);
    }

    newContainer.appendChild(row);
}

document.body.appendChild(newContainer);
});

