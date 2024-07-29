// cara menggunakan core modul 
// dokumentasi core modul filesystem https://nodejs.org/docs/latest/api/fs.html 

const fs = require('fs');

// console.log(fs);

// menulis file ke file (synchronous)
// fs.writeFileSync('test.txt', 'hello world');


// membaca isi data file (synchronous) 
// const baca = fs.readFileSync('test.txt', 'utf-8');
// console.log(baca);

// membaca isi data file (asynchronous) 
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('masukkan nama anda : ', (nama) =>{
    rl.question('masukkan no hp :', (noHp) =>{
        const contact = {nama, noHp};
        const file = fs.readFileSync('contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('contacts.json', JSON.stringify(contacts));
        console.log(`Terimakasih sudah memasukkan data`);
        rl.close();

    })
})
