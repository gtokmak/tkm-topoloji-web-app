<template>
  <main>
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
                    <h5 class="card-title text-center pb-0 fs-4">Hesap oluştur</h5>
                    <p class="text-center small">Hesap oluşturmak için kişisel bilgilerinizi girin</p>
                  </div>

                  <form class="row g-3 needs-validation" @submit.prevent="handleSubmit" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Adınız</label>
                      <input type="text" name="name" class="form-control" id="yourName" v-model="form.name" required>
                      <div class="invalid-feedback">Lütfen adınızı giriniz!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">E-posta adresiniz</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" v-model="form.email" required>
                      <div class="invalid-feedback">Lütfen geçerli bir E-posta adresi girin!</div>
                    </div>


                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Şifre</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" v-model="form.password" required>
                      <div class="invalid-feedback">Lütfen şifrenizi girin!</div>
                    </div>
                    
                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Şifre Tekrar</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" v-model="rePassword" required>
                      <div class="invalid-feedback">Lütfen şifrenizi girin!</div>
                    </div>

    
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Hesap oluştur</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Zaten hesabınız var mı? <router-link to="/login">Giriş</router-link></p>
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

const router = useRouter();
const { register } = useAuthUser();

// Form reactive ref to keep up with the form data
const rePassword = ref('test123')
const form = ref({
  name: "Gokhan Tokmak",
  email: "gtokmak@gmail.com",
  password: "test123",
});

const handleSubmit = async () => {
  try {
    if(form.value.password != rePassword.value)
    {
      alert(`Sifreler ayni degil`)
      return
    }
        // use the register method from the AuthUser composable
    await register(form.value);
    router.push(`/login`)

        // and redirect to a EmailConfirmation page the will instruct
        // the user to confirm they're email address
  } catch (error) {
    alert(error.message);
  }
};

</script>
