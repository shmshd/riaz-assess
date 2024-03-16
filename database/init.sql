CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO items (title, completed) VALUES ('Buy groceries', FALSE);
INSERT INTO items (title, completed) VALUES ('Finish homework', TRUE);
INSERT INTO items (title, completed) VALUES ('Call mom', FALSE);
INSERT INTO items (title, completed) VALUES ('Go for a run', TRUE);
INSERT INTO items (title, completed) VALUES ('Read a book', FALSE);
