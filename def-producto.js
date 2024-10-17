let cantidad = 0;
        function aumentar() {
            cantidad++;
            document.getElementById("contador").innerText = cantidad;
        }
        function disminuir() {
            cantidad--;
            document.getElementById("contador").innerText = cantidad;
        }