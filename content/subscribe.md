---
title: Subscribe
description: A free weekly email on what changed in tokenized securities.
last_checked: '2026-11-08'
---

A free weekly email on what changed in tokenized securities. Leave your email and we'll add you to the list.

<form class="signup-form" method="post" action="/v1/subscribe" data-signup>
  <p class="signup-help">Only your email is required.</p>
  <label for="signup-email">Email <span class="signup-req">(required)</span></label>
  <input id="signup-email" type="email" name="email" required maxlength="254" autocomplete="email" placeholder="you@example.com">
  <label for="signup-name">Name <span class="signup-opt">(optional)</span></label>
  <input id="signup-name" type="text" name="name" maxlength="100" autocomplete="name">
  <label for="signup-role">Role <span class="signup-opt">(optional)</span></label>
  <select id="signup-role" name="role">
    <option value="" selected></option>
    <option>Investor</option>
    <option>Builder/developer</option>
    <option>Issuer</option>
    <option>Policy/legal</option>
    <option>Just curious</option>
    <option>Other</option>
  </select>
  <button type="submit">Subscribe</button>
  <div class="signup-hp" aria-hidden="true"><label>Leave this empty <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  <input type="hidden" name="source" value="/subscribe">
  <p class="signup-consent">By subscribing you agree to get the Ed's Tokenized Securities Rails weekly email. We only use your address for this email, never sell or share it, and you can ask to be removed any time.</p>
  <p class="signup-msg" role="status" aria-live="polite"></p>
</form>

*Reference information only. Not investment advice.*
