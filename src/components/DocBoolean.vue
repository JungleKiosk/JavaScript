<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="booleaner" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Booleaner</h2>
                    <br>
                    <p>I booleani sono un tipo di dato fondamentale in JavaScript che può avere solo due valori: vero <code
                            class="code_txt">true</code>
                        o <code class="code_txt">false</code>. Sono usati per rappresentare condizioni logiche e per
                        prendere decisioni nel
                        codice. Cominciamo esaminando un semplice esempio di utilizzo di variabili booleane.</p>
                    <h4>Esempio di Variabile Booleana
                    </h4>
                    <pre class="pannel_code">let isSunny = true;
let isRainy = false;

console.log("La giornata è soleggiata?", isSunny);
// Stampa: La giornata è soleggiata? true

console.log("Sta piovendo?", isRainy);
// Stampa: Sta piovendo? false  
                    </pre>

                    <p>
                        In questo esempio, abbiamo definito due variabili booleane: <code class="code_txt">isSunny</code>
                        (soleggiato) e <code class="code_txt">isRainy</code>
                        (piovoso). Queste variabili possono essere utilizzate per memorizzare lo stato del tempo o qualsiasi
                        altra condizione logica che vogliamo rappresentare.
                    </p>

                    <h4>Utilizzo di Booleani in condizionali:<code>if</code></h4>

                    <p>
                        I booleani sono spesso utilizzati nei confronti e nelle istruzioni <code class="code_txt">if</code>
                        per prendere decisioni basate
                        su condizioni. Ecco un esempio:
                    </p>

                    <pre class="pannel_code">let age = 25;
let isAdult = age >= 18;

if (isAdult) {
  console.log("La persona è maggiorenne.");
} else {
  console.log("La persona è minorenne.");
}

                    </pre>

                    <h4>Conclusioni</h4>
                    <p>
                        I booleani sono una parte fondamentale della programmazione in JavaScript. Sono utilizzati per
                        rappresentare valori di verità e consentono di prendere decisioni e gestire condizioni nel codice.
                        Con una comprensione dei booleani, è possibile scrivere codice più chiaro e potente.
                    </p>






                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
