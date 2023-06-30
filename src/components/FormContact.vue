<template>
  <v-layout class="d-flex text-center">
    <v-card
      class="mx-auto pt-4 border rounded-lg"
      width="600px"
      title="Contact Us"
      elevation="10"
    >
      <v-container>
        <v-form v-model="valid">

        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="underlined"
          :rules="nameRules"
          :counter="4"
        ></v-text-field>

        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="underlined"
          :rules="nameRules"
          :counter="4"
        ></v-text-field>

        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
          :rules="emailRules"
        ></v-text-field>

        <v-textarea
          v-model="message"
          color="primary"
          label="Messsage"
          variant="underlined"
          :rules="messageRules"
          :counter="10"
        >
        </v-textarea>
        </v-form>
        <!-- <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox> -->
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click="sendMessage()">
          <v-icon
            icon="mdi mdi-email-arrow-right"
            size="x-large"
            start
          ></v-icon>
          Send message
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      valid: false,
      first: "",
      last: "",
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: "",
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      message: "",
      messageRules: [
        value => {
          if(value?.length <= 50) return true
          return 'Name must be less than 50 characters.'
        }
      ],
      info: {},      
    };
  },
  methods: {
    sendMessage() {
      this.info = {
        name: this.first,
        surname: this.last,
        email: this.email,
        message: this.message,
      };
      console.log(this.info);
    },
  },
};
</script>

