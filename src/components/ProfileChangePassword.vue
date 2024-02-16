<script setup>

    import { reactive } from 'vue';
    import useAuthUser from "@/composables/UseAuthUser";

    const { update } = useAuthUser();

    const changePasswordForm = reactive({
        currentPassword: '',
        newPassword: '',
        renewPassword: ''
    })
    
    

    const handleChangePassword = async() => {
        
        if (changePasswordForm.newPassword !== changePasswordForm.renewPassword)
        {
            alert('Girilen sifreler eslesmiyor!')
        }
        
        try {
            const response = await update({password: changePasswordForm.newPassword})
            console.log(response)
            
        } catch (error) {
            console.error(`handleChangePassword: `, error.message)
            alert(error.message);
        }
    }



</script>

<template>
    <div class="tab-pane fade pt-3" id="profile-change-password">
                <!-- Change Password Form -->
        <form @submit.prevent="handleChangePassword">
            <div class="row mb-3">
                <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Mevcut Şifre</label>
                <div class="col-md-8 col-lg-9">
                <input name="password" type="password" class="form-control" id="currentPassword" v-model="changePasswordForm.currentPassword" required>
                </div>
            </div>

            <div class="row mb-3">
                <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">Yeni Şifre</label>
                <div class="col-md-8 col-lg-9">
                <input name="newpassword" type="password" class="form-control" id="newPassword" v-model="changePasswordForm.newPassword" required>
                </div>
            </div>

            <div class="row mb-3">
                <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Yeni Şifreyi Tekrar Giriniz</label>
                <div class="col-md-8 col-lg-9">
                <input name="renewpassword" type="password" class="form-control" id="renewPassword" v-model="changePasswordForm.renewPassword" required>
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary" >Şifre Değiştir</button>
            </div>
        </form><!-- End Change Password Form -->
    </div>
</template>
