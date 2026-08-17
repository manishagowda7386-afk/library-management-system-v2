export type BookStatus = "Available" | "Borrowed" | "Reserved";

export type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: string;
  status: BookStatus;
  copies: number;
  available: number;
  year: number;
};

export const books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    isbn: "9780132350884",
    status: "Borrowed",
    copies: 8,
    available: 3,
    year: 2008,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    isbn: "9780735211292",
    status: "Available",
    copies: 12,
    available: 10,
    year: 2018,
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    isbn: "9780135957059",
    status: "Available",
    copies: 7,
    available: 6,
    year: 2019,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    category: "Technology",
    isbn: "9780134610993",
    status: "Borrowed",
    copies: 10,
    available: 4,
    year: 2021,
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "Design",
    isbn: "9780465050659",
    status: "Available",
    copies: 6,
    available: 5,
    year: 2013,
  },
  {
    id: 6,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Computer Science",
    isbn: "9780262046305",
    status: "Reserved",
    copies: 5,
    available: 2,
    year: 2022,
  },
  {
    id: 7,
    title: "Deep Learning",
    author: "Ian Goodfellow",
    category: "Machine Learning",
    isbn: "9780262035613",
    status: "Available",
    copies: 9,
    available: 8,
    year: 2016,
  },
  {
    id: 8,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    category: "Design",
    isbn: "9780321965516",
    status: "Borrowed",
    copies: 5,
    available: 2,
    year: 2014,
  },
  {
    id: 9,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database",
    isbn: "9780078022159",
    status: "Available",
    copies: 7,
    available: 7,
    year: 2019,
  },
  {
    id: 10,
    title: "Computer Networking",
    author: "James Kurose",
    category: "Networking",
    isbn: "9780136681557",
    status: "Borrowed",
    copies: 6,
    available: 3,
    year: 2021,
  },
];