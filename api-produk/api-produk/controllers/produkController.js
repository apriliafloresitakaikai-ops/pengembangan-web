const db = require('../db');

// CREATE - Tambah produk
exports.creaproduk = (req, res) => {
  const { nama, harga, stok } = req.body;
  db.query(
     'INSERT INTO produk (nama, harga, stok) VALUES (?, ?, ?)',
    [nama, harga, stok],
    (err, result) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({ message: 'Produk berhasil ditambahkan', id: result.insertId });
    }
  );
};

// READ -Semua produk
exports.getAllproduk = (req, res) => {
  db.query('SELECT * FROM produk', (err, results) =>{
     if (err) return res.status(500).json({ error: err.message });
     res.json(results);
  
    });
};

//READ - Produk by ID
exports.getProdukById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM produk WHERE id = ?', [id], (err, result ) =>{
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'produk tidak ditemukan' });
        res.json(result[0]);
    });
};

//UPDATE - Produk by ID
exports.UpdateProduk = (req, res) => {
   const { id } = req.params;
   const { nama, harga, stok } = req.body;
   db.query(
      'UPDATE produk SET nama?, harga?, stok?, WHERE id?',
    [nama, harga, stok, id],
    (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produk berhasil diupdate' });
    }

  );

};

// DELETE - Produk by ID 
exports.deleteProduk = (req, res) =>{
  const { id } = req.params;
  db.query('DELETE FROM produk WHERE id=?', [id], (err, result)=>{
    if(err) return res.status(500).json({ error : err.message});
    res.json({ message: 'Produk berhasil dihapus' });
  });

};