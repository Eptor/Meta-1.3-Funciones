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

function simulateRoundRobin(processes) {
    let continueSimulation = true;
    while (continueSimulation) {
        continueSimulation = false;
        console.log("\n" + "-".repeat(20) + "\n");
        for (const process of processes) {
            if (process.codeLines.length > 0) {
                const lineOfCode = process.codeLines.shift();
                console.log(`Proceso ${process.processNumber}\nLínea de código: ${lineOfCode}`);
                continueSimulation = true;
            }
        }
    }
}

const numProcesses = process.argv[2];
const processes = initializeProcesses(numProcesses);
simulateRoundRobin(processes);
