let Obj = {
    name : "Arunkumar"
}
console.log(Obj.name);

console.log(document);
// console.dir(document); // dir is static method
console.log(document.location.href);// url get
console.log(document.documentURI); // same url get
console.log(document.head);
console.log(document.body);
// Task
// const userName = prompt("What is your name?")

// document.title = `Welcome, ${userName}`

// Task
console.log(document.body.children[0].textContent);
// Task
console.log(document.body.children[1].children[0].textContent);
// Task
console.log(document.images.length);
// Task
const userInput = prompt("What is your name?")

document.body.children[0].textContent = `Welcome ${userInput}
${document.body.children[0].textContent}`;
