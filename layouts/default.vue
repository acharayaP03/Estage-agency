
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
</template>
