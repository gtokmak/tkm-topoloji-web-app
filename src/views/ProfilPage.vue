<template>
    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Users</li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <ProfileCard  />

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Şifre Değiştir</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <ProfileOverview/>
                <ProfileEdit/>
                <ProfileChangePassword/>
              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
      </div>
    </section>
  </template>
  

<script setup>
  import ProfileCard from '@/components/ProfileCard.vue';
  import ProfileEdit from '@/components/ProfileEdit.vue';
  import ProfileOverview from '@/components/ProfileOverview.vue';
  import ProfileChangePassword from '@/components/ProfileChangePassword.vue';
 

</script>
  