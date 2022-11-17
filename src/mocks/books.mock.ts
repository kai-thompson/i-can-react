export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  image: string;
  price: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
    image: "https://m.media-amazon.com/images/I/71GZLY8-CwL.jpg",
    price: 420.99,
  },
  {
    id: 2,
    title: "The Children of Hurin",
    author: "J.R.R. Tolkien",
    year: 1954,
    description:
      "The Children of Hurin is a 2007 fantasy novel by J. R. R. Tolkien, based on a story begun by Tolkien in 1918 and expanded after his death by his son Christopher Tolkien. It is the first new work of fiction by Tolkien to be published since the 1977 The Silmarillion. The novel was published in hardcover by Houghton Mifflin Harcourt on 1 November 2007, and in paperback by HarperCollins on 1 November 2008. The book was a New York Times bestseller, and was nominated for the 2008 World Fantasy Award for Best Novel.",
    image: "https://m.media-amazon.com/images/I/71PVOtvPvVL.jpg",
    price: 69.99,
  },
  {
    id: 3,
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    year: 1977,
    description:
      "The Silmarillion is a book of J. R. R. Tolkien's legendarium, a history of the fictional world of Middle-earth. It was published in 1977, six years after Tolkien's death, by his son Christopher Tolkien, with assistance from his wife, Barbara, and other family members and friends. The Silmarillion is a compilation of earlier and unconnected tales, poems, and fictional histories that Tolkien had written since the 1920s. It is the source of much of the material in The Lord of the Rings and The Hobbit, and is the earliest published work of Middle-earth literature.",
    image: "https://m.media-amazon.com/images/I/616OoT656pL.jpg",
    price: 23.99,
  },
  {
    id: 4,
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    description:
      "The Fellowship of the Ring is the first volume of J. R. R. Tolkien's epic fantasy trilogy, The Lord of the Rings. It was written by Tolkien and illustrated by Alan Lee, with additional text by Christopher Tolkien. It was published in three volumes in 1954 and 1955. The book is set in the fictional world of Middle-earth, which is a secondary world that is part of Tolkien's larger legendarium. The story began as a sequel to Tolkien's 1937 children's fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
    image: "https://m.media-amazon.com/images/I/41lTssIGVsL.jpg",
    price: 123.99,
  },
  {
    id: 5,
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    year: 1954,
    description:
      "The Two Towers is the second volume of J. R. R. Tolkien's epic high fantasy novel The Lord of the Rings. It is preceded by The Fellowship of the Ring and followed by The Return of the King. The Two Towers is the longest of the three volumes in The Lord of the Rings, and is the second part of the story of the quest of the hobbits Frodo and Sam to destroy the One Ring. The Two Towers was published in 1954, and is set in Middle-earth, a fictional world in which the events of the story take place. The story began as a sequel to Tolkien's 1937 children's fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
    image: "https://m.media-amazon.com/images/I/41fPsDUuGBL.jpg",
    price: 321.99,
  },
];

export default books;
