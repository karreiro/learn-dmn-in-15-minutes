---
layout: learn
---

<div id="section-decision-logic" class="learn-section">
  <div class="learn-home-content">
    <div class="page">
      <h2>Decision logic</h2>

      <p>
        Decision nodes may express their logic by a variety of decision logic.
      </p>
      <p>
        <img src="/assets/decision-logic-1.gif" style="border: 1px solid #DFDFDF" />
      </p>
      <p>
        Let's check how each one works :-)
      </p>

      <h4>1. Literal expressions</h4>
      <p>
        Literal expressions hold a text (FEEL expression) that determines the logic for producing the output value.
      </p>

      <h4>2. Contexts</h4>
      <p>
        Contexts represent a collection of one or more key-value pairs, where the value is a decision logic, and the key
        is the respective identifier. That value field can contain any type of expression: a literal expression, a
        decision table, a relation, function, an invocation, or even another context.

        Generally, contexts hold one or more local variables (values related to a local context). See an example of a
        Context with two key-value pairs, both with an identifier and a literal expression:
      </p>

      <img src="/assets/decision-logic-2.png" />

      <p>
        Considering this example, when <code>"Driver points"</code> and <code>"Violation points"</code> are,
        respectively, <code>10</code> and <code>5</code>, the output node <code>"Should the driver be suspended?"</code>
        would return <code>"NO"</code>. However, with <code>"Driver points"</code> and <code>"Violation points"</code>
        with <code>10</code> and <code>15</code>, the output node <code>"Should the driver be suspended?"</code> would
        return <code>"YES"</code>.
      </p>

      <h4>3. Decision Tables</h4>

      <p>
        Decision tables are a tabular representation of conditional decision logic. The main elements are:
      </p>
      <ul>
        <li>input columns, the light blue columns</li>
        <li>output columns, the dark blue columns</li>
        <li>the hit policy, the letter in the top-left corner</li>
      </ul>
      <img src="/assets/decision-logic-3.png" />
      <p>
        The mechanism is quite intuitive. Each row represents a rule, and when the input matches, the output value is
        selected as the decision output. When multiple rows match, the hit policy decides the right row (generally,
        Unique is the best hit policy).
      </p>
      <p>
        Considering the decision table above check the following scenarios and the expected output:
      </p>
      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>/* === SCENARIO 1 === */

/* = Actual input data = */
<b>"Violation": {
  "Type": "speed",
  "Speed Limit": 60,
  "Actual Speed": 100
}</b>

/* = Expected output data = */
<b>"Fine": {
  "Points": 7,
  "Amount": 1000
}</b></code></pre>
        </div>
      </div>

      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>/* === SCENARIO 2 === */

/* = Actual input data = */
<b>"Violation": {
  "Type": "speed",
  "Speed Limit": 60,
  "Actual Speed": 70
}</b>

/* = Expected output data = */
<b>"Fine": {
  "Points": 3,
  "Amount": 500
}</b></code></pre>
        </div>
      </div>

      <h4>4. Relations</h4>
      <p>
        Relations are a pretty straight decision logic. They encapsulate lists of expressions:
      </p>
      <img src="/assets/decision-logic-4.png" />
      <p>This relation returns this:</p>
      <div class="language-plaintext highlighter-rouge">
        <div class="highlight">
          <pre class="highlight"><code>[
  {
    "first column": 2,
    "second column": 0.75
  },
  {
    "first column": 15625,
    "second column": 15
  },
  {
    "first column": -1,
    "second column": 0
  }
]</code></pre>
        </div>
      </div>

      <h4>5. Functions</h4>
      <p>
        Functions define reusable operations into your model. When you can't or don't want to use FEEL to express some
        specific logic, you can also call it from the PMML or Java world.

        <img src="/assets/decision-logic-5.png" />

        Usually, try to use business knowledge model nodes for defining functions, but you can define them of decision
        nodes as well, depending on your context.
      </p>

      <h4>6. Invocations</h4>
      <p>
        Invocations map the invocation for business knowledge model nodes.
      </p>
      <a class="button next-section" href="/learn/data-types">Next section →</a>
    </div>
  </div>
</div>
