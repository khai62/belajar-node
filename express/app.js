// Mengimpor modul express dan express-ejs-layouts
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// Mengimpor fungsi loadContact dari file utils/contacts
const { loadContact } = require('./utils/contacts')

// Membuat aplikasi Express
const app = express()

// Menentukan port yang akan digunakan
const port = 3000

// Mengatur view engine yang digunakan adalah EJS
app.set('view engine', 'ejs')

// Menggunakan middleware express-ejs-layouts
app.use(expressLayouts)

// Mengatur folder 'public' sebagai folder untuk file statis
app.use(express.static('public'))

// Mendefinisikan route untuk URL root ('/')
app.get('/', (req, res) => {
  // Data mahasiswa yang akan dikirim ke view
  const mahasiswa = [
    { nama: 'khairuddin', email: 'khai@kaha' },
    { nama: 'abdul', email: 'abdul@kaha' },
    { nama: 'ghani', email: 'ghani@kaha' },
  ]
  // Merender view 'index' dengan data mahasiswa, nama, layout, dan title
  res.render('index', { mahasiswa, nama: 'index', layout: 'layouts/main_layout', title: 'halaman index' })
})

// Mendefinisikan route untuk URL '/about'
app.get('/about', (req, res) => {
  // Merender view 'about' dengan data nama, layout, dan title
  res.render('about', {
    nama: 'about',
    layout: 'layouts/main_layout',
    title: 'halaman About'
  })
})

// Mendefinisikan route untuk URL '/contact'
app.get('/contact', (req, res) => {
  // Menggunakan fungsi loadContact untuk mendapatkan data contacts
  const contacts = loadContact()
  // Merender view 'contact' dengan data layout, nama, title, dan contacts
  res.render('contact', { layout: 'layouts/main_layout', nama: 'contact', title: 'halaman contact', contacts })
})

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
