function volume_sphere(event) {
    event.preventDefault();

    let radius = parseFloat(document.getElementById("radius").value);

    let volume = NaN;

    if (!isNaN(radius) && radius >= 0) {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};