const pool = require('../models/Books');

module.exports = class Book {
    id;
    title;
    product_image;
    price;
    rating;
    in_stock;

    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.product_image = row.product_image;
      this.price = row.price;
      this.rating = row.rating;
      this.in_stock = row.in_stock;

    }

    static async insert({ title, product_image, price, rating, in_stock }) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, product_image, price, rating, in_stock) VALUES($1, $2, $3, $4, $5) RETURNING*',
        [title, product_image, price, rating, in_stock]
      );

      return new Book(rows[0]);
    }

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM books WHERE=$1',
        [id]
      );
    
      if(!rows[0]) throw new Error(`No book with id ${id}`);
      return new Book(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM books *',
      );
      return rows.map(row => new Book(row));
    }

  // are delete and update necessary for model?
};
