<script  setup>
    import useAuthUser from "@/composables/UseAuthUser";
    const { user } = useAuthUser();
</script>

<template>
    <div class="col-xl-4">
        <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

            <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
            <h2>{{ user.user_metadata.name }}</h2>
            <h3>Web Designer</h3>
            <div class="social-links mt-2">
            <a :href="twitter" class="twitter"><i class="bi bi-twitter"></i></a>
            <a :href="facebook" class="facebook"><i class="bi bi-facebook"></i></a>
            <a :href="instagram" class="instagram"><i class="bi bi-instagram"></i></a>
            <a :href="linkedin" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
        </div>
    </div>
</template>
