---
layout: learn
---
<div id="section-the-feel-language" class="learn-section">
  <div class="learn-home-content">
    <div class="page">
      <h1>The FEEL language</h1>
      <hr />

      <p>
        Literal expressions, decision tables, and many other DMN elements depend on textual expressions to work. The
        <b>FEEL</b> (Friendly Enough Expression Language) shines as a readable language for programmers and business
        analysts. Its design follows these principles:
      </p>
      <ul>
        <li>Side-effect free</li>
        <li>Simple data model with numbers, dates, strings, lists, and contexts</li>
        <li>Simple syntax designed for a broad audience</li>
        <li>Three-valued logic (<code>true</code>, <code>false</code>, <code>null</code>)</li>
      </ul>
      <p>
        This section presents an example-guided approach, that shows the most used features of FEEL.
      </p>

      <h4>Conditional statements</h4>
      <p>
        Here you can see an example of a decision node with a literal expression as the decision logic. Notice how the
        FEEL expression defines the logic of the node:
      </p>
      <img src="/assets/the-feel-language.png" width="80%" />
      <p>
        You also could define different behaviors:
      </p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>if</b> 20 > 0 <b>then</b> "YES" <b>else</b> "NO"</td>
            <td>"YES"</td>
          </tr>
          <tr>
            <td><b>if</b> (20 - (10 * 2)) > 0 <b>then</b> "YES" <b>else</b> "NO"</td>
            <td>"NO"</td>
          </tr>
          <tr>
            <td><b>if</b> (2 ** 3) = 16 <b>then</b> "YES" <b>else</b> "NO"</td>
            <td>"YES"</td>
          </tr>
          <tr>
            <td><b>if</b> (4 / 2) != 2 <b>then</b> "YES" <b>else</b> "NO"</td>
            <td>"NO"</td>
          </tr>
        </tbody>
      </table>

      <h4>Loop statements</h4>
      <p>
        Loop statements can transform lists or verify if some elements satisfy a specific condition:
      </p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>for</b> i <b>in</b> [1, 2, 3, 4, 5] <b>return</b> i * i</td>
            <td>[1, 4, 9, 16, 25]</td>
          </tr>
          <tr>
            <td><b>some</b> i <b>in</b> [1, 2, 3, 4, 5] <b>satisfies</b> i > 4</td>
            <td>true</td>
          </tr>
          <tr>
            <td><b>some</b> i <b>in</b> [1, 2, 3, 4, 5] <b>satisfies</b> i > 5</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you're curious about this kind of statement, you may try to discover more about this one:
        <code><b>every</b> i <b>in</b> [list] <b>satisfies</b> [condition]</code> ;-)
      </p>

      <h4>Range statements</h4>
      <p>
        Ranges have a tricky syntax to determine included and excluded elements in a given interval. The following
        examples clarify that by checking if some number is included in each range:
      </p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 <b>in</b> [1..10]</td>
            <td>true</td>
          </tr>
          <tr>
            <td>1 <b>in</b> (1..10]</td>
            <td>false</td>
          </tr>
          <tr>
            <td>10 <b>in</b> [1..10]</td>
            <td>true</td>
          </tr>
          <tr>
            <td>10 <b>in</b> [1..10)</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h4>String functions</h4>
      <p>FEEL has many useful functions to handle strings. Here you can see a list the most frequently used:</p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>string length</b>("Learn DMN in 15 minutes")</td>
            <td>23</td>
          </tr>
          <tr>
            <td><b>upper case</b>("Learn DMN in 15 minutes")</td>
            <td>"LEARN DMN IN 15 MINUTES"</td>
          </tr>
          <tr>
            <td><b>lower case</b>("Learn DMN in 15 minutes")</td>
            <td>"learn dmn in 15 minutes"</td>
          </tr>
          <tr>
            <td><b>substring</b>("Learn DMN in 15 minutes", 7, 3)</td>
            <td>"DMN"</td>
          </tr>
          <tr>
            <td><b>replace</b>("Learn DMN in 15 minutes", "DMN", "FEEL")</td>
            <td>"Learn FEEL in 15 minutes"</td>
          </tr>
          <tr>
            <td><b>contains</b>("Learn DMN in 15 minutes", "DMN")</td>
            <td>true</td>
          </tr>
          <tr>
            <td><b>contains</b>("Learn DMN in 15 minutes", "FEEL")</td>
            <td>false</td>
          </tr>
          <tr>
            <td><b>string</b>(123)</td>
            <td>"123"</td>
          </tr>
        </tbody>
      </table>

      <h4>Number functions</h4>
      <p>FEEL has many useful functions to handle numbers as well:</p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>abs</b>(-1)</td>
            <td>1</td>
          </tr>
          <tr>
            <td><b>even</b>(2)</td>
            <td>true</td>
          </tr>
          <tr>
            <td><b>even</b>(3)</td>
            <td>false</td>
          </tr>
          <tr>
            <td><b>odd</b>(4)</td>
            <td>false</td>
          </tr>
          <tr>
            <td><b>odd</b>(5)</td>
            <td>true</td>
          </tr>
          <tr>
            <td><b>sqrt</b>(9)</td>
            <td>3.0</td>
          </tr>
        </tbody>
      </table>

      <h4>Date and Time functions</h4>
      <p>You can create date or time values by using strings or numbers, see:</p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>date</b>("2020-12-31")</td>
            <td>[2020, 12, 31]</td>
          </tr>
          <tr>
            <td><b>date</b>(2020, 12, 31)</td>
            <td>[2020, 12, 31]</td>
          </tr>
          <tr>
            <td><b>time</b>("14:59:59")</td>
            <td>[14, 59, 59]</td>
          </tr>
          <tr>
            <td><b>time</b>(14, 59, 59)</td>
            <td>[14, 59, 59]</td>
          </tr>
          <tr>
            <td><b>date and time</b>("2020-12-31T14:59:59")</td>
            <td>[2020, 12, 31, 14, 59, 59]</td>
          </tr>
          <tr>
            <td><b>date and time</b>(2020, 12, 31, 14, 59, 59)</td>
            <td>[2020, 12, 31, 14, 59, 59]</td>
          </tr>
          <tr>
            <td><b>day of week</b>(date("2020-12-31"))</td>
            <td>"Thursday"</td>
          </tr>
          <tr>
            <td><b>month of year</b>(date("2020-12-31"))</td>
            <td>"December"</td>
          </tr>
          <tr>
            <td><b>week of year</b>(date("2020-12-31"))</td>
            <td>53</td>
          </tr>
        </tbody>
      </table>

      <h4>List functions</h4>
      <p>Finally, FEEL has a bunch of functions to manipulate lists intuitively:</p>
      <table class="code-table">
        <thead>
          <tr>
            <th width="55%">Example</th>
            <th>Return value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>concatenate</b>([1, 2, 3], [4, 5])</td>
            <td>[1, 2, 3, 4, 5]</td>
          </tr>
          <tr>
            <td><b>count</b>([1, 2, 3, 4, 5])</td>
            <td>5</td>
          </tr>
          <tr>
            <td><b>distinct values</b>([1, 1, 2, 2, 3, 3, 4, 5])</td>
            <td>[1, 2, 3, 4, 5]</td>
          </tr>
          <tr>
            <td><b>flatten</b>([1, [2, 3], [4, 5]])</td>
            <td>[1, 2, 3, 4, 5]</td>
          </tr>
          <tr>
            <td><b>max</b>([1, 2, 3, 4, 5])</td>
            <td>5</td>
          </tr>
          <tr>
            <td><b>mean</b>([1, 2, 3, 4, 5])</td>
            <td>3</td>
          </tr>
          <tr>
            <td><b>min</b>([1, 2, 3, 4, 5])</td>
            <td>1</td>
          </tr>
          <tr>
            <td><b>reverse</b>([1, 2, 3, 4, 5])</td>
            <td>[5, 4, 3, 2, 1]</td>
          </tr>
          <tr>
            <td><b>sort</b>([5, 4, 1, 2, 3])</td>
            <td>[1, 2, 3, 4, 5]</td>
          </tr>
          <tr>
            <td><b>sum</b>([1, 2, 3, 4, 5])</td>
            <td>15</td>
          </tr>
          <tr>
            <td><b>index of</b>(["a", "b", "c", "d", "e", "f"], "c")</td>
            <td>3</td>
          </tr>
          <tr>
            <td><b>append</b>([1, 2, 3, 4, 5], 6)</td>
            <td>[1, 2, 3, 4, 5, 6]</td>
          </tr>
          <tr>
            <td><b>list contains</b>([1, 2, 3, 4, 5], 5)</td>
            <td>true</td>
          </tr>
          <tr>
            <td><b>list contains</b>([1, 2, 3, 4, 5], 6)</td>
            <td>false</td>
          </tr>
          <tr>
            <td><b>remove</b>(["a", "b", "c", "d", "e", "f"], 2)</td>
            <td>["a", "c", "d", "e", "f"]</td>
          </tr>
          <tr>
            <td><b>sublist</b>([1, 2, 3, 4, 5], 2, 3)</td>
            <td>[2, 3, 4]</td>
          </tr>
        </tbody>
      </table>
      <p>
        Here you've learned the most frequently used FEEL structures. There are other powerful features you may learn on
        the <a href="https://www.omg.org/spec/DMN/1.2/PDF">DMN spec</a>. If you're feeling inspired, take a look there
        :-)
      </p>
      <a class="button next-section" href="/learn/visual-notation">Next section →</a>
    </div>
  </div>
</div>
