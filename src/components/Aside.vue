<template >
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <router-link to="/" class="nav-link">
                    <i class="bi bi-grid"></i>
                    <span>Anasayfa</span>
            </router-link>
        </li><!-- End Dashboard Nav -->

        <li class="nav-item">
            <router-link to="/rehber" class="nav-link">
                    <i class="bi bi-journal-text"></i>
                    <span>Rehber</span>
            </router-link>
        </li><!-- End Dashboard Nav --><!-- End Contacts Nav -->

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i class="bi bi-menu-button-wide"></i><span>Cihazlar</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <!-- <li>
                <router-link to="/akd">
                    <i class="bi bi-circle"></i><span>AKD</span>
                </router-link>   
            </li>
            <li>
                <router-link to="/vtt">
                    <i class="bi bi-circle"></i><span>VTT</span>
                </router-link>   
            </li>
            <li>
                <router-link to="/kamera">
                    <i class="bi bi-circle"></i><span>Kamera</span>
                </router-link>   
            </li>
            <li>
                <router-link to="/switch">
                    <i class="bi bi-circle"></i><span>Ağ Anahtarı</span>
                </router-link>   
            </li> -->
            </ul>
        </li><!-- End Components Nav -->

        </ul>

    </aside><!-- End Sidebar-->
</template>


<script>
export default {
    
}
</script>
<style >
    
</style>