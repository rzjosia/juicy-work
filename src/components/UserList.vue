<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="user in users" :key="user.id" cols="4" align="center">
            <v-avatar color="orange" size="62">
              <img :src="user.avatar" :alt="user.id" />
            </v-avatar>
            <p>{{ user.first_name }} {{ user.last_name }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },
  mounted() {
    if (this.users.length === 0) {
      console.log("no users found here, fetch API");
      this.$store.dispatch("user/loadUsers");
    }
  },
};
</script>