
const contact = require('./contacts')

// const main = async () => {
//     const nama = await listPertanyaan('Masukkan nama anda :')
//     const noHp = await listPertanyaan('Masukkan no hp anda :')
//     const email = await listPertanyaan('Masukkan email anda :')

//     simpanContact(nama,  noHp, email)
// }

// main();

// console.log(process.argv)
const yargs = require('yargs')

console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder:{
        nama:{
            describe: 'Nama Lengkap',
            demandOptions: true,
            type: 'string',
        },
        email:{
            describe: 'Email',
            demandOptions: false,
            type: 'string',
        },
        hoHp:{
            describe: 'Nama Lengkap',
            demandOptions: true,
            type: 'string',
        }
    },
    handler(argv){
        contact.simpanContact(argv.nama, argv.email, argv.noHp)
    }
})

yargs.parse()
