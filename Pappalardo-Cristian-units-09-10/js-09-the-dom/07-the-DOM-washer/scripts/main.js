const stackEls = {
    A: document.getElementById("stackA"),
    B: document.getElementById("stackB"),
    C: document.getElementById("stackC"),
    clean: document.getElementById("cleanStack")
};

const countEls = {
    A: document.getElementById("countA"),
    B: document.getElementById("countB"),
    C: document.getElementById("countC"),
    clean: document.getElementById("countClean")
};

const statusText = document.getElementById("statusText");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let dirtyStacks = { A: [], B: [], C: [] };
let cleanStack = [];
let isRunning = false;
let nextDishId = 1;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

function createDish(originStack) {
    const dish = {
        id: nextDishId,
        label: "Plate #" + String(nextDishId),
        origin: originStack
    };
    nextDishId += 1;
    return dish;
}

function buildDirtyStacks() {
    dirtyStacks = { A: [], B: [], C: [] };

    ["A", "B", "C"].forEach(function (stackName) {
        const amount = randomInt(10, 15);
        for (let i = 0; i < amount; i += 1) {
            dirtyStacks[stackName].push(createDish(stackName));
        }
    });
}

function dishItemHtml(dish, typeClass) {
    return "<li class='dish " + typeClass + "'>" + dish.label + " (" + dish.origin + ")</li>";
}

function emptyHtml() {
    return "<li class='empty'>No dishes</li>";
}

function updateCount(label, value) {
    countEls[label].textContent = String(value) + (value === 1 ? " dish" : " dishes");
}

function drawStacks() {
    ["A", "B", "C"].forEach(function (stackName) {
        const stack = dirtyStacks[stackName];
        stackEls[stackName].innerHTML =
            stack.length > 0
                ? stack.map(function (dish) {
                    return dishItemHtml(dish, "dirty");
                }).join("")
                : emptyHtml();

        updateCount(stackName, stack.length);
    });

    stackEls.clean.innerHTML =
        cleanStack.length > 0
            ? cleanStack.map(function (dish) {
                return dishItemHtml(dish, "clean");
            }).join("")
            : emptyHtml();

    updateCount("clean", cleanStack.length);
}

function dirtyTotal() {
    return dirtyStacks.A.length + dirtyStacks.B.length + dirtyStacks.C.length;
}

function nonEmptyDirtyStackNames() {
    return ["A", "B", "C"].filter(function (stackName) {
        return dirtyStacks[stackName].length > 0;
    });
}

function washDish() {
    const availableStacks = nonEmptyDirtyStackNames();
    if (availableStacks.length === 0) {
        return 0;
    }

    const sortedBySize = availableStacks.sort(function (left, right) {
        return dirtyStacks[right].length - dirtyStacks[left].length;
    });

    const candidates = sortedBySize.slice(0, 2);
    let washed = 0;

    // Bonus behavior: wash up to 2 dishes per step, preferring fuller stacks.
    candidates.forEach(function (stackName) {
        const dish = dirtyStacks[stackName].pop();
        if (dish) {
            cleanStack.push(dish);
            washed += 1;
        }
    });

    return washed;
}

async function runSimulation() {
    if (isRunning) {
        return;
    }

    isRunning = true;
    startBtn.disabled = true;
    resetBtn.disabled = true;

    while (dirtyTotal() > 0) {
        const washedNow = washDish();
        drawStacks();

        statusText.textContent =
            "Washed " + String(washedNow) + " dish" + (washedNow === 1 ? "" : "es") +
            ". Remaining dirty dishes: " + String(dirtyTotal()) + ".";

        const randomDelay = randomInt(450, 1100);
        await wait(randomDelay);
    }

    statusText.textContent = "Simulation complete. All dishes are clean.";
    isRunning = false;
    startBtn.disabled = false;
    resetBtn.disabled = false;
}

function resetSimulation() {
    if (isRunning) {
        return;
    }

    cleanStack = [];
    nextDishId = 1;
    buildDirtyStacks();
    drawStacks();
    statusText.textContent = "Ready to wash dishes.";
}

startBtn.addEventListener("click", runSimulation);
resetBtn.addEventListener("click", resetSimulation);

resetSimulation();
