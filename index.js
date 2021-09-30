// filesystem is needed for everything!
const fs = require('fs');

//****************************************************************************
// Backend: Node.js CodeFlow Übung lev1_1: fs

// öffne die Datei blog1.txt
// ändere den Inhalt(Text) in der Datei blog1.txt
fs.writeFile('./blog1.txt', 'Hello World', (err) => {
    if (err) throw err;

    fs.readFile('./blog1.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Text old:", data);
        fs.writeFile('./blog1.txt', 'Hallo Welt', (err) => {
            if (err) throw err;
            fs.readFile('./blog1.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log("Text new:", data);
            });
        });
    });
});

//erstelle eine neue Datei blog2.txt und schreibe etwas in sie hinein
fs.writeFile('./blog2.txt', "I'm a second file...", (err) => {
    if (err) throw err;
    fs.readFile('./blog2.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("blog2.txt:", data);
    });
});

// erstelle einen neuen Ordner “assets” und kümmere dich um den Fehler
// erstelle einen neuen Ordner assets, falls er nicht existiert. Falls er existiert lösche ihn
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
            throw (err);
        };
        console.log(`Folder './assets' created`);
    });
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
            throw (err);
        };
        console.log(`Folder './assets' deleted`);
    });
}

// Lösche eine Datei “delete.txt” aber nur wenn sie existiert
if (fs.existsSync('./delete.txt')) {
    fs.rm('./delete.txt', (err) => {
        if (err) {
            console.log(err)
            throw (err);
        };
        console.log(`File './delete.txt' deleted`);
    });
}
else {
    console.log(`File './delete.txt' does not exist`);
}

// Erstelle eine Datei Hello.txt und füge ihr etwas Text hinzu. Nenne die Datei in HelloWorld.txt um
if (fs.existsSync('./HelloWorld.txt')) {
    fs.rmSync('./HelloWorld.txt');
}
fs.writeFile('./Hello.txt', "hello there...", (err) => {
    if (err) throw err;
    console.log("File './Hello.txt' created");
    fs.rename('./Hello.txt', './HelloWorld.txt', (err, data) => {
        if (err) throw err;
        console.log("File './Hello.txt' renamed to './HelloWorld.txt'");
    });
});

//****************************************************************************
// Backend: Node.js CodeFlow Übung lev2_1: fs
// Das Ziel dieser Übung ist es, den Inhalt einer.JSON Datei in eine txt umzuwandeln.
// * erstelle dir eine JSON Datei mit dem Code aus dem Kommentarbereich
// * importiere die JSON Datei in deiner index.js
// * Nutze File System um die JSON Datei in eine neue.txt Datei zu schreiben
let json = require('./lev1_2.json'); //with path
console.log(json);

let file = fs.createWriteStream('./data.txt');
file.on('error', function (err) { /* error handling */ });
json.forEach(elt => {
    file.write(`${elt.id} - ${elt.title}\n`);
    file.write(`${elt.description}\n\n`);
});
file.end();


//****************************************************************************
// Backend: Node.js CodeFlow Übung lev3_1: fs
// * Erstelle dir eine Funktion, der ein Parameter übergeben werden soll.
// * Dieser Parameter soll in eine Datei geschrieben werden. Diese Datei soll nicht in deinem root sondern in einem Unterordner liegen
// * Falls die Datei nicht existiert, soll sie erstellt werden
// * Falls die Datei existiert, soll der bestehenden Datei der Parameter in einer neuen Zeile hinzugefügt werden
async function lev3_1(param) {

    if (!fs.existsSync('./lev3_1')) {
        fs.mkdirSync('./lev3_1', (err) => { if (err) throw (err); });
    }

    const writeFunc = !fs.existsSync('./lev3_1/lev3_1.txt') ? fs.writeFile : fs.appendFile;
    writeFunc('./lev3_1/lev3_1.txt', `${param}\n`, (err) => {
        if (err) throw err;
        console.log('Data written...')
    });
}
async function call3_1() {
    await lev3_1('Line 1');
    await lev3_1('Line 2');
    await lev3_1('Line 3');
}
call3_1();


//****************************************************************************
// Backend: Node.js CodeFlow Übung lev3_2: fs
// * jedes Mal, wenn deine index.js Datei gespeichert wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
// * Wenn er nicht existiert, soll er erstellt werden
// * Falls er existiert, soll er gelöscht werden
// * Jedes Mal, wenn die Datei gespeichert wird soll auch geschaut werden, ob es die Datei isThis.txt in einem Ordner namens “What” existiert
// * Falls nicht, erstelle den Ordner und die Datei

fs.watchFile('./index.js', { interval: 500 }, (curr, prev) => {

    if (curr.mtime !== prev.mtime) {

        // * jedes Mal, wenn deine index.js Datei gespeichert wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
        // * Wenn er nicht existiert, soll er erstellt werden
        // * Falls er existiert, soll er gelöscht werden
        if (!fs.existsSync('./MyFunnyFolder')) {
            fs.mkdirSync('./MyFunnyFolder');
            console.log(`Folder './MyFunnyFolder' created`);
        }
        else {
            fs.rmdirSync('./MyFunnyFolder');
            console.log(`Folder './MyFunnyFolder' deleted`);
        }

        // * Jedes Mal, wenn die Datei gespeichert wird soll auch geschaut werden, ob es die Datei isThis.txt in einem Ordner namens “What” existiert
        // * Falls nicht, erstelle den Ordner und die Datei
        if (!fs.existsSync('./What')) {
            fs.mkdirSync('./What', (err) => {
                if (err) {
                    console.log(err)
                    throw (err);
                };
                console.log(`Folder './What' created`);
            });
        }
        if (!fs.existsSync('./What/isThis.txt')) {
            fs.writeFile('./What/isThis.txt', '', (err) => {
                if (err) {
                    console.log(err)
                    throw (err);
                };
                console.log(`File ./What/isThis.txt' created`);
            });
        }
    }
});
