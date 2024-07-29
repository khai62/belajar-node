function cetakNama(nama){
    return `hallo nama saya ${nama}`;
}

const Pi = 3.14;

const mhs = {
    nama : 'budy',
    umur : 20,
    cetakMhs(){
        return `hallo saya ${this.nama} dan umur saya ${this.umur} tahun`;
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.Pi = Pi;
// module.exports.mhs = mhs;

// cara yang lebih baik dari export di atas 

module.exports = {cetakNama, Pi, mhs};