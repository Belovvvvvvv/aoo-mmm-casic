
document.addEventListener("DOMContentLoaded", () => {
    const slotBtn = document.getElementById("play-slots");
    const minesBtn = document.getElementById("play-mines");
    const aviatorBtn = document.getElementById("play-aviator");
    const resultBox = document.getElementById("result");

    slotBtn.onclick = () => {
        const symbols = ["🍒", "🍋", "🍀", "💎", "7️⃣"];
        const roll = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
        resultBox.innerHTML = `🎰 ${roll.join(" | ")} 🎰`;
    };

    minesBtn.onclick = () => {
        const grid = Array.from({ length: 5 }, () =>
            Math.random() < 0.3 ? "💣" : "✅"
        );
        resultBox.innerHTML = `💣 Мины: ${grid.join(" ")}`;
    };

    aviatorBtn.onclick = () => {
        let coeff = (Math.random() * 5 + 1).toFixed(2);
        resultBox.innerHTML = `✈️ Авиатор взлетел до x${coeff}`;
    };
});
