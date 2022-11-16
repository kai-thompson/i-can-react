interface BookDetailsProps {
  title?: string;
  author?: string;
  description?: string;
}

function BookDetails({ title, author, description }: BookDetailsProps) {
  return (
    <div className="flex flex-col w-[50%]">
      <div>
        <h1 className="font-medium text-2xl">{title}</h1>
        <h2 className="mt-4">
          by <span className="font-semibold">{author}</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
