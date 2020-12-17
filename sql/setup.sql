DROP TABLES IF EXISTS books;

CREATE TABLES books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    product_image TEXT NOT NULL,
    rating INT,
    price INT NOT NULL, 
    in_stock BOOLEAN NOT NULL
);

