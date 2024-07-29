const fs = require('fs');
// const readline = require('readline');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// membuat folder data jika blum ada 
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}


// membuat file contact.json jika belum ada 
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}




// const listPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         })
//     })
// }


const simpanContact = (nama, noHp, email) => {
    const contact = {nama, noHp, email};
    const file = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log('nama sudah terdaftar, gunakan nama lain')
        return false

    }
    contacts.push(contact);

    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
    console.log(`Terimakasih sudah memasukkan data`);
}


module.exports = { simpanContact}