const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min=0, max=150) {
    return Math.floor(Math.random()*(max-min) + min);
}

async function render() {
    //console.log('ready to begin typing');
    const paragraphs = document.querySelectorAll("[data-typed]");


    for (const p of paragraphs) {
        const ms = getRandomBetween(150);
       
        await wait(ms);
        p.classList.remove('hide');
        let result = await typeIt(p)
    }
}


async function typeIt(p) {
    const text = p.textContent;

    let sentence = '';

    for (const letter of text) {
        const lms = getRandomBetween(50);
       
        sentence += letter;

        p.textContent = sentence;
        await wait(lms);
    }
}



render()
