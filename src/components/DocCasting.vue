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
                    <p>In JavaScript, la conversione dei tipi di dati è un processo cruciale quando si lavora con valori di
                        natura diversa. <br>
                        Esistono due tipi principali di conversione: <br>
                        la conversione implicita e la
                        conversione esplicita. In questa lezione, esploreremo entrambi i tipi di conversione attraverso una
                        serie di esempi pratici.</p>

                    <h4>Conversione Implicita</h4>
                    <br>
                    <p>La conversione implicita dei tipi di dati avviene automaticamente quando si utilizzano insieme
                        valori di tipi diversi in un’operazione. JavaScript cerca di adattare i tipi in modo da renderli
                        compatibili per l’operazione in questione. Questo può comportare la conversione di un tipo in un
                        altro al fine di eseguire l’operazione desiderata. Ecco alcuni esempi di conversione implicita:</p>

                    <pre class="pannel_code">let age = 25; // Valore di tipo numero intero
let ageAsString = "La mia età è: " + age; // Conversione implicita a stringa
console.log(ageAsString); // Stampa: "La mia età è: 25"</pre>

                    <pre class="pannel_code">let total = 10 + "5"; // Conversione implicita a stringa
console.log(total); // Stampa: "105"</pre>

                    <h4>Conversione Esplicita</h4>
                    <br>
                    <p>La conversione esplicita richiede l’intervento dello sviluppatore e viene eseguita tramite funzioni e
                        operatori specifici. Questo tipo di conversione è utile quando si desidera forzare un valore da un
                        tipo a un altro in modo controllato. Ecco alcuni esempi di conversione esplicita:</p>

                    <pre class="pannel_code">let numberString = "123";
let number = Number(numberString); // Conversione esplicita a numero
console.log(number); // Stampa: 123</pre>

                    <pre class="pannel_code">let stringNumber = String(456); // Conversione esplicita a stringa
console.log(stringNumber); // Stampa: "456"</pre>

                    <h4>Conversione Esplicita con <code>parseInt</code> e <code>parseFloat</code></h4>
                    <br>
                    <p>
                        Le funzioni <code class="code_txt">parseInt</code> e <code class="code_txt">parseFloat</code> sono
                        comunemente utilizzate per
                        convertire stringhe in numeri
                        interi o decimali:
                    </p>
                    <br>
                    <pre class="pannel_code">let intValue = parseInt("42"); // Conversione esplicita a numero intero
console.log(intValue); // Stampa: 42

let floatValue = parseFloat("3.14"); // Conversione esplicita a numero decimale
console.log(floatValue); // Stampa: 3.14</pre>

                    <h4>Conversione Esplicita con <code>toString</code></h4>
                    <br>
                    <p> Il metodo <code class="code_txt">toString</code>
                        permette di convertire un valore in una stringa:
                    </p>
                    <br>
                    <pre class="pannel_code">let number = 123;
let numberString = number.toString(); // Conversione esplicita a stringa
console.log(numberString); // Stampa: "123"</pre>

                    <h4>Conversione Esplicita con String Concatenation</h4>
                    <br>
                    <p>La concatenazione di un valore con una stringa provoca la conversione del valore in una stringa:
                    </p>
                    <br>
                    <pre class="pannel_code">let number = 42;
let string = "Il numero è: " + number; // Conversione esplicita a stringa
console.log(string); // Stampa: "Il numero è: 42"</pre>

                    <h4>Conclusioni</h4>
                    <br>
                    <p>La conversione dei tipi di dati in JavaScript è un concetto fondamentale per manipolare valori di
                        tipi differenti. La conversione implicita avviene automaticamente quando si eseguono operazioni tra
                        tipi diversi, mentre la conversione esplicita richiede l’uso di funzioni e operatori per controllare
                        la trasformazione dei valori. Comprendere l’effetto di entrambe le conversioni è essenziale per
                        scrivere codice JavaScript coerente e affidabile.</p>
                </div>
            </div>
        </div>

    </main>

</template>

<style scoped></style>
