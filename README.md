# day74_NodeJS_fs

_Source:_ https://github.com/Ninni-cfm/day74_NodeJS_fs

---

## Backend: Node.js CodeFlow Übung lev1_1: fs

**Aufgabenstellung**

Erstelle dir im VSCode eine Datei mit dem Namen **blog1.txt** -> ihr Inhalt soll “Hello World” sein.

**Ab sofort passiert alles mit Hilfe von** [File System](https://nodejs.org/api/fs.html)

-   öffne die Datei blog1.txt
-   ändere den Inhalt (Text) in der Datei blog1.txt
-   erstelle eine **neue Datei** blog2.txt und schreibe etwas in sie hinein
-   erstelle einen **neuen Ordner** “assets” und kümmere dich um den Fehler
-   Tipp: erstelle den Ordner nur, falls er nicht schon existiert
-   erstelle einen neuen Ordner assets, falls er nicht existiert. Falls er existiert **lösche** ihn
-   Lösche eine Datei “delete.txt” aber nur wenn sie existiert
-   Erstelle eine Datei Hello.txt und füge ihr etwas Text hinzu. Nenne die Datei in HelloWorld.txt um

---

## Backend: Node.js CodeFlow Übung lev2_1: fs

**Aufgabenstellung**

Das Ziel dieser Übung ist es, den Inhalt einer .JSON Datei in eine txt umzuwandeln.

-   erstelle dir eine JSON Datei mit dem Code aus dem Kommentarbereich
-   importiere die JSON Datei in deiner index.js
-   Nutze [File System](https://nodejs.org/api/fs.html) um die JSON Datei in eine neue .txt Datei zu schreiben

    Deine txt sollte so aussehen:

    1 - Autopsy
    Suspendisse potenti.

    2 - Parting Glances
    Aenean lectus. Pellentesque eget nunc.

    ...

---

## Backend: Node.js CodeFlow Übung lev3_1: fs

**Aufgabenstellung**

-   Erstelle dir eine Funktion, der ein Parameter übergeben werden soll.
-   Dieser Parameter soll in eine Datei geschrieben werden. Diese Datei soll **nicht** in deinem root sondern in einem **Unterordner** liegen
-   Falls die Datei nicht existiert, soll sie erstellt werden
-   Falls die Datei existiert, soll der bestehenden Datei der Parameter in einer neuen Zeile hinzugefügt werden

---

## Backend: Node.js CodeFlow Übung lev3_2: fs

**Aufgabenstellung**

-   jedes Mal, wenn deine index.js Datei gespeichert wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
-   Wenn er nicht existiert, soll er erstellt werden
-   Falls er existiert, soll er gelöscht werden
-   Jedes Mal, wenn die Datei gespeichert wird soll auch geschaut werden, ob es die Datei **isThis.txt** in einem Ordner namens “What” existiert
-   Falls nicht, erstelle den Ordner und die Datei
