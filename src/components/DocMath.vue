<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="math" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Math</h2>
                    <br>
                    <p>In JavaScript, l’oggetto Math fornisce una vasta gamma di funzioni matematiche avanzate che
                        consentono di eseguire calcoli complessi. Queste funzioni sono utili in scenari che richiedono
                        calcoli matematici precisi, come elaborazioni scientifiche o grafiche. In questa lezione,
                        esploreremo le diverse funzioni offerte dall’oggetto Math e come utilizzarle nel tuo codice.</p>

                    <h4>Proprietà dell’Oggetto <code>Math</code>
                    </h4>
                    <br>
                    <p>L’oggetto <code class="code_txt">Math</code> contiene alcune costanti matematiche utili:</p>
                    <br>
                    <code class="code_txt">Math.PI</code>
                    <p>Restituisce il valore di π (pi greco).</p>
                    <code class="code_txt">Math.E</code>
                    <p>Restituisce il valore di e (numero di Nepero).</p>
                    <br>
                    <h4>Funzioni Trigonometriche</h4>
                    <p>L’oggetto <code class="code_txt">Math</code> fornisce funzioni trigonometriche per calcoli angolari:
                    </p>
                    <code class="code_txt">Math.sin(x)</code>
                    <p>Restituisce il seno di x (in radianti).</p>
                    <code class="code_txt">Math.cos(x)</code>
                    <p>Restituisce il coseno di x (in radianti).</p>
                    <code class="code_txt">Math.tan(x)</code>
                    <p>Restituisce la tangente di x (in radianti).</p>
                    <code class="code_txt">Math.asin(x)</code>
                    <p>Restituisce l’arcoseno di x (in radianti).</p>
                    <code class="code_txt">Math.acos(x)</code>
                    <p>Restituisce l’arcocoseno di x (in radianti).</p>
                    <code class="code_txt">Math.atan(x)</code>
                    <p>Restituisce l’arcotangente di x (in radianti).</p>
                    <code class="code_txt">Math.atan2(y,x)</code>
                    <p>Restituisce l’arcotangente del rapporto y/x (in radianti).</p>

                    <h4>Funzioni Esponenziali e Logaritmiche
                    </h4>
                    <p>Puoi eseguire calcoli esponenziali e logaritmici con le seguenti funzioni:
                    </p>
                    <code class="code_txt">Math.exp(x)</code>
                    <p>Restituisce il valore di e elevato alla potenza x.</p>
                    <code class="code_txt">Math.log(x)</code>
                    <p>Restituisce il logaritmo naturale di x.</p>
                    <code class="code_txt">Math.log10(x)</code>
                    <p>Restituisce il logaritmo in base 10 di x.</p>
                    <code class="code_txt">Math.pow(x, y)</code>
                    <p>Restituisce il valore di x elevato alla potenza y.</p>

                    <h4>Funzioni Matematiche Avanzate</h4>
                    <code class="code_txt">Math.sqrt(x)</code>
                    <p>Restituisce la radice quadrata di x.</p>
                    <code class="code_txt">Math.cbrt(x)</code>
                    <p>Restituisce la radice cubica di x.</p>
                    <code class="code_txt">Math.abs(x)</code>
                    <p>Restituisce il valore assoluto di x</p>
                    <code class="code_txt">Math.floor(x)</code>
                    <p>Restituisce il più grande intero minore o uguale a x.</p>
                    <code class="code_txt">Math.ceil(x)</code>
                    <p>Restituisce il più piccolo intero maggiore o uguale a x.</p>
                    <code class="code_txt">Math.round(x)</code>
                    <p>Restituisce il valore di x arrotondato al numero intero più vicino.</p>


                    <h4>Utilizzo dell’Oggetto Math
                    </h4>

                    <p>Per utilizzare le funzioni dell’oggetto <code class="code_txt">Math</code>, basta richiamarle seguite
                        dai parametri necessari:
                    </p>

                    <pre class="pannel_code">let angle = Math.PI / 4;
let sineValue = Math.sin(angle); // Calcola il seno di 45 gradi

let base = 2;
let exponent = 3;
let powerResult = Math.pow(base, exponent); // Calcola 2 elevato alla potenza 3

let number = -7.5;
let absoluteValue = Math.abs(number); // Calcola il valore assoluto di -7.5
                    </pre>

                    <h4>Conclusioni</h4>
                    <p>
                        L’oggetto <code class="code_txt">Math</code> offre una vasta gamma di funzioni matematiche che
                        possono essere utilizzate per
                        eseguire calcoli avanzati nel tuo codice JavaScript. Queste funzioni ti consentono di manipolare i
                        dati in modo accurato e di creare applicazioni complesse che richiedono elaborazioni matematiche
                        sofisticate.
                    </p>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>
