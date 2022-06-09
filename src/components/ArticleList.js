import React from "react";
import Article from "./Article"

const bentoBoxEmoji = "🍱";
const coffeEmoji = "☕️";

function calculateEmojis(minutes) {
  const emojis = [];
  if(minutes < 30) {
    let numberOfEmojis = Math.ceil(minutes/5);
    while(numberOfEmojis > 0) {
      emojis.push(coffeEmoji);
      numberOfEmojis--;
    }
  }
  else {
    let numberOfEmojis = Math.ceil(minutes/10);
    while(numberOfEmojis > 0) {
      emojis.push(bentoBoxEmoji);
      numberOfEmojis--;
    }
  }
  console.log(emojis);
  return emojis;
}

calculateEmojis(29);

function ArticleList({ posts }) {
  const articles = posts.map((article) => {
    return <Article 
              key={ article.id } 
              title={ article.title }
              date={ article.date }
              preview={ article.preview }
              minutes={ article.minutes }
              emojis={ calculateEmojis(article.minutes) }
            />
  });

  return (
    <main>
      { articles }
    </main>
  );
}

export default ArticleList;