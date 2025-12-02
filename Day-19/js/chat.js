document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chatBox");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach((msg, index) => addMessage(msg.text, msg.user, index));

  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text !== "") {
      const index = messages.length;
      addMessage(text, "user", index);
      messages.push({ text, user: "user", time: new Date().toISOString() });
      localStorage.setItem("messages", JSON.stringify(messages));
      chatInput.value = "";
    }
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  function addMessage(text, user, index) {
    const div = document.createElement("div");
    div.classList.add("message", user);

    const span = document.createElement("span");
    span.textContent = text;

    const btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.textContent = "x";
    btn.addEventListener("click", () => {
      div.remove();
      messages.splice(index, 1);
      localStorage.setItem("messages", JSON.stringify(messages));
    });

    div.appendChild(span);
    div.appendChild(btn);
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
