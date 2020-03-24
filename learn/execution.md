---
layout: learn
---
<div id="section-execution" class="learn-section">
  <div class="learn-home-content">
    <div class="page">

      <h1>Execution</h1>
      <hr />
      <p>Once you know most of the DMN features, you probably want to execute your model to see it in action. Let's do
        it in <b>3 simple steps!</b></p>

      <h4>1) Setup the Kogito REST API</h4>
      <p>
        First of all, download all Kogito examples from <a
          href="https://github.com/kiegroup/kogito-examples/archive/0.8.0.zip">github.com/kiegroup/kogito-examples/archive/0.8.0.zip</a>
        and unzip it (you can try to download the latest release as well, but currently I'm using the 0.8.0
        version):
      </p>
      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code># Download it:
<b>wget</b> https://github.com/kiegroup/kogito-examples/archive/0.8.0.zip

# Unzip it:
<b>unzip</b> 0.8.0.zip</code></pre>
        </div>
      </div>

      <p>Now, let's open the DMN Quarkus example and run it:</p>

      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code># Go to the DMN Quarkus example directory:
<b>cd</b> kogito-examples-0.8.0/dmn-quarkus-example 

# Run the example:
mvn clean compile <b>quarkus:dev</b> -DskipTests=true</code></pre>
        </div>
      </div>
      <p>OK! Open the <a href="localhost:8080/swagger-ui">http://localhost:8080/swagger-ui</a> to check
        the Swagger UI:</p>

      <img src="/assets/execution-swagger-ui.png" />

      <p>If you're seeing something like the screen above... Great! 🎉 You're running the Kogito REST API!</p>

      <p>You may learn more about everything behind this server <a href="https://kogito.kie.org/get-started">here</a>.
        However, if you're wondering
        about this <code>/Traffic%20Violation</code> URL API, keep reading! :-)</p>

      <h4>2) The DMN <i>Traffic Violation</i> model</h4>
      <p>The <code>/Traffic%20Violation</code> URL appears in the DMN example swagger because this projects already
        includes a DMN asset, the <code><b>Traffic Violation.dmn</b></code> file:</p>
      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code># Check the DMN model inside of the `dmn-quarkus-example` directory
<b>ls</b> src/main/resources</code></pre>
        </div>
      </div>

      <p>
        You can click in the canvas area to check the properties of the model in the properties panel (the panel on the
        right side of the screen). Once you open that panel, you can see the name of the model and update it, if you
        desire to.
      </p>

      <p>
        You can also explore, change, or enhance this sample model, by accessing the DMN online editor on <a
          href="https://kiegroup.github.io/kogito-online">kiegroup.github.io/kogito-online</a>:
      </p>

      <img src="/assets/execution-explore-model.gif" style="border-bottom: 1px solid #777; margin-bottom: 20px;" />

      <p>
        Explore the decision logic on the <code>"Should the driver be suspended?"</code> and
        <code>"Fine"</code> nodes. Thus, you may find out how this model makes decisions.
      </p>

      <h4>3) Execute your model</h4>
      <p>Finally, it's time to execute the <b>Traffic Violation</b> model! Open a new terminal window and execute the
        POST request below:</p>

      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>curl -X POST -H 'Content-Type: application/json' <b>http://localhost:8080/Traffic%20Violation</b> --data '
<b>{
  "Driver" : {
    "Name" : "John Doe",
    "Points" : 14,
    "City" : "Sao Paulo"
  },
  "Violation" : {
    "Type" : "speed",
    "Speed Limit" : 100,
    "Actual Speed" : 120
  }
}</b>'</code></pre>
        </div>
      </div>
      <p>
        Notice that the decision <code>"Should the driver be suspended?"</code> returns
        <code>"No"</code> for the input values above.
      </p>

      <p>Now, let's execute this request:</p>


      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>curl -X POST -H 'Content-Type: application/json' <b>http://localhost:8080/Traffic%20Violation</b> --data '
<b>{
  "Driver" : {
    "Name" : "John Doe",
    "Points" : 14,
    "City" : "Sao Paulo"
  },
  "Violation" : {
    "Type" : "speed",
    "Speed Limit" : 100,
    "Actual Speed" : 140
  }
}</b>'</code></pre>
        </div>
      </div>

      <p>The new value for <code>Violation.Actual Speed</code> changes the decision node
        <code>Should the driver be suspended?</b></code> to return <code>"Yes"</code>.</p>
      <a class="button next-section" href="/learn/keep-learning">Next section →</a>
    </div>
  </div>
</div>
