const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())

app.get('/api/produk', async (req, res) => {
    const produk = await db('toko').select(
      'id',
      'nama_produk', 
      'deskripsi',
      'harga',
      'stok',
      'gambar',
      'kategori'
    )
    return res.status(200).json({ data: produk })
})

app.get('/api/produk/:id', async (req,res) => {
    const { id } = req.params

    const produk = await db('produk').where({id}).select('id', 'produk')
    return res.status(200).json({ data: produk})
})


app.post('/api/pesanan', (req,res) => {
    const payload = req.body.map((row) => ({
        ...row,
        created_at: new Date(),
    }))
})

app.post('/api/pengguna', (req,res) => {
    const payload = req.body.map((row) => ({
        ...row,
        created_at: new Date(),
    }))
})

app.get('/api/pengguna', async (req, res) => {
    const pengguna = await db('pengguna').select(
        'id',
        'nama', 
        'email',
        'password',
        'alamat',
        'no_telepon',
    )
    return res.status(200).json({ data: pengguna})
})


app.post('/api/pesanan', (req,res) => {
    const payload = req.body.map((row) => ({
        ...row,
        created_at: new Date(),
    }))

    db('pengguna', 'pesanan')
    .insert(payload)
    .returning('*')
    .then((result) => {
        return res
        .status(200)
        .json({message: 'Data berhasil dibuat', data: result})
    })
})

app.listen(5000, () => console.log('Server is running!'))
