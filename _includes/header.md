<header>
  <div class="nav-height">
  <nav class="">
    <div class="nav-wrapper container">
      <!-- Nav Brand -->
      <a class="brand-logo" href="{{ site.url }}">
        <img class="img-responsive logo" src="{{ "assets/imgs/jc-logo-3a.png" | absolute_url }}" alt="Jordan Carney">
        <div class="txt">
          <h1>Jordan Carney</h1>
          <span class="tagline">Software Developer</span>
        </div>
      </a>
      <!-- End Nav Brand -->
      <!-- Mobile Nav Button -->
      <a href="#" data-activates="mobile-nav" class="button-collapse">
            <span class="hide">Toggle navigation</span>
            <i class="fa fa-bars mobile-btn" aria-hidden="true"></i>
            <span>Menu</span>
      </a>
      <!-- End Mobile Nav -->      
      <!-- Main Nav -->
      <ul class="right hide-on-med-and-down">
        <!-- li><a href="#about">About</a></li -->
        <li><a href="#portfolio">Portfolio</a></li>
        <!-- li><a href="#contact">Contact</a></li -->
      </ul>
      <!-- End Main Nav -->
      <!-- Mobile Nav -->
      <ul class="side-nav" id="mobile-nav" style="transform: translateX(-100%);">
        <!-- li><a href="#about">About</a></li -->
        <li><a href="#portfolio">Portfolio</a></li>
        <!-- li><a href="#contact">Contact</a></li -->
      </ul>
      <!-- End Mobile Nav -->

    </div>
  </nav>
  </div>
  <!-- End Nav -->

  {% if page.url == "/" %}
  <section id="intro" class="section">
    <div class="container">
      <h2>Software Developer</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
      <a id="cta" class="navLink" href="#portfolio">
        View Portfolio
        <i class="fa fa-chevron-down"></i>
      </a>
    </div>
  </section>
  {% endif %}
  
</header>