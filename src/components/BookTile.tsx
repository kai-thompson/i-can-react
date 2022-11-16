interface BookTileProps {
  title: string;
  image: string;
  price: number;
}

function BookTile({ title, image, price }: BookTileProps) {
  return (
    <div className="flex content-center shadow-xl hover:shadow-2xl duration-300 rounded-md max-w-[20rem]">
      <img
        src={image}
        alt={`${title} cover`}
        className="object-contain h-64 w-auto rounded-l-md"
      />
      <div className="flex flex-col justify-between py-2 px-6">
        <h1 className="text-xl font-inter font-medium">{title}</h1>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default BookTile;
