
var allQuotes ;

allQuotes =
[
  
  {quote:"Be yourself; everyone else is already taken.",auther:"Oscar Wilde"},
   {quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",auther:"Marilyn Monroe"},
   {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",auther:"Albert Einstein"},
  {quote:"So many books, so little time",auther:"Frank Zappa"},
   {quote:"A room without books is like a body without a soul.",auther:"Marcus Tullius Cicero"},
  {quote:"You only live once, but if you do it right, once is enough.",auther:" Mae West"},
  {quote:"Be the change that you wish to see in the world",auther:"Mahatma Gandhi"},
  {quote:"If you tell the truth, you don't have to remember anything.",auther:" Mark Twain"},
   {quote:"Always forgive your enemies; nothing annoys them so much.",auther:"Oscar Wilde"},
   {quote:"We accept the love we think we deserve.",auther:"Stephen Chbosky"},
   {quote:"Without music, life would be a mistake",auther:"Friedrich Nietzsche"},
]
function addQuote()
{
  var random = Math.round(Math.random()*10);
  console.log(random);
  document.getElementById("quotes").innerHTML =  allQuotes[random].quote ;
  document.getElementById("auther").innerHTML =  allQuotes[random].auther ;

}