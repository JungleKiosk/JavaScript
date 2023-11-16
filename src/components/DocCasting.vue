<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="casting" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Casting</h2>
                    <br>
                    <p>In JavaScript, i tipi di dati giocano un ruolo fondamentale nel determinare il tipo di valore che una
                        variabile può contenere. A differenza di alcuni linguaggi di programmazione che richiedono la
                        dichiarazione esplicita dei tipi, JavaScript è un linguaggio a tipizzazione dinamica. Ciò significa
                        che non è necessario dichiarare il tipo di una variabile prima di utilizzarla. In questa lezione,
                        esploreremo i diversi tipi di dati disponibili in JavaScript e analizzeremo ciascuno di essi con
                        esempi pratici.</p>

                    <h4>Tipi di Dati Primitivi</h4>
                    <br>
                    <p>JavaScript è un linguaggio flessibile in termini di tipi di dati. Ecco alcuni dei tipi di dati
                        primitivi disponibili:</p>

                    <h3>Numero:</h3>
                    <p>Rappresenta valori numerici, sia interi che decimali.</p>

                    <pre class="pannel_code">let age = 25; // Numero intero
let height = 175.5; // Numero decimale</pre>

                    <h3>Stringhe:</h3>
                    <p>Rappresenta sequenze di caratteri all’interno di apici singoli o doppi.</p>

                    <pre class="pannel_code">let name = "JavaScript"; // Stringa con apici doppi
let message = "Hello, JavaScript!"; // Stringa con apici singoli</pre>

                    <h3>Booleano:</h3>
                    <p>Rappresenta un valore di verità, che può essere true o false.</p>

                    <pre class="pannel_code">let isStudent = true; // Valore booleano vero
let isAdmin = false; // Valore booleano falso</pre>

                    <h3>Null:</h3>
                    <p>Rappresenta un valore nullo o non esistente.</p>

                    <pre class="pannel_code">let emptyValue = null; // Valore nullo</pre>

                    <h3>Undefined:</h3>
                    <p>Rappresenta una variabile dichiarata ma non inizializzata.</p>

                    <pre class="pannel_code">let undefinedValue; // Valore undefined</pre>

                    <h3>Simbolo:</h3>
                    <p>Rappresenta un identificatore unico, introdotto in ECMAScript 6.</p>

                    <pre class="pannel_code">const symbol = Symbol("description"); // Dichiarazione di un simbolo</pre>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a
                                    href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_typeof_primitive"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>

                    <h4>Tipi di Dati di Riferimento</h4>
                    <br>
                    <p>Oltre ai tipi di dati primitivi, JavaScript offre anche tipi di dati di riferimento, che includono
                        oggetti, array, funzioni e altro ancora.</p>

                    <h3>Oggetti:</h3>
                    <p>Rappresentano collezioni di proprietà e metodi.</p>

                    <pre class="pannel_code">let person = { name: "John", age: 30 }; // Dichiarazione di un oggetto</pre>

                    <h3>Array:</h3>
                    <p>Rappresenta una collezione ordinata di valori.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 5]; // Dichiarazione di un array</pre>

                    <h3>Funzioni:</h3>
                    <p>Rappresentano blocchi di codice che possono essere richiamati.</p>

                    <pre class="pannel_code">function greet(name) {
  return "Ciao, " + name + "!";
}</pre>

                    <h3>Date:</h3>
                    <p>Rappresenta date e orari.</p>

                    <pre class="pannel_code">let currentDate = new Date(); // Oggetto Data corrente</pre>

                    <h3>RegExp:</h3>
                    <p>Rappresenta espressioni regolari per il matching di test</p>

                    <pre class="pannel_code">let pattern = /[A-Za-z]+/; // Espressione regolare per le parole</pre>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a
                                    href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_typeof_complex"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>

                    <h4>Conclusioni</h4>
                    <br>
                    <p>
                        I tipi di dati in JavaScript svolgono un ruolo essenziale nella manipolazione dei valori all’interno
                        del codice. La flessibilità dei tipi di dati dinamici di JavaScript offre agilità nello sviluppo,
                        consentendo di dichiarare variabili senza specificare esplicitamente il loro tipo. Dalla semplicità
                        dei tipi primitivi alle complessità dei tipi di riferimento, una comprensione approfondita dei tipi
                        di dati contribuisce alla scrittura di codice robusto ed efficace.
                    </p>
                    <br>
                </div>
            </div>
        </div>

    </main>

    <BannerFooter></BannerFooter>
</template>

<style scoped></style>
