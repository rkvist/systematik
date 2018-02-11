---
title: "Formular"
date: 2018-02-08T13:59:07+01:00
---
# Formular

<div>
        <div id="formfeedback" class="hidden">Vi vender tilbage snarest!</div>
          <form action="" method="post" id="kontaktmig">

              <label for="Navn">Navn</label>
              <input type="text" id="navn" name="navn" placeholder="Dit navn">

              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Din e-mail">

              <label for="henvendelse">Jeg henvender mig vedr.:</label>
              <select id="henvendelse" name="henvendelse">
                <option value="support">Support</option>
                <option value="tilbud">Tilbud</option>
                <option value="prepurchase">Spørgsmål før køb</option>
              </select>

              <label for="besked">Besked</label>
              <textarea id="besked" name="besked" placeholder="Din besked.."></textarea>

              <input type="submit" name="submit" value="Submit">
              <input type="reset" name="reset" value="Reset">
              
              <div id="formfailure" class="hidden"></div>
          </form>

      </div>
