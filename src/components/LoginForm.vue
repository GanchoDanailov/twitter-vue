<template>
  <div class="py-4 mt-9">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-center text-black text-h5">
        <v-icon
          class="ma-2"
          icon="mdi-twitter"
          size="x-large"
          color="blue-lighten-2"
        ></v-icon>
      </div>
      <div class="text-center text-black text-h5">Sign in to Twitter</div>
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        v-model="email"
        density="compact"
        :rules="emailRules"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="
          text-subtitle-1 text-medium-emphasis
          d-flex
          align-center
          justify-space-between
        "
      >
        Password
        <router-link
          class="text-caption text-decoration-none text-blue"
          to="/reset-password"
          rel="noopener noreferrer"
        >
          Forgot login password?
        </router-link>
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        :rules="passwordRules"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="black"
        size="large"
        rounded="pill"
        @click="login"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link
          to="/register"
          class="text-blue text-decoration-none"
          rel="noopener noreferrer"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      visible: false,
      email: null,
      password: null,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [(v) => !!v || 'Password is required'],
    }
  },
  methods: {
    async login() {
      console.log(this.email)
      console.log(this.password)
      const auth = getAuth()
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        )
        console.log('success', userCredential.user)
        this.$router.push('/')
      } catch (e) {
        console.log('error', e)
      }
    },
  },
}
</script>