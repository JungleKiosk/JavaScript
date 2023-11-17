<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="numbers" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Numbers</h2>
                    <br>
                    <p>In JavaScript, i numeri sono una parte fondamentale della programmazione. Possono essere di vari
                        tipi, tra cui numeri interi (int), numeri decimali a virgola mobile (float) e numeri interi molto
                        grandi (bigint). In questa lezione, esploreremo come lavorare con questi tipi di numeri, gli
                        operatori aritmetici, le espressioni semplici, la precedenza delle parentesi, gli operatori di
                        incremento e decremento, gli operatori di assegnazione e i metodi utili sui numeri.</p>

                    <h4>Tipi di Numeri in JavaScript
                    </h4>
                    <br>
                    <p>
                    <h5>Numeri Interi (int):</h5>Sono numeri senza parte frazionaria. Esempio: <code
                        class="code_txt">32</code>.</p>
                    <p>
                    <h5>Numeri Decimali a Virgola Mobile (float):</h5>Sono numeri con parte frazionaria. Esempio: <code
                        class="code_txt">3.14</code>.</p>
                    <p>
                    <h5>Numeri Interi Molto Grandi (bigint): </h5>Sono utili per rappresentare numeri interi enormi.
                    Esempio: <code class="code_txt">51661648416318751657n</code>.</p>

                    <pre class="pannel_code">console.log("Messaggio di log");
console.log(42);
console.log(true);</pre>

                    <h4>Operatori Aritmetici</h4>
                    <br>
                    <p>Gli operatori aritmetici consentono di eseguire operazioni matematiche:</p>

                    <p>Addizione <code class="code_txt">+</code></p>

                    <pre class="pannel_code">let sum = 10 + 5; // 15</pre>

                    <p>Sottrazione <code class="code_txt">-</code></p>

                    <pre class="pannel_code">let difference = 20 - 8; // 12</pre>

                    <p>Moltiplicazione <code class="code_txt">*</code></p>

                    <pre class="pannel_code">let product = 5 * 4; // 20</pre>

                    <p>Divisione <code class="code_txt">/</code></p>

                    <pre class="pannel_code">let product = 5 * 4; // 20</pre>

                    <p>Resto della divisione <code class="code_txt">%</code></p>

                    <pre class="pannel_code">let remainder = 10 % 3; // 1</pre>

                    <h4>Espressioni Semplici e Precedenza delle Parentesi
                    </h4>
                    <br>
                    <p>Puoi creare espressioni matematiche utilizzando operatori e numeri. Le parentesi possono essere
                        utilizzate per stabilire la precedenza delle operazioni:
                    </p>

                    <pre class="pannel_code">let expression = (10 + 2) * 3; // 36</pre>

                    <h4>Operatori di Incremento e Decremento
                    </h4>
                    <br>
                    <p>Gli operatori di incremento <code class="code_txt">++</code> e decremento <code
                            class="code_txt">--</code> aumentano o diminuiscono un valore di 1:</p>

                    <pre class="pannel_code">let count = 5;
count++; // count diventa 6
count--; // count diventa 5 di nuovo</pre>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <h4>Operatori di Assegnazione
                    </h4>
                    <br>
                    <p>Gli operatori di assegnazione combinano un’operazione con l’assegnazione di un valore: </p>
                    <p>Assegnazione addizione: <code class="code_txt">+=</code></p>
                    <pre class="pannel_code">let value = 10;
value += 5; // value diventa 15</pre>
                    <p>Assegnazione moltiplicazione: <code class="code_txt">*=</code></p>
                    <pre class="pannel_code">let value = 5;
value *= 2; // value diventa 10</pre>
                    <p>Assegnazione divisione: <code class="code_txt">/=</code></p>
                    <pre class="pannel_code">let value = 20;
value /= 4; // value diventa 5</pre>
                    <p>Assegnazione resto della divisione: <code class="code_txt">%</code></p>
                    <pre class="pannel_code">let value = 10;
value %= 3; // value diventa 1</pre>

                    <h4>Metodi Numerici</h4>
                    <br>
                    <p>JavaScript offre anche metodi per eseguire operazioni su numeri:
                    </p>
                    <p><code class="code_txt">.toFixed(n)</code>: Restituisce una stringa rappresentante il numero con n
                        decimali.</p>
                    <br>
                    <p><code class="code_txt">.toPrecision(n)</code>Restituisce una stringa rappresentante il numero con n
                        cifre significative.</p>
                    <br>
                    <p><code class="code_txt">.parseInt()</code>: Converte una stringa in un intero.</p>
                    <br>
                    <p><code class="code_txt">.parseFloat()</code>: Converte una stringa in un numero a virgola mobile.</p>
                    <br>
                    <pre class="pannel_code">let num = 7;
console.log(num + 3); // 10
console.log(num * 2); // 14
console.log(num / 3); // ~2.3333
console.log(num % 2); // 1

let x = 10;
x++; // 11
x--; // 10

let y = 5;
y += 3; // 8
y *= 2; // 16

console.log(value.toFixed(2)); // "30.00"
console.log((22 / 7).toPrecision(3));

// "3.14"
console.log(parseInt("42")); // 42
console.log(parseFloat("3.14")); // 3.14</pre>

                    <h4>Conclusioni</h4>
                    <p>La comprensione dei tipi di numeri in JavaScript e degli operatori di assegnazione ti offrirà la
                        flessibilità necessaria per eseguire calcoli matematici e manipolare dati numerici nel tuo codice.
                        Gli operatori aritmetici e i metodi numerici incorporati ti consentono di creare applicazioni
                        dinamiche e funzionali.

                    </p>






                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
