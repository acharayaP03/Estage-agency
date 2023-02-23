
<template>
    <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <NuxtLink class="navbar-brand text-brand" href="index.html">Estate<span class="color-b">Agency</span></NuxtLink>

            <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                <ul class="navbar-nav">

                <li class="nav-item">
                    <NuxtLink class="nav-link active" href="index.html">Home</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link " href="about.html">About</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link " href="property-grid.html">Property</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link " href="blog-grid.html">Blog</NuxtLink>
                </li>

                <li class="nav-item dropdown">
                    <NuxtLink class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</NuxtLink>
                    <div class="dropdown-menu">
                    <NuxtLink class="dropdown-item " href="property-single.html">Property Single</NuxtLink>
                    <NuxtLink class="dropdown-item " href="blog-single.html">Blog Single</NuxtLink>
                    <NuxtLink class="dropdown-item " href="agents-grid.html">Agents Grid</NuxtLink>
                    <NuxtLink class="dropdown-item " href="agent-single.html">Agent Single</NuxtLink>
                    </div>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link " href="contact.html">Contact</NuxtLink>
                </li>
                </ul>
            </div>

            <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                <i class="bi bi-search"></i>
            </button>

        </div>
    </nav><!-- End Header/Navbar -->

    <!-- Main content goes here -->
    <main id="main">
        <slot/>
    </main>

    <div id="preloader" ref="preloader"></div>
      <!-- ======= Footer ======= -->
  <section class="section-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">EstateAgency</h3>
            </div>
            <div class="w-body-a">
              <p class="w-text-a color-text-a">
                Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                sed aute irure.
              </p>
            </div>
            <div class="w-footer-a">
              <ul class="list-unstyled">
                <li class="color-a">
                  <span class="color-text-a">Phone .</span> contact@example.com
                </li>
                <li class="color-a">
                  <span class="color-text-a">Email .</span> +54 356 945234
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 section-md-t3">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">The Company</h3>
            </div>
            <div class="w-body-a">
              <div class="w-body-a">
                <ul class="list-unstyled">
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Site Map</a>
                  </li>
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Legal</a>
                  </li>
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Agent Admin</a>
                  </li>
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Careers</a>
                  </li>
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Affiliate</a>
                  </li>
                  <li class="item-list-a">
                    <i class="bi bi-chevron-right"></i> <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 section-md-t3">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">International sites</h3>
            </div>
            <div class="w-body-a">
              <ul class="list-unstyled">
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">Venezuela</a>
                </li>
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">China</a>
                </li>
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">Hong Kong</a>
                </li>
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">Argentina</a>
                </li>
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">Singapore</a>
                </li>
                <li class="item-list-a">
                  <i class="bi bi-chevron-right"></i> <a href="#">Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <NuxtLink href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></NuxtLink>
    <footer>
        <div class="container">
        <div class="row">
            <div class="col-md-12">
            <nav class="nav-footer">
                <ul class="list-inline">
                <li class="list-inline-item">
                    <NuxtLink href="#">Home</NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">About</NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">Property</NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">Blog</NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">Contact</NuxtLink>
                </li>
                </ul>
            </nav>
            <div class="socials-a">
                <ul class="list-inline">
                <li class="list-inline-item">
                    <NuxtLink href="#">
                    <i class="bi bi-facebook" aria-hidden="true"></i>
                    </NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">
                    <i class="bi bi-twitter" aria-hidden="true"></i>
                    </NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">
                    <i class="bi bi-instagram" aria-hidden="true"></i>
                    </NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink href="#">
                    <i class="bi bi-linkedin" aria-hidden="true"></i>
                    </NuxtLink>
                </li>
                </ul>
            </div>
            <div class="copyright-footer">
                <p class="copyright color-text-a">
                &copy; Copyright
                <span class="color-a">EstateAgency</span> All Rights Reserved.
                </p>
            </div>
            <div class="credits">
                <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
            -->
                Designed by <NuxtLink href="https://bootstrapmade.com/">BootstrapMade</NuxtLink>
            </div>
            </div>
        </div>
        </div>
    </footer><!-- End  Footer -->
</template>

<script setup>
    const preloader = ref(null)

    onMounted(() =>{
        setTimeout(() => {
            if(preloader){
                 window.onload = preloader.value.remove()
            }
        }, 2000);
    })
</script>
