import { LanguageResolver } from "../../../locale";
import { BookModel } from "./model";

const books: (t: LanguageResolver) => BookModel[] = () => [
  {
    title: "1984",
    author: "George Orwell",
    coverImage: "https://m.media-amazon.com/images/I/51uSJ6RSDaL.jpg",
    link: "https://www.amazon.it/1984-George-Orwell/dp/8804796650",
    tags: ["literature"],
  },
  {
    title: "A First Course in Operations Research",
    author: "Giuseppe Lancia",
    coverImage: "https://m.media-amazon.com/images/I/6198aK8RwdL._SL1436_.jpg",
    link: "https://www.amazon.it/First-Course-Operations-Research-Lecture/dp/1696078369",
    tags: ["programming", "algorithms"],
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    coverImage: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg",
    link: "https://www.amazon.it/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    tags: ["programming", "softwareEngineering"],
  },
  {
    title: "Dive Into Design Patterns",
    author: "Alexander Shvets",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543945452i/43125355.jpg",
    link: "https://refactoring.guru/design-patterns/book",
    tags: ["programming", "softwareEngineering"],
  },
  {
    title: "Emotional Design",
    author: "Donald Norman",
    coverImage: "https://m.media-amazon.com/images/I/71kCAUqJFCL._SL1264_.jpg",
    link: "https://www.amazon.it/Emotional-design-Donald-Norman/dp/8838788006",
    tags: ["design", "ux"],
  },
  {
    title: "Fluent React",
    author: "Tejas Kumar",
    coverImage: "https://m.media-amazon.com/images/I/71LeIRBPrtL._SL1500_.jpg",
    link: "https://www.amazon.it/Fluent-React-Performant-Intuitive-Applications/dp/1098138716",
    tags: ["programming", "web", "react"],
  },
  {
    title:
      "Flutter Complete Reference 2.0: The ultimate reference for Dart and Flutter",
    author: "Alberto Miola",
    coverImage: "https://m.media-amazon.com/images/I/41dUO2eWkhL._SL1250_.jpg",
    link: "https://www.amazon.it/dp/B0C5P7VXBL",
    tags: ["programming", "mobile", "flutter"],
  },
  {
    title:
      "Human-Computer Interaction. I fondamenti dell'interazione tra persone e tecnologie",
    author: "Luciano Gamberini, Luca Chittaro, Fabio Paternò",
    coverImage: "https://m.media-amazon.com/images/I/71sO9wlYmtL._SL1500_.jpg",
    link: "https://www.amazon.it/Human-Computer-Interaction-fondamenti-dellinterazione-tecnologie/dp/8871927826",
    tags: ["design", "ux"],
  },
  {
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    coverImage: "https://m.media-amazon.com/images/I/61Mw06x2XcL._SL1500_.jpg",
    link: "https://www.amazon.it/Introduzione-agli-algoritmi-strutture-dati/dp/8838656215",
    tags: ["programming", "algorithms"],
  },
  {
    title: "Javascript: The Definitive Guide",
    author: "David Flanagan",
    coverImage: "https://m.media-amazon.com/images/I/91hUer84PpL._SL1500_.jpg",
    link: "https://www.amazon.it/Javascript-Definitive-Most-used-Programming-Language/dp/1491952024",
    tags: ["programming", "web", "javascript"],
  },
  {
    title: "Learn React Hooks",
    author: "Daniel Bugl",
    coverImage: "https://m.media-amazon.com/images/I/716Pujg0d4L._SL1360_.jpg",
    link: "https://www.amazon.it/Learn-React-Hooks-refactor-applications/dp/1838641440",
    tags: ["programming", "web", "react"],
  },
  {
    title: "Learning React",
    author: "Alex Banks, Eve Porcello",
    coverImage: "https://m.media-amazon.com/images/I/91uFdkCJmAL._SL1500_.jpg",
    link: "https://www.amazon.it/Learning-React-Modern-Patterns-Developing/dp/1492051721",
    tags: ["programming", "web", "react"],
  },
  {
    title: "Machine Learning for Coders",
    author: "Andrej Karpathy",
    coverImage: "https://m.media-amazon.com/images/I/81z-5cK1v1L._SL1500_.jpg",
    link: "https://www.amazon.it/Machine-Learning-Coders-Programmers-Intelligence/dp/1492078190",
    tags: ["programming", "machineLearning"],
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    coverImage: "https://m.media-amazon.com/images/I/71e6ndHEwqL._SL1500_.jpg",
    link: "https://www.amazon.it/Refactoring-Improving-Design-Existing-Code/dp/0134757599",
    tags: ["programming", "softwareEngineering"],
  },
  {
    title: "Reti di calcolatori",
    author: "Larry L. Peterson, Bruce S. Davie",
    coverImage: "https://m.media-amazon.com/images/I/71abb9SaD0L._SL1500_.jpg",
    link: "https://www.amazon.it/Reti-calcolatori-Larry-L-Peterson/dp/8838786399",
    tags: ["networks"],
  }
];

export { books };
