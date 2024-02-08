const codeSnippets = [
    "console.log('Hello, world!');",
    "let sum = 10 + 5;",
    "console.log(sum);",
    "let product = 20 * 5;",
    "console.log(product);"
];

function chooseRandomCodeLine() {
    const index = Math.floor(Math.random() * codeSnippets.length);
    return codeSnippets[index];
}

function initializeProcesses(numProcesses) {
    const processes = [];
    for (let i = 0; i < numProcesses; i++) {
        processes.push({
            processNumber: i + 1,
            codeLines: [chooseRandomCodeLine(), chooseRandomCodeLine(), chooseRandomCodeLine(), chooseRandomCodeLine(), chooseRandomCodeLine()]
        });
    }
    return processes;
}

function displayLine(processNumber, lineOfCode) {
    const output = document.getElementById('output');
    const line = document.createElement('p');
    line.textContent = `Proceso ${processNumber}`;
    line.textContent += `: ${lineOfCode}`;
    output.appendChild(line);
}

function displaySeparator() {
    const output = document.getElementById('output');
    const separator = document.createElement('hr');
    output.appendChild(separator);
    
}

function simulateRoundRobin(processes) {
    let continueSimulation = true;
    while (continueSimulation) {
        displaySeparator();
        continueSimulation = false;
        for (const process of processes) {
            if (process.codeLines.length > 0) {
                const lineOfCode = process.codeLines.shift();
                displayLine(process.processNumber, lineOfCode);
                continueSimulation = true;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const processes = initializeProcesses(5);
    simulateRoundRobin(processes);
});
