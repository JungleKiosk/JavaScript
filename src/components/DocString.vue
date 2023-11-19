<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="string" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">String</h2>
                    <br>
                    <p>Le stringhe sono sequenze di caratteri e rappresentano testo nel codice JavaScript. In questa
                        lezione, esploreremo le stringhe in dettaglio, imparando come crearle, manipolarle e sfruttare le
                        loro potenti funzionalità.
                    </p>


                    <h4>Creazione di Stringhe</h4>
                    <br>
                    <p>
                        Per creare una stringa in JavaScript, puoi utilizzare apici singoli <code
                            class="code_txt">('')</code>, doppi apici <code class="code_txt">("")</code> o
                        template literals <code class="code_txt">(\)</code>. Ad esempio:
                    </p>

                    <pre class="pannel_code">let singleQuotes = "Questa è una stringa con apici singoli.";
let doubleQuotes = "Questa è una stringa con doppi apici.";
let templateLiteral = `Questo è un ${"template literal"}.`;</pre>

                    <h4>Indicizzazione e Lunghezza delle Stringhe</h4>
                    <br>
                    <p>Le stringhe possono essere indicizzate come array, dove ogni carattere ha un indice. L’indice del
                        primo carattere è 0. Per ottenere la lunghezza di una stringa, puoi utilizzare la proprietà <code
                            class="code_txt">length</code>.
                    </p>

                    <pre class="pannel_code">let message = "Ciao, mondo!";
let firstCharacter = message[0]; // Ottiene il primo carattere "C"
let length = message.length; // Lunghezza della stringa: 12</pre>

                    <h4>Caratteri di Escape</h4>
                    <br>
                    <p>Alcuni caratteri all’interno delle stringhe possono avere significati speciali. Per includere questi
                        caratteri nella stringa, è necessario utilizzare caratteri di escape preceduti da un backslash <code
                            class="code_txt">(\)</code>.
                    </p>

                    <pre class="pannel_code">let specialCharacters = "Questo è un carattere di escape: \\";
let newLine = "Prima riga\nSeconda riga";</pre>

                    <p>Esempi di caratteri di escape comuni:
                    <ul>
                        <li> <code class="code_txt">\'</code> apice singolo
                        </li> <br>
                        <li> <code class="code_txt">\"</code> apice doppio
                        </li><br>
                        <li> <code class="code_txt">\\</code> backslash
                        </li><br>
                        <li> <code class="code_txt">\n</code> nuova riga
                        </li><br>
                        <li> <code class="code_txt">\t</code> tabulazione
                        </li><br>
                    </ul>
                    </p>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <h4>Escape delle Citazioni</h4>
                    <br>
                    <p>Se desideri includere un apice all’interno di una stringa delimitata da apici singoli o doppi,
                        utilizza il carattere di escape corrispondente. Ad esempio:
                    </p>
                    <pre class="pannel_code">let singleQuoteString = "Questa è una stringa con un'apice.";
let doubleQuoteString = 'Questa è una stringa con un "apice.';</pre>


                    <h4>Concatenazione di Stringhe</h4>
                    <br>
                    <p>La concatenazione è il processo di unione di più stringhe. Puoi utilizzare l’operatore <code
                            class="code_txt">+</code>:</p>

                    <pre class="pannel_code">let firstName = "Zoi";
let lastName = "Arif";
let fullName = firstName + " " + lastName; // "Zoi Arif"</pre>

                    <h4>Template Literals</h4>
                    <br>
                    <p>I template literals (“) semplificano la creazione di stringhe complesse e consentono l’interpolazione
                        di variabili ed espressioni:</p>

                    <pre class="pannel_code">let name = "Fra";
let age = 30;
let greeting = `Ciao, mi chiamo ${name} e ho ${age} anni.`;</pre>

                    <h4>Metodi delle Stringhe</h4>
                    <br>
                    <p>Le stringhe dispongono di numerosi metodi che consentono di manipolarle e modificarle direttamente.
                        Ecco alcuni esempi:
                    </p>
                    <ul>

                        <li> <code class="code_txt">toUpperCase()</code> Converte la stringa in maiuscolo.
                        </li> <br>
                        <li> <code class="code_txt">toLowerCase()</code> Converte la stringa in minuscolo.
                        </li> <br>
                        <li><code class="code_txt">trim()</code> Rimuove gli spazi bianchi dall’inizio e dalla fine della
                            stringa.</li><br>
                        <li> <code class="code_txt">substring(start, end)</code> Estrae una sottostringa tra gli indici
                            dati.
                        </li><br>
                        <li> <code class="code_txt">indexOf(searchValue)</code> Restituisce l’indice della prima occorrenza
                            di <code class="code_txt">searchValue</code>
                        </li><br>
                        <li><code class="code_txt">replace(oldValue, newValue)</code> Sostituisce le occorrenze di <code
                                class="code_txt">oldValue</code> con <code class="code_txt">newValue</code>
                        </li><br>

                    </ul>
                    <p>
                        Ecco alcuni esempi di come utilizzare i metodi delle stringhe per manipolarle e modificarle:
                    </p>
                    <ul>
                        <li><code class="code_txt">toUpperCase()</code>Converte la stringa in maiuscolo.</li>
                    </ul>

                    <pre class="pannel_code">let original = "Hello, World!";
let uppercase = original.toUpperCase(); // "HELLO, WORLD!"</pre>

                    <ul>
                        <li><code class="code_txt">toLowerCase()</code>Converte la stringa in minuscolo.</li>
                    </ul>

                    <pre class="pannel_code">let original = "Hello, World!";
let lowercase = original.toLowerCase(); // "hello, world!"</pre>

                    <ul>
                        <li><code class="code_txt">trim()</code>Rimuove gli spazi bianchi dall’inizio e dalla fine
                            della stringa.</li>
                    </ul>

                    <pre class="pannel_code">let padded = "   Testo con spazi     ";
let trimmed = padded.trim(); // "Testo con spazi"</pre>

                    <ul>
                        <li><code class="code_txt">substring(start, end)</code>Estrae una sottostringa tra gli indici dati.
                        </li>
                    </ul>

                    <pre class="pannel_code">let original = "Estrazione";
let substring = original.substring(0, 4); // "Estr"</pre>

                    <ul>
                        <li><code class="code_txt">substring(start, end)</code>Restituisce l’indice della prima occorrenza
                            di <code class="code_txt">searchValue</code>
                        </li>
                    </ul>

                    <pre class="pannel_code">let text = "occorrenza numero diciannove";
let index = text.indexOf("diciannove"); // 19</pre>

                    <ul>
                        <li><code class="code_txt">replace(oldValue, newValue)</code>Sostituisce le occorrenze di <code
                                class="code_txt">oldValue</code> con <code class="code_txt">newValue</code>
                        </li>
                    </ul>

                    <pre class="pannel_code">let original = "Tanti auguri a te";
let modified = original.replace("te", "me"); // "Tanti auguri a me"</pre>

                    <h4>Conclusioni</h4>
                    <p>
                        Le stringhe sono una parte essenziale della programmazione in JavaScript. Conoscere i fondamenti
                        delle stringhe e dei loro metodi ti consentirà di manipolare e trattare il testo in modo efficace.
                        Dall’individuazione di sottostringhe all’aggiunta di modifiche e alla formattazione, i metodi delle
                        stringhe sono uno strumento potente nelle tue mani per gestire il testo nel tuo codice. Con questo
                        solido fondamento, sei pronto per esplorare ulteriori aspetti avanzati di JavaScript e approfondire
                        le tue conoscenze di programmazione.
                    </p>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a href="https://www.w3schools.com/js/js_string_methods.asp"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>
                    <footer id="docum" class="rounded-4">
                        <div class="container p-5">
                            <div class="row rounded-4 justify-content-center" style="background-color: rgba(119, 26, 102, 0.292);">
                                <h4 style="color:rgb(255, 191, 0)" class=" text-center p-4 mb-3">Prova a svolgere degli
                                    esercizi di logica JavaScript
                                    <button class="rounded-5 sty_bt">
                                        <a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1"
                                            target="_blank">W3S</a>
                                    </button>

                                </h4>



                            </div>
                        </div>

                    </footer>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
