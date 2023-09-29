const wheel = document.getElementById("wheel");
const selectedName = document.getElementById("selectedName");
let names = [];

fetch('https://raw.githubusercontent.com/username/repository-name/main/names.json')
    .then(response => response.json())
    .then(data => {
        names = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

function spinWheel() {
    // Disable the button during the spin
    document.querySelector("button").disabled = true;

    // Generate a random angle for spinning
    const randomAngle = Math.random() * 360;

    // Set the animation properties
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = `rotate(${randomAngle}deg)`;

    // Delay the result until the animation finishes
    setTimeout(() => {
        // Calculate the selected name
        const selectedIndex = Math.floor((randomAngle % 360) / (360 / names.length));
        const winner = names[selectedIndex];

        // Display the selected name
        selectedName.textContent = `Winner: ${winner}`;

        // Re-enable the spin button
        document.querySelector("button").disabled = false;

        // Reset the wheel
        wheel.style.transition = "none";
        wheel.style.transform = "rotate(0deg)";
    }, 3000);
}
