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
      <div class="text-center text-black text-h5">Register to Twitter</div>
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="emailRules"
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

      <div
        class="
          text-subtitle-1 text-medium-emphasis
          d-flex
          align-center
          justify-space-between
        "
      >
        Repeat password
      </div>

      <v-text-field
        v-model="confirmPassword"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        :rules="confirmPasswordRules"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="black"
        size="large"
        rounded="pill"
        @click="register"
      >
        Register
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      visible: false,
      email: null,
      password: null,
      confirmPassword: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      confirmPasswordRules: [
        (value) => !!value || "Confirm password is required",
        (value) => {
          return (
            value === this.password ||
            "The password confirmation does not match."
          );
        },
      ],
    };
  },
  methods: {
    async register() {
      console.log(this.email);
      console.log(this.password);
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("success", userCredential.user);
        this.$router.push("/");
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>