import React from "react";

interface BookTileProps {
  title: string;
  image: string;
  price: number;
}

const BookTile = ({ title, image, price }: BookTileProps) => {
  return (
    <div className="flex w-48 content-center">
      <img
        src={image}
        alt={`${title} cover image`}
        className="object-contain h-48 w-auto"
      />
      <div className="flex flex-col justify-between py-2 ml-4">
        <h1>{title}</h1>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default BookTile;
