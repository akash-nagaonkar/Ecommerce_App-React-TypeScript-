import { Link } from "react-router-dom";
import { FC } from "react";

interface BookCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const BookCard: FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="border p-4 rounded">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;