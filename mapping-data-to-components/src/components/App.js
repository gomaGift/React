import React from "react";
import EmojiCard from "./EmojiCard";
import { emojiDictionary } from "../EmojiDictionary";
function createEmojiCard(emojiCard){
  return <EmojiCard 
  key = {emojiCard.id}
  emoji = {emojiCard.emoji}
  label = {emojiCard.label}
  meaning = {emojiCard.meaning}
  
  />
}

function App() {
  return (
    <div >
       <h1> 
      <span>emojipedia</span>
    </h1>
    <div className="grid-container">
     
      {emojiDictionary.map(createEmojiCard)}
    </div>
    </div>
  );
}

export default App;
