<template>
    <main >
        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <div class="d-flex justify-content-center py-4">
                        <a class="logo d-flex align-items-center w-auto">
                        <img src="../assets/img/dbb-logo.png" alt="">
                        <span class="d-none d-lg-block">Denizli Büyükşehir Belediyesi</span>
                        </a>
                    </div><!-- End Logo -->

                    <div class="card mb-3">

                        <div class="card-body">

                        <div class="pt-4 pb-2">
                            <h5 class="card-title text-center pb-0 fs-4">Hesabınıza giriş yapın.</h5>
                            <p class="text-center small">Giriş yapmak için kullanıcı adınızı ve şifrenizi girin</p>
                        </div>

                        <form class="row g-3 needs-validation" @submit.prevent="handleLogin" novalidate >

                            <div class="col-12">
                            <label for="yourUsername" class="form-label">Kullanıcı adı</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" name="username" class="form-control" id="yourUsername" @input="handleChange" v-model="form.email" required>
                                <div class="invalid-feedback">Lütfen kullanıcı adını giriniz.</div>
                            </div>
                            </div>

                            <div class="col-12">
                            <label for="yourPassword" class="form-label">Şifre</label>
                            <input type="password" name="password" class="form-control" id="yourPassword" v-model="form.password" required>
                            <div class="invalid-feedback">Lütfen şifrenizi giriniz!</div>
                            </div>

                            <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                <label class="form-check-label" for="rememberMe">Beni hatırla</label>
                            </div>
                            </div>
                            <div class="col-12">
                            <button class="btn btn-primary w-100" type="submit">Giriş</button>
                            </div>
                            <div class="col-12">
                            <p class="small mb-0">Hesabınız yok mu? 
                                <router-link to="/register"> Yeni hesap oluştur.</router-link> 
                                </p>
                            </div>
                        </form>
                        </div>
                    </div>

                    <div class="credits">
                        <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    </main><!-- End #main -->
</template>

<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { login } = useAuthUser();

// keep up with form data
const form = ref({
  email: "gtokmakk@gmail.com",
  password: "test123",
});

// call the proper login method from the AuthUser composable
// on the submit of the form
const handleLogin = async () => {
  try {
     await login(form.value);
    router.push({ name: "Anasayfa" });
  } catch (error) {
    alert(error.message);
  }
};

</script>
