let stack = [];

// Pushes an element to the stack
function pushToStack() {
    const value = document.getElementById("stackInput").value;
    if (value === "") return;

    stack.push(value);
    renderStack();
    document.getElementById("stackInput").value = "";
}

// Pops the top element from the stack
function popFromStack() {
  if (stack.length === 0) return;

  stack.pop();
  renderStack();
}

// Updates the rendering of the stack
function renderStack() {
  const container = document.getElementById("stackContainer");
  container.innerHTML = "";

  stack.forEach(item => {
    const div = document.createElement("div");
    div.className = "stack-item";
    div.textContent = item;
    container.appendChild(div);
  });
}