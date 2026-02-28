-- ################################################
-- CONFIGURACIÓN DE BASE DE DATOS PARA BOUTIQUE BOUTIQUE
-- ################################################

-- 1. Tabla de Categorías
CREATE TABLE categories (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  slug TEXT UNIQUE NOT NULL
);

-- 2. Tabla de Productos
CREATE TABLE products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  category_id BIGINT REFERENCES categories(id) ON DELETE SET NULL,
  image_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Tabla de Ventas (Sales)
CREATE TABLE sales (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  total DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'canceled'
  paypal_order_id TEXT,
  client_email TEXT,
  client_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Tabla de items de la venta (Sale Items)
CREATE TABLE sale_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  sale_id BIGINT REFERENCES sales(id) ON DELETE CASCADE,
  product_id BIGINT REFERENCES products(id),
  quantity INT NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL
);

-- ################################################
-- DATOS DE PRUEBA (OPCIONAL)
-- ################################################

INSERT INTO categories (name, slug, description) VALUES
('Ropa de Invierno', 'invierno', 'Colección de abrigos y bufandas'),
('Ropa de Verano', 'verano', 'Prendas ligeras y frescas'),
('Urbano', 'urbano', 'Moda de calle moderna');

INSERT INTO products (name, description, price, stock, category_id, slug) VALUES
('Abrigo de Lana Premium', 'Abrigo elegante 100% lana', 250.00, 10, 1, 'abrigo-lana'),
('Camiseta Oversize Vortex', 'Algodón pesado 250gsm', 45.00, 50, 3, 'camiseta-vortex'),
('Pantalón Lino Celeste', 'Perfecto para la playa', 60.00, 20, 2, 'pantalon-lino');
