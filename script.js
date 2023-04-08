// Traffic lights
const states = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green'
};

// Initial state
let currentState = states.RED;
let timeoutId;

// Function to change traffic light state
function changeState(newState) {
    clearTimeout(timeoutId); // Clear previous timeout

    // Reset all lights to black
    document.getElementById('redLight').style.backgroundColor = 'black';
    document.getElementById('yellowLight').style.backgroundColor = 'black';
    document.getElementById('greenLight').style.backgroundColor = 'black';

    // Set new state based on button clicked
    currentState = newState;

    // Update traffic light according to new state
    switch (currentState) {
        case states.RED:
            document.getElementById('redLight').style.backgroundColor = 'red';
            timeoutId = setTimeout(() => {
                changeState(states.GREEN);
            }, 20000); // Transition to GREEN after 20 seconds
            break;
        case states.YELLOW:
            document.getElementById('yellowLight').style.backgroundColor = 'yellow';
            timeoutId = setTimeout(() => {
                changeState(states.RED);
            }, 5000); // Transition to RED after 5 seconds
            break;
        case states.GREEN:
            document.getElementById('greenLight').style.backgroundColor = 'green';
            timeoutId = setTimeout(() => {
                changeState(states.YELLOW);
            }, 15000); // Transition to YELLOW after 15 seconds
            break;
        default:
            console.error('Invalid state');
            break;
    }
}
