function goToMessage() {
    window.location.href = "message.html";
}


function openEnvelope() {

    const envelope = document.getElementById("envelope");
    const message = document.getElementById("messageReveal");

    envelope.classList.add("open");

    setTimeout(() => {
        message.classList.add("show");
    }, 900);
}

function goToYears() {
    window.location.href = "years.html";
}



let openedYears = new Set();

function openYear(number, card) {

    if (openedYears.has(number)) {
        return;
    }

    openedYears.add(number);

    card.classList.add("revealed");

    const story = card.querySelector(".year-story");

    story.classList.add("show");

    document.getElementById("yearsProgress").textContent =
        `اكتشفي المحطات الأربعة: ${openedYears.size} / 4`;

    if (openedYears.size === 4) {

        document.getElementById("nextYearsButton").hidden = false;

        document.getElementById("yearsProgress").textContent =
            "اكتملت الحكايات الأربع! ✨";
    }
}

function goToSecrets() {
    window.location.href = "secrets.html";
}




const secretMessages = [
    "السر الأول: أوقات التفاصيل الصغيرة بتكون أجمل من الحاجات الكبيرة. ✨",

    "السر التاني: في ذكريات بسيطة بتفضل مميزة مهما الوقت عدى. 🌙",

    "السر التالت: ضحكتك تستاهل إنك تلاقي أسباب كتير تضحكي عشانها. 🤍",

    "السر الرابع: أتمنى تفضلي دايمًا محاطة بالناس اللي بيقدّروا وجودك. 🌷",

    "السر الخامس: دي مش نهاية الحكاية، لسه في مفاجآت تانية. 💫"
];

let discoveredSecrets = new Set();

function revealSecret(index, button) {

    if (discoveredSecrets.has(index)) {
        return;
    }

    discoveredSecrets.add(index);

    button.classList.add("discovered");
    button.textContent = "★";

    document.getElementById("secretMessage").textContent =
        secretMessages[index];

    document.getElementById("secretProgress").textContent =
        `الأسرار المكتشفة: ${discoveredSecrets.size} / 5`;

    if (discoveredSecrets.size === secretMessages.length) {

        document.getElementById("nextSecretButton").hidden = false;

        document.getElementById("secretMessage").textContent =
            "اكتشفتي كل الأسرار! بس لسه في مفاجأة أخيرة هنا... ❤️";
    }
}

function goToHeart() {
    window.location.href = "heart.html";
}


let heartClicks = 0;

const heartMessages = [
    "أول حاجة: أتمنى تلاقي السعادة في أبسط تفاصيل يومك. 🌷",

    "تاني حاجة: أتمنى كل سنة جديدة تقرّبك من أحلامك. ✨",

    "تالت حاجة: وجودك جزء من حكاية بقالها أربع سنين، ولسه فيها صفحات جديدة. 🤍"
];

function clickHeart() {

    if (heartClicks >= 3) {
        return;
    }

    heartClicks++;

    const heart = document.getElementById("bigHeart");
    const message = document.getElementById("heartMessage");
    const progress = document.getElementById("heartProgress");

    message.textContent = heartMessages[heartClicks - 1];

    progress.textContent = `${heartClicks} / 3`;

    heart.classList.remove("heart-pop");

    // إعادة تشغيل الأنيميشن عند كل ضغطة
    void heart.offsetWidth;

    heart.classList.add("heart-pop");

    if (heartClicks === 3) {

        document.getElementById("nextHeartButton").hidden = false;

        message.textContent =
            "خلصت الرسائل الثلاثة... مستعدة للتحدي الجاي؟ 🎮";
    }
}

function goToGame() {
    window.location.href = "game.html";
}


let gameScore = 0;
let gameTime = 20;
let gameInterval = null;
let starTimeout = null;
let gameRunning = false;

function startGame() {

    clearInterval(gameInterval);
    clearTimeout(starTimeout);

    gameScore = 0;
    gameTime = 30;
    gameRunning = true;

    document.getElementById("score").textContent = "0 / 5";
    document.getElementById("timer").textContent = gameTime;

    document.getElementById("gameMessage").textContent =
        "يلا! اجمعي النجوم بسرعة ⭐";

    document.getElementById("gameIntro").hidden = true;
    document.getElementById("retryButton").hidden = true;
    document.getElementById("finalGameButton").hidden = true;

    spawnStar();

    gameInterval = setInterval(() => {

        gameTime--;

        document.getElementById("timer").textContent = gameTime;

        if (gameTime <= 0) {
            endGame();
        }

    }, 1000);
}

function spawnStar() {

    if (!gameRunning) return;

    const area = document.getElementById("gameArea");

    area.innerHTML = "";

    const star = document.createElement("button");

    star.textContent = "⭐";
    star.type = "button";
    star.className = "game-star";
    star.setAttribute("aria-label", "اجمعي النجمة");

    star.style.position = "absolute";

    star.style.left =
        (5 + Math.random() * 75) + "%";

    star.style.top =
        (5 + Math.random() * 75) + "%";

    star.addEventListener("click", () => {

        if (!gameRunning) return;

        gameScore++;

        document.getElementById("score").textContent =
            `${gameScore} / 5`;

        if (gameScore >= 5) {

            winGame();

        } else {

            spawnStar();

        }

    });

    area.appendChild(star);

    starTimeout = setTimeout(() => {

        if (gameRunning) {
            spawnStar();
        }

    }, 1200);
}

function endGame() {

    gameRunning = false;

    clearInterval(gameInterval);
    clearTimeout(starTimeout);

    document.getElementById("gameArea").innerHTML = "";

    document.getElementById("gameMessage").textContent =
        "انتهى الوقت! جربي تاني، إنتِ تقدري ⭐";

    document.getElementById("retryButton").hidden = false;
}

function winGame() {

    gameRunning = false;

    clearInterval(gameInterval);
    clearTimeout(starTimeout);

    document.getElementById("gameArea").innerHTML = "";

    document.getElementById("gameMessage").textContent =
        "برافو! جمعتي كل النجوم وفتحتي طريق المفاجأة! ✨";

    document.getElementById("finalGameButton").hidden = false;
}

function goToFinal() {

    window.location.href = "final.html";

}


function openFinalGift() {

    const gift = document.getElementById("finalGift");
    const message = document.getElementById("finalMessage");
    const hint = document.getElementById("finalHint");

    gift.classList.add("gift-open");

    hint.textContent = "مفاجأة صغيرة مخصوص ليكي... ✨";

    setTimeout(() => {

        message.hidden = false;

        // تشغيل احتفال النجوم
        celebrate();

    }, 700);
}

function celebrate() {

    const symbols = ["✨", "⭐", "✦", "💫"];

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.className = "celebration-particle";

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";

        particle.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3500);
    }
}