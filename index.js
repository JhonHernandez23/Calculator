const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll(".btn");
let limpiarPantalla = false;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonSelect = button.textContent;
        //Función borrar todos los valores
        if (button.id === "borrarTodo") {
            pantalla.textContent = "0";
            return;
        }
        //Función borrar de un digito
        if (button.id === "borrar") {
            if (
                pantalla.textContent.length === 1 ||
                pantalla.textContent === "error"
            ) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //Función de igualdad
        if (button.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                limpiarPantalla = true;
            } catch {
                pantalla.textContent = "error";
            }
            return;
        }
        if (limpiarPantalla) {
            pantalla.textContent = buttonSelect;
            limpiarPantalla = false;
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "error") {
            pantalla.textContent = buttonSelect;
        } else {
            pantalla.textContent += buttonSelect;
        }
    });
});
