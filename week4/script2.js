//step1+2
let books=["The Hunger Games","To Kill a Mockingbird","Twilight (Twilight, #1)",
"Pride and Prejudice ","The Book Thief","The Fault in Our Stars",
"The Giving Tree","Wuthering Heights","The Da Vinci Code",
"Memoirs of a Geisha"];

//step3
function generating() {
    let li = document.createElement("ul")

    for (let i = 0; i < books.length; i++) {
        "use strict";
        let ul = document.createElement("li")
        ul.textContent = books[i]
        li.appendChild(ul)

    };

    let body = document.getElementById("main2")
    body.appendChild(li)


    console.log(li)

}
generating();

//step4
let bookDetails = {
    "The Hunger Games": {
        "title": "The Hunger Games",
        "language": "English",
    },
    "To Kill a Mockingbird": {
        "title": "To Kill a Mockingbird",
        "language": "English",
    },
    "Twilight (Twilight, #1)": {
        "title": "Twilight (Twilight, #1)",
        "language": "English",
    },
    "Pride and Prejudice": {
        "title": "Pride and Prejudice",
        "language": "English",
    },
    "The Book Thief": {
        "title": "The Book Thief",
        "language": "English",
    },
    "The Fault in Our Stars": {
        "title": "The Fault in Our Stars",
        "language": "English",
    },
    "The Giving Tree": {
        "title": "The Giving Tree",
        "language": "English",
    },
    "Wuthering Heights": {
        "title": "Wuthering Heights",
        "language": "English",
    },
    "The Da Vinci Code (Robert Langdon, #2)": {
        "title": "The Da Vinci Code (Robert Langdon, #2)",
        "language": "English",
    },
    "Memoirs of a Geisha": {
        "title": "Memoirs of a Geisha",
        "language": "English",
    }
};
    



//step6

let bookImages = {
    "The Hunger Games": "https://images.gr-assets.com/books/1447303603s/2767052.jpg",
    "To Kill a Mockingbirdhttps://images.gr-assets.com/books/1361975680s/2657.jpg":"",
    "Twilight (Twilight, #1)":"https://images.gr-assets.com/books/1361039443s/41865.jpg",

    "Pride and Prejudice":"https://images.gr-assets.com/books/1320399351s/1885.jpg",
    "The Book Thief":"https://images.gr-assets.com/books/1390053681s/19063.jpg",
    "The Fault in Our Stars":"https://images.gr-assets.com/books/1360206420s/11870085.jpg",

    "The Giving Tree":"https://images.gr-assets.com/books/1174210942s/370493.jpg",
    "Wuthering Heights":"https://images.gr-assets.com/books/1388212715s/6185.jpg",
    "The Da Vinci Code (Robert Langdon, #2)":"https://images.gr-assets.com/books/1303252999s/968.jpg",
    "Memoirs of a Geisha":"https://images.gr-assets.com/books/1388367666s/930.jpg"};


    //step7 still working
