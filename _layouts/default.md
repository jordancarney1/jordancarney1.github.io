<!DOCTYPE html>
<html>
  {% include head.md %}
  <body {% if page.bodyClass %}class="{{ page.bodyClass }}"{% endif %}>
    <main> 
      {% include header.md %}
      {{ content }}
      {% include footer.md %}
      {% include socialLinks.md %}
      {% include scripts.md %}
    </main>
  </body>
</html>