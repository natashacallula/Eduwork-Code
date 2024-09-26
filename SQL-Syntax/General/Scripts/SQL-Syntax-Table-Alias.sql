use mydatabase;

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    gender VARCHAR(10),
    address VARCHAR(255)
);
	INSERT INTO users (user_id, name, email, phone, gender, address)
    VALUES
    (1, 'Alice Johnson', 'alice.johnson@example.com', '081234567890', 'Female', 'Jl. Melati No. 10, Jakarta'),
    (2, 'Budi Santoso', 'budi.santoso@example.com', '082345678901', 'Male', 'Jl. Kenanga No. 5, Bandung'),
    (3, 'Cindy Sari', 'cindy.sari@example.com', '083456789012', 'Female', 'Jl. Mawar No. 20, Surabaya'),
    (4, 'Dedi Prasetyo', 'dedi.prasetyo@example.com', '084567890123', 'Male', 'Jl. Anggrek No. 15, Yogyakarta'),
    (5, 'Eka Rahmawati', 'eka.rahmawati@example.com', '085678901234', 'Female', 'Jl. Cempaka No. 30, Medan'),
    (6, 'Fajar Utama', 'fajar.utama@example.com', '086789012345', 'Male', 'Jl. Jati No. 25, Makassar'),
    (7, 'Gina Purnamasari', 'gina.purnamasari@example.com', '087890123456', 'Female', 'Jl. Pahlawan No. 12, Bali'),
    (8, 'Hendra Setiawan', 'hendra.setiawan@example.com', '088901234567', 'Male', 'Jl. Bunga No. 18, Semarang'),
    (9, 'Indah Ayu', 'indah.ayu@example.com', '089012345678', 'Female', 'Jl. Cinta No. 40, Palembang'),
    (10, 'Joko Widodo', 'joko.widodo@example.com', '090123456789', 'Male', 'Jl. Kebangsaan No. 45, Batam'),
    (11, 'Kiki Suryani', 'kiki.suryani@example.com', '091234567890', 'Female', 'Jl. Ratu No. 35, Bogor'),
    (12, 'Lina Kusuma', 'lina.kusuma@example.com', '092345678901', 'Female', 'Jl. Bintang No. 50, Cirebon'),
    (13, 'Manto Supriyadi', 'manto.supriyadi@example.com', '093456789012', 'Male', 'Jl. Keluarga No. 60, Solo'),
    (14, 'Nina Farida', 'nina.farida@example.com', '094567890123', 'Female', 'Jl. Sukses No. 70, Lampung'),
    (15, 'Oka Pramudita', 'oka.pramudita@example.com', '095678901234', 'Male', 'Jl. Bahagia No. 80, Palu'),
    (16, 'Putri Melati', 'putri.melati@example.com', '096789012345', 'Female', 'Jl. Sejahtera No. 90, Jambi'),
    (17, 'Rudi Hartono', 'rudi.hartono@example.com', '097890123456', 'Male', 'Jl. Fajar No. 100, Kupang'),
    (18, 'Sari Handayani', 'sari.handayani@example.com', '098901234567', 'Female', 'Jl. Candi No. 110, Banjarmasin'),
    (19, 'Teguh Setyawan', 'teguh.setyawan@example.com', '099012345678', 'Male', 'Jl. Kasih No. 120, Samarinda'),
    (20, 'Umi Aminah', 'umi.aminah@example.com', '090123456780', 'Female', 'Jl. Harapan No. 130, Pekanbaru'),
    (21, 'Vina Ananda', 'vina.ananda@example.com', '081234567899', 'Female', 'Jl. Mawar No. 140, Medan'),
    (22, 'Wira Adi', 'wira.adi@example.com', '082345678900', 'Male', 'Jl. Anggrek No. 150, Surabaya'),
    (23, 'Xena Permata', 'xena.permata@example.com', '083456789011', 'Female', 'Jl. Melati No. 160, Jakarta'),
    (24, 'Yudi Pranata', 'yudi.pranata@example.com', '084567890122', 'Male', 'Jl. Kenanga No. 170, Bandung'),
    (25, 'Zara Dewi', 'zara.dewi@example.com', '085678901233', 'Female', 'Jl. Bunga No. 180, Yogyakarta'),
   	(26, 'Yara Hale', 'yara@example.com', '5678912345', 'Female', '909 Cedar St'),
   	(27, 'Zane Ives', 'zane@example.com', '6789123456', 'Male', '101 Spruce St'),
   	(28, 'Amy James', 'amy@example.com', '7891234567', 'Female', '202 Birch St'),
   	(29, 'Brian Kelly', 'brian@example.com', '8912345678', 'Male', '303 Willow St'),
   (30, 'Chloe Lewis', 'chloe@example.com', '9123456789', 'Female', '404 Aspen St');
   
   SELECT 
   u.name AS UserName,
   u.phone AS ContactNumber,
   u.address AS Location
   from mydatabase.users u ;
