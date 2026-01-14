let btn = document.querySelector('#newQuote');

let quote = document.querySelector('.textArea');

let person = document.querySelector('.person');

const quotes = [
    {
        quote: "It is never too late to be what you might have been",
        person : "George Eliot"
            },{
quote: "Not all those who wander are lost",
        person : "J.R.R. Tolkien"
            },{
quote: "It’s the possibility of having a dream come true that makes life interesting.",
        person : "Paulo Coelho"
            },{
quote: "We accept the love we think we deserve.",
        person : "Stephen Chbosky"
            },{
quote: "Whatever our souls are made of, his and mine are the same",
        person : "Emily Brontë"
            },{
quote: "Who controls the past controls the future. Who controls the present controls the past. ",
        person : "George Orwell"
            },{
quote: "Brave doesn’t mean you’re not scared. It means you go on even though you’re scared.",
        person : "Angie Thoma"
            },{
quote: "It matters not what someone is born, but what they grow to be.",
        person : "JK Rowling"
            },

];
btn.addEventListener('click', function(){
let random = Math.floor(Math.random()* quotes.length);
quote.innerText =quotes[random].quote;
person.innerText =quotes[random].person;

})

