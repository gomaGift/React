import React from "react";
import EmojiCard from "./EmojiCard";
import { emojiDictionary } from "../EmojiDictionary";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="grid-container">
        {emojiDictionary.map((emojiCard) => (
          <EmojiCard
            key={emojiCard.id}
            emoji={emojiCard.emoji}
            label={emojiCard.label}
            meaning={emojiCard.meaning}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
