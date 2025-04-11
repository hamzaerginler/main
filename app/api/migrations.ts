import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        comments TEXT NOT NULL,
        image TEXT NOT NULL,
        alt TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL
      );
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
     }
     console.log("articles table created successfully.");
    }
   );
  });
}