const yargs = require('yargs')
const notes = require('./notes.js')


yargs.command({
    command: 'add',
    discribe: 'Add a new note',
    builder: {
        title: {
            discribe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            discribe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
         notes.addNote(argv.title,argv.body)
    }
    
})

yargs.command({
    command: 'remove',
    discribe: 'remove the note',
    builder: {
        title: {
            discribe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
         notes.removeNote(argv.title)
    }
    
})

yargs.command({
    command: 'list',
    discribe: 'list the note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    discribe: 'read the note',
    builder:{
        title:{
            discribe:'read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})



yargs.parse()

