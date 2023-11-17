<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="output" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Output</h2>
                    <br>
                    <p>In JavaScript, il <code class="code_txt">console.log()</code> è uno strumento essenziale per
                        visualizzare informazioni e risultati
                        durante lo sviluppo. Tuttavia, oltre al semplice <code class="code_txt">console.log()</code>,
                        esistono vari metodi di output sulla
                        console che offrono diverse opzioni per la formattazione e la visualizzazione dei dati. In questa
                        lezione, esploreremo i diversi tipi di output sulla console in JavaScript.</p>

                    <h4><code>console.log()</code></h4>
                    <br>
                    <p>Il metodo <code class="code_txt">console.log()</code> è ampiamente utilizzato per stampare
                        informazioni sulla console. Accetta uno
                        o più argomenti e li visualizza nella console:
                    </p>

                    <pre class="pannel_code">console.log("Messaggio di log");
console.log(42);
console.log(true);</pre>

                    <h4><code>console.info()</code></h4>
                    <br>
                    <p>Il metodo <code class="code_txt">console.info()</code> è utile per mostrare messaggi informativi
                        sulla console. Può essere
                        utilizzato per fornire dettagli aggiuntivi riguardo a uno stato o un processo:
                    </p>

                    <pre class="pannel_code">console.info("Messaggio informativo");</pre>

                    <h4><code>console.warn()</code></h4>
                    <br>
                    <p>Il metodo <code class="code_txt">console.warn()</code> genera un avviso nella console, sollevando
                        l’attenzione su potenziali
                        problemi o situazioni degne di nota:
                    </p>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <h4><code>console.error()</code></h4>
                    <br>
                    <p>Il metodo <code class="code_txt">console.error()</code> viene utilizzato per segnalare errori critici
                        o eccezioni nel codice:</p>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <pre class="pannel_code">console.warn("Attenzione: qualcosa non va come previsto!");</pre>

                    <h4>Formattazione con Interpolazione delle Stringhe</h4>
                    <br>
                    <p>È possibile utilizzare l’interpolazione delle stringhe per combinare variabili o valori all’interno
                        di una stringa:

                    </p>

                    <pre class="pannel_code">let name = "Fra";
console.log(`Ciao, ${name}!`);</pre>

                    <h4>Formattazione con Placeholder
                    </h4>
                    <br>
                    <p>È possibile utilizzare i segnaposto (%s per le stringhe, %d per i numeri) per formattare i messaggi:
                    </p>

                    <pre class="pannel_code">let quantity = 5;
console.log("Hai acquistato %d articoli.", quantity);</pre>

                    <h4><code>console.table()</code></h4>
                    <br>
                    <p>Il metodo <code class="code_txt">console.error()</code> consente di visualizzare dati in forma di
                        tabella:</p>

                    <pre class="pannel_code">let users = [
  { name: "Zoi", age: 25 },
  { name: "Fra", age: 30 },
  { name: "Giuly", age: 28 },
];
console.table(users);</pre>

                    <h4><code>console.group()</code> e <code>console.groupEnd()</code> </h4>
                    <br>
                    <p>Questi metodi consentono di creare gruppi di output per organizzare i messaggi:</p>

                    <pre class="pannel_code">console.group("Dettagli Utente");
console.log("Nome: Zoi");
console.log("Età: 25");
console.groupEnd();</pre>

                    <h4>Conclusioni</h4>

                    <p>I diversi tipi di output sulla console in JavaScript offrono flessibilità nella presentazione delle
                        informazioni durante lo sviluppo. Scegli il metodo di output più appropriato in base al contesto e
                        alle informazioni da visualizzare. La conoscenza di questi metodi ti aiuterà a migliorare la
                        comunicazione e il debug nel tuo codice JavaScript.
                    </p>







                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
