import React, { RefObject } from "react";
import { CiFileOn } from "react-icons/ci";
import { motion } from "framer-motion";
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  refrence?: RefObject<Element>;
};
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  refrence,
}) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      className="max-w-60 rounded overflow-hidden shadow-lg m-4 h-80 bg-black"
    >
      <img className="w-full h-40 object-cover" src={imageUrl} alt="Card" />
      <CiFileOn className="m-3" />
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base ">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
