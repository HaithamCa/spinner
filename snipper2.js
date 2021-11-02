const snipper = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let timeout = 100
for (const snip of snipper) {

    setTimeout(() => {
        process.stdout.write(snip)
    }, timeout);
    timeout += 200
}

// setTimeout(() => {
//     process.stdout.write('\r|   ');
// }, 100)

// setTimeout(() => {
//     process.stdout.write('\r/   ');
// }, 300)

// setTimeout(() => {
//     process.stdout.write('\r-   ');
// }, 500)


// setTimeout(() => {
//     process.stdout.write('\r\\   ');
// }, 700)

// setTimeout(() => {
//     process.stdout.write('\r|   ');
// }, 900)