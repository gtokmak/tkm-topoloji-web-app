<script  setup>

    import { reactive } from 'vue';
    import useAuthUser from "@/composables/UseAuthUser";
    const { user } = useAuthUser();

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

    const handleUpload = async() => {
    const file = document.querySelector('input[type=file]').files[0];
    if (!file) {
        alert('Lütfen bir resim seçin!');
        return;
    }

    try {
        const { data, error } = await supabase.storage.from('profile_image').upload(`public/${file.name}`, file);
        
        if (error) {
            throw error;
        }

        if (data) {
            alert('Resim başarıyla yüklendi!');
            const imageUrl = `${YOUR_STORAGE_URL}/public/${file.name}`;
            // Görüntüleme alanını güncelle
            document.querySelector('#profileImage').src = imageUrl;
        }
    } catch (error) {
        console.error(`handleUpload: `, error.message);
        alert(error.message);
    }
};

    const handleRemove = async() => {
        alert(`handleRemove`)
    }


</script>

<template>
    <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
        <!-- Profile Edit Form -->
        <form>
            <div class="row mb-3">
                <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                <div class="col-md-8 col-lg-9">
                <img src="assets/img/profile-img.jpg" alt="Profile">
                <div class="pt-2">
                    <label for="fileInput" class="btn btn-primary btn-sm" title="Upload new profile image">
                        <i class="bi bi-upload"></i>
                    </label>
                    <input id="fileInput" type="file" style="display: none;" @change="handleUpload">

                    <a @click="handleUpload" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                    <a @click="handleRemove" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                </div>
                </div>
            </div>

            <div class="row mb-3">
                <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                <div class="col-md-8 col-lg-9">
                <input name="fullName" type="text" class="form-control" id="fullName" :value="user.user_metadata.name">
                </div>
            </div>

            <div class="row mb-3">
                <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                <div class="col-md-8 col-lg-9">
                <textarea name="about" class="form-control" id="about" style="height: 100px"></textarea>
                </div>
            </div>

            <div class="row mb-3">
                <label for="company" class="col-md-4 col-lg-3 col-form-label">Company</label>
                <div class="col-md-8 col-lg-9">
                <input name="company" type="text" class="form-control" id="company" value="">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Job" class="col-md-4 col-lg-3 col-form-label">Job</label>
                <div class="col-md-8 col-lg-9">
                <input name="job" type="text" class="form-control" id="Job" value="">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                <div class="col-md-8 col-lg-9">
                <input name="country" type="text" class="form-control" id="Country" value="">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                <div class="col-md-8 col-lg-9">
                <input name="address" type="text" class="form-control" id="Address" value="">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                <div class="col-md-8 col-lg-9">
                <input name="phone" type="text" class="form-control" id="Phone" value="">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                <div class="col-md-8 col-lg-9">
                <input name="email" type="email" class="form-control" id="Email" :value="user.email">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                <div class="col-md-8 col-lg-9">
                <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                <div class="col-md-8 col-lg-9">
                <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                <div class="col-md-8 col-lg-9">
                <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#">
                </div>
            </div>

            <div class="row mb-3">
                <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                <div class="col-md-8 col-lg-9">
                <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#">
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </form><!-- End Profile Edit Form -->
    </div>
</template>
