const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const casedTutorials = tutorials.map((title) => {
    
    let upper = ""

    for(let i=0;i<title.length;i++)
    {
      
      if(title[i] === " " ){
        //looks for space and makes next letter uppercase
        upper = title[i+1].toUpperCase()
        //splits the title into two substrings without the letter after the space and replaces it with the uppercase letter
        title = title.substring(0,i+1)+upper+title.substring(i+2)
      }
      else if(i === 0){
        upper = title[i].toUpperCase()
        title = title.substring(0,i)+upper+title.substring(i+1)
      }
    }
    return title
  })
  console.log(casedTutorials)
  return casedTutorials;
}
titleCased();
