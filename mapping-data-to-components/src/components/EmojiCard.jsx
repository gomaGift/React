import React from "react";

export default function EmojiCard(props) {
  return (
    
      
      <div className="grid-item">
        <dt>
          <span className="emoji" role="img">
            {props.emoji}
          </span>
          <span className="label">{props.label}</span>
        </dt>
        <dd className="meaning">
         {props.meaning}
        </dd>
      </div>

       

  );
}
