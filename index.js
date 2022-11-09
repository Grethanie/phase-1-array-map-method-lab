const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const newTutorials = [];
  for (let title of tutorials) {
    const newTitle = title.split(" ");
    for (let i = 0; i < newTitle.length; i++) {
      newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1);
    }
    const bestTitle = newTitle.join(" ");
    newTutorials.push(bestTitle);
  }
  console.log(newTutorials);
  return newTutorials;

  // return (titles = titles.map((title) => {
  //   title = title
  //     .split(" ")
  //     .map((word) => {
  //       word = word.charAt(0).toUpperCase() + word.slice(1);
  //       console.log(word);
  //     })
  //     .join(" ");
  // }));

  // titles.forEach((title) => {
  //   title = title
  //     .split(" ")
  //     .map((word) => {
  //       word = word.charAt(0).toUpperCase() + word.slice(1);
  //       console.log(word);
  //     })
  //     .join(" ");
  // });
  // return titles;
};
