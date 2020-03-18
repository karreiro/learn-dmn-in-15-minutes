---
layout: learn
---
<div id="section-the-feel-language" class="learn-section">
  <div class="learn-home-content">
    <div class="page">

      <h2>Execution</h2>
      <hr />
      <p>Once you know most of the DMN features, you probably want to execute your model to see it in action. Let's do
        it in <b>3 simple steps!</b></p>

      <h4>1) Setup the Kogito REST API</h4>
      <p>
        First of all, download all Kogito examples from <a
          href="https://github.com/kiegroup/kogito-examples/archive/0.8.0.zip">github.com/kiegroup/kogito-examples/archive/0.8.0.zip</a>
        and unzip this the Zip file (you can try download the latest version as well, but currently I'm using the 0.8.0
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
      <p>OK! Wait a bit and open the <a href="localhost:8080/swagger-ui">http://localhost:8080/swagger-ui</a> to check
        the Swagger UI:</p>

      <img src="/assets/execution-swagger-ui.png" />

      <p>If you're seeing something like the screen above... Great! You're running the Kogito REST API!</p>

      <p>If you learn more about everything behind this servier, you can check this <a
          href="https://kogito.kie.org/get-started">https://kogito.kie.org/get-started</a>. However, if you're wondering
        about this <code>/Traffic%20Violation</code> URL, keep reading! :-)</p>

      <h4>2) The DMN <i>Traffic Violation</i> model</h4>
      <p>The <code>/Traffic%20Violation</code> URL appears in the DMN example swagger because this projects already
        includes a DMN asset, the <code><b>Traffic Violation.dmn</b></code> file:</p>
      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code># Check the DMN model inside of the `dmn-quarkus-example` directory
<b>ls</b> src/main/resources</code></pre>
        </div>
      </div>

      <p>You can just click in the canvas to check the properties of the whole model in panel to the right. There you
        can see the name of the model.</p>

      <p>You can also explore, change, or enhaance this sample model, by accessing the DMN online editor on <a
          href="https://kiegroup.github.io/kogito-online">kiegroup.github.io/kogito-online</a>:</p>

      <img src="/assets/execution-explore-model.gif" style="border-bottom: 1px solid #777" />

      <p>Explore the decision logic on the Fine and "Should the driver be suspended?" and "Fine" to understand how
        this file takes a decision.</p>

      <h4>3) Execute your model</h4>
      <p>Finally, it's time to execute the <b>Traffic Violation</b> model! Open a new terminal window and execute the
        POST request below:</p>

      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>curl -X POST -H 'Content-Type: application/json' http://localhost:8080/Traffic%20Violation --data '
{
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
}'</code></pre>
        </div>
      </div>
      <p>Try to execute the script above and understand why the decision node
        <code><b>Should the driver be suspended?</b></code> returns <code>"No"</code>.</p>

      <p>Also, try to execute this:</p>


      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>curl -X POST -H 'Content-Type: application/json' http://localhost:8080/Traffic%20Violation --data '
{
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
}'</code></pre>
        </div>
      </div>

      <p>Now, try to execute the script above and understand why the decision node
        <code><b>Should the driver be suspended?</b></code> returns <code>"Yes"</code>.</p>
    </div>
  </div>
</div>
