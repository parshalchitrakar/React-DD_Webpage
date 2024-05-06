import React, { useRef } from "react";
import Card from "./Card";
import data from "../data.json";
const Foreground = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="absolute inset-0 flex flex-wrap ">
      {data.map(({ title, description, imageUrl, id }) => {
        return (
          <Card
            title={title}
            description={description}
            imageUrl={imageUrl}
            key={id}
            refrence={ref}
          />
        );
      })}
    </div>
  );
};

export default Foreground;
