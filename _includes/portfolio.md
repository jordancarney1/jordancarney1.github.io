<div class="row my-work">
  <div class="col s12 section">
  <h2 id="portfolio">Portfolio</h2>
    <div class="row">
    {% for project in site.projects %}
      <div class="col s12 m6 l4">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="{{ project.mainImage | absolute_url }}" alt="{{ project.mainImageAlt }}" />
          </div>
          <div class="card-content">
            <span class="card-title activator">{{ project.title }}<i class="material-icons right">info_outline</i></span>
          </div>
          <div class="card-action">
            <p><a href="{{ project.cardActionLink }}" target="_blank">{{ project.cardAction }}<i class="material-icons" aria-hidden="true">open_in_new</i></a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title">{{ project.title }}<i class="material-icons right">close</i></span>
            {{ project.content }}
          </div>
        </div><!-- end card -->
      </div><!-- end cols -->
    {% endfor %}
    </div>
  </div>
</div>