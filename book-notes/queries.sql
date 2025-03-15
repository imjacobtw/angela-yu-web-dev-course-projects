CREATE TABLE book_note  (
	id SERIAL PRIMARY KEY,
	isbn CHAR(13) UNIQUE NOT NULL,
	title TEXT NOT NULL,
	author TEXT NOT NULL,
	cover TEXT,
	rating INT NOT NULL,
	review TEXT NOT NULL,
	date_read DATE NOT NULL
);