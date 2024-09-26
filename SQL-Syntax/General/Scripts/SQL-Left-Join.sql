use mydatabase;

CREATE TABLE user1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    role VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE category1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    code VARCHAR(50),
    name VARCHAR(255),
    slug VARCHAR(255),
    description TEXT,
    status VARCHAR(50),
    photo VARCHAR(255)
);

CREATE TABLE product1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    user_id INT,
    code VARCHAR(50),
    name VARCHAR(255),
    slug VARCHAR(255),
    description LONGTEXT,
    photo VARCHAR(255),
    qty DOUBLE,
    unit VARCHAR(50),
    price DOUBLE,
    status VARCHAR(50)
);

INSERT INTO mydatabase.user1 (email, name, password, address, role, status)
VALUES 
    ('Loid@gmail.com', 'Loid', 'moza', 'Westalist street', 'Psychiatrist', 'active'),
    ('forger@gmail.com', 'Forger', 'mozamoz', 'Ostania street', 'psychologist', 'active'),
    ('twilight@gmail.com', 'Twilight', 'handler', 'Berlin street', 'Spy', 'secret');

INSERT INTO mydatabase.category1 (user_id, code, name, slug, description, status, photo)
VALUES 
    (1, 'S-01', 'Place', 'category-one', 'Zoo', 'active', 'photo1.jpg'),
    (2, 'S-02', 'Performance', 'category-two', 'Stella', 'active', 'photo2.jpg'),
    (3, 'S-03', 'Ranking', 'category-three', 'Starlight', 'secret', 'photo3.jpg');

INSERT INTO mydatabase.product1 (category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)
VALUES 
    (1, 1, 'pro-01', 'Hand Gun', 'p-one', 'Traditional Weapon', 'product1.jpg', 15.0, 'pcs', 100.0, 'available'),
    (2, 2, 'prod-02', 'AK-47', 'p-two', 'Automatic Weapon', 'product2.jpg', 10.0, 'pcs', 20.0, 'available'),
    (3, 3, 'prod-03', 'Knife', 'p-three', 'Hand Knife', 'product3.jpg', 30.0, 'pcs', 35.0, 'available');
    
   SELECT 
    u.id AS user_id,
    u.email,
    u.name,
    u.address,
    p.id AS product_id,
    p.name AS product_name,
    c.id AS category_id,
    c.name AS category_name
FROM 
    mydatabase.user1 u
LEFT JOIN 
    mydatabase.product1 p ON u.id = p.user_id       
LEFT JOIN 
    mydatabase.category1 c ON p.category_id = c.id;

