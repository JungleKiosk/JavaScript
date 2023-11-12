<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>

<template>
    <header id="docum">

        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <div class="card p-3 d-flex justify-content-between align-items-center">
                        <img class="rounded-3" width="100" src="../assets/img/js.svg" alt>
                    </div>

                </div>
            </div>
        </div>


    </header>




    <main id="docum">

        <div class="container">
            <div class="toggle_sidebar_button">
                menu
                <button class="btn btn-outline-light" @click="toggleSidebar">+</button>
            </div>

            <div class="row justify-content-around">

                <nav class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
                    <div>
                        <h1>menu</h1>
                    </div>
                    <ul class="p-3">
                        <li><a href="#variabili">variabili e costanti</a></li>
                        <hr>
                        <li><a href="#">Lorem, ipsum dolor</a></li>
                        <hr>
                        <li><a href="#">Lorem, ipsum dolor</a></li>
                    </ul>
                </nav>


                <div class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Le variabili</h2>
                    <br>
                    <p>Le variabili sono uno dei concetti fondamentali nella
                        programmazione
                        JavaScript. <br>
                        In JavaScript, una variabile è paragonabile a un
                        contenitore che può
                        contenere dati come numeri, stringhe, oggetti e
                        altro
                        ancora. Le
                        variabili sono fondamentali perché consentono di
                        memorizzare e
                        manipolare dati nel codice.</p>

                    <h4>Utilizzo <code>let</code> </h4>
                    <br>
                    <p>La dichiarazione delle variabili con <code class="code_txt">let</code> è
                        una pratica
                        moderna e
                        consigliata in JavaScript. <code class="code_txt">let</code>
                        limita la
                        visibilità
                        della variabile
                        alla sola <a href="https://www.w3schools.com/js/js_scope.asp"
                            style="color:rgb(255, 191, 0)">scope</a>
                        in cui è stata dichiarata. Ad esempio:</p>

                    <pre class="pannel_code">let age = 25; // Dichiarazione di una variabile "age" con valore 25</pre>

                    <h4>Cambiare il Valore di una Variabile</h4>
                    <br>
                    <p>Le variabili possono essere aggiornate con nuovi
                        valori
                        durante
                        l’esecuzione del programma:</p>

                    <pre class="pannel_code">let count = 0; <br>count = count + 1; // Aggiorna il valore di "count"</pre>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a
                                    href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_let"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>

                    <h4>Differenza tra <code>let</code> e <code>var</code></h4>
                    <br>
                    <p>In passato, il keyword <code class="code_txt">var</code>
                        era utilizzato
                        per dichiarare
                        variabili in
                        JavaScript. Tuttavia, <code class="code_txt">var</code>
                        ha un
                        comportamento meno
                        limitato rispetto
                        a <code class="code_txt">let</code>, poiché non è
                        confinato alla scope
                        del blocco in
                        cui è
                        dichiarato. Questo può portare a problemi
                        inaspettati:</p>

                    <pre class="pannel_code">var x = 10; // Dichiarazione di "x" con "var" <br>
if (true) {
var x = 20; // Cambia il valore di "x" globalmente!
}
console.log(x); // Stampa 20 invece di 10</pre>

                    <h4>Perchè evitare <code>var</code></h4>
                    <br>
                    <p>L’uso di <code class="code_txt">var</code> può
                        portare a comportamenti
                        imprevisti e
                        difficoltà di
                        debug a causa delle sue scoping rules meno chiare.
                        <code class="code_txt">let</code>
                        introduce un
                        comportamento di scope più chiaro e prevedibile,
                        rendendo il codice
                        più facilmente comprensibile e manutenibile.
                    </p>

                    <h4>Conclusioni</h4>
                    <br>
                    <p>Le variabili sono uno strumento cruciale nello
                        sviluppo
                        JavaScript,
                        consentendo di memorizzare e manipolare dati.
                        L’utilizzo
                        del keyword
                        <code class="code_txt">let</code> per dichiarare
                        variabili promuove una
                        scrittura del
                        codice più
                        chiara e prevedibile rispetto a <code class="code_txt">var</code>, che
                        può portare a
                        problemi di
                        scoping. Scegliere <code class="code_txt">let</code>
                        per dichiarare
                        variabili è una
                        pratica
                        moderna che migliora l’efficienza e la qualità del
                        tuo
                        codice.
                    </p>
                    <br>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica con
                            <button class="rounded-5 sty_bt">
                                <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_var"
                                    target="_blank">W3S</a>
                            </button>

                        </h2>
                    </div>
                    <br>
                    <hr>
                    <br>
                    <!-- costanti -->
                    <h2 style="color:rgb(255, 191, 0)">Le costanti</h2>
                    <br>
                    <p>Le costanti sono un concetto importante nella
                        programmazione
                        JavaScript per rappresentare valori immutabili. In
                        questa lezione,
                        esploreremo cosa sono le costanti, quando è stata
                        introdotta la
                        parola chiave const e come utilizzarla
                        correttamente.</p>

                    <p>Una costante è un valore che non può essere
                        modificato
                        dopo la sua
                        inizializzazione. Questo è particolarmente utile
                        quando
                        si vuole
                        garantire che un valore rimanga immutabile nel corso
                        dell’esecuzione
                        del programma. Le costanti aiutano a rendere il
                        codice
                        più sicuro e
                        prevedibile.</p>

                    <h4>Parola Chiave <code>const</code></h4>
                    <br>
                    <p>La parola chiave <code class="code_txt">const</code>
                        è stata introdotta in
                        ECMAScript
                        6 (ES6) per
                        consentire la dichiarazione di costanti in
                        JavaScript.
                        Prima
                        dell’introduzione di <code class="code_txt">const</code>,
                        era possibile
                        dichiarare
                        costanti
                        utilizzando <code class="code_txt">var</code>, ma
                        questo non comunicava
                        l’intento di
                        immutabilità
                        in modo chiaro.</p>

                    <h4>Utilizzo di <code>const</code></h4>

                    <p>Per dichiarare una costante, utilizza il keyword
                        <code class="code_txt">const</code>
                        seguito dal
                        nome della costante e l’assegnazione del valore:
                    </p>

                    <pre class="pannel_code">const pi = 3.14159; // Dichiarazione di una costante "pi"</pre>

                    <p>Una volta assegnato un valore a una costante, non è
                        possibile
                        modificarlo:</p>

                    <pre
                        class="pannel_code">const pi = 3.14159; <br>pi = 3.14; // ⚠️ Errore: Impossibile assegnare un nuovo valore a "pi"</pre>

                    <h4>Best Practices per <code>const</code></h4>

                    <p>
                    <ul>
                        <li>Utilizza <code class="code_txt">const</code>
                            per dichiarare
                            variabili quando
                            sai che il valore non cambierà.</li><br>
                        <li>Evita l’utilizzo di <code class="code_txt">const</code>
                            per
                            variabili che
                            avranno valori diversi nel corso del
                            programma.</li><br>
                        <li>Usa nomi descrittivi per le costanti per
                            rendere
                            chiaro il
                            loro scopo.</li><br>
                        <li>Ricorda che <code class="code_txt">const</code>
                            rende immutabile
                            solo il
                            binding della
                            variabile, non l’oggetto a cui può fare
                            riferimento.</li><br>
                    </ul>

                    </p>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica con
                            <button class="rounded-5 sty_bt">
                                <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_const_object"
                                    target="_blank">W3S</a>

                            </button>
                        </h2>
                    </div>

                </div>
            </div>
        </div>

    </main>

    <footer id="docum">
        <div class="container p-5">
            <div class="row justify-content-center">
                <h4 style="color:rgb(255, 191, 0)" class=" text-center p-4 mb-3">Prova a svolgere degli
                    esercizi di logica JavaScript
                    <button class="rounded-5 sty_bt">
                        <a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1"
                            target="_blank">W3S</a>
                    </button>

                </h4>
                <div class="col-12 col-lg-6 mt-5">
                    <div class>
                        <h1>Link utili:</h1>
                    </div>
                </div>
                <div class="col-12 col-lg-3 mt-5">
                    <div class>
                        <ul>
                            <li>
                                <h3><a href="https://www.w3schools.com/" target="_blank">w3schools</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://www.html.it/pag/45343/introduzione-a-javascript/"
                                        target="_blank">HTML.it</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        target="_blank">HTML.it</a></h3>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>

    </footer>
</template>

<style scoped>
.sidebar ul {
    list-style-type: none;
}

.sidebar {
    width: auto;
    background-color: #27272a;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    /* Nasconde la sidebar di default */
    overflow-y: auto;
    transition: left 0.3s ease;
}

.sidebar-open {
    left: 0;
    /* Mostra la sidebar quando è aperta */
}

.main-content {
    flex: 1;
    padding-left: 220px;
    /* Larghezza della sidebar + margine */
}

.toggle_sidebar_button {
    font-size: 20px;
    cursor: pointer;
    position: sticky;
    top: 20px;
    left: 20px;
    z-index: 2;
}
</style>
