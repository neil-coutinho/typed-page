const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function render() {
    console.log('ready to begin typing');
    const paragraphs = document.querySelectorAll("[data-typed]");
   
    for(const p of paragraphs) {
        await wait(1000);
        let result = await typeIt(p)
    }
}


function typeIt(p) {
    console.log(p)
}



render()
