const ops = [
    "Tell me about yourself.",
    "What is website development?",
    "What is Front-end development?",
    "What are/is your strength/s and weakness/es?",
    "Elaborate what is framework.",
    "Explain the HTTP & HTTP/2.",
    "What's your most struggle from your past experience?",
    "What is web3 and how do you adhere to it in your web design?",
    "What do you know about Cpanel?",
    "What is Wordpress?",
    "What do you know about boostrap?",
]

const used = new Set()
const quest = document.getElementById("quest")
const btn = document.getElementById("btn")

function interview() {
    while(true) {
        const random = Math.floor(Math.random() * ops.length)

        if(used.has(random)) continue

        const question = ops[random]
        quest.innerHTML = question
        used.add(random)
        break
    }
}

btn.addEventListener("click", function() {
    btn.innerHTML = "next"
    interview()
})