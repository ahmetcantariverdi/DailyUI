const input = document.getElementById("nameInput");
const results = document.getElementById("nameResult");

input.addEventListener("focus", () => {
    results.classList.remove("d-none");
});

input.addEventListener("blur", () => {
    setTimeout(() => results.classList.add("d-none"), 200);
});

document.querySelectorAll("#nameResult button").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetbox = document.getElementById(targetId);

        document.querySelectorAll(".group-box").forEach(box => {
            box.classList.remove("active-border");
        });

        targetbox.classList.add("active-border");
    });
});
//!   click box hover efect 
// document.querySelectorAll(".user-card").forEach(card => {
//   card.addEventListener("click", () => {
//     document.querySelectorAll(".user-card").forEach(c => c.classList.remove("active"));
//     card.classList.add("active");
//   });
// });
