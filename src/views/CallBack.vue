<template>
  <div>Redirecting...</div>
</template>

<script>
import axios from 'axios';

export default {
  async created() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const returnedState = urlParams.get('state');
    const storedState = localStorage.getItem('oauth_state');

    if (!returnedState || returnedState !== storedState) {
      console.error('Invalid state parameter. Possible CSRF attack.');
      return; // أو اظهري رسالة خطأ للمستخدم
    }

    if (code) {
      await this.getToken(code);
    } else {
      console.error('Authorization code not found in URL.');
    }
  },
  methods: {
    async getToken(code) {
      const clientId = 'a7288bfe-f1f5-4ed0-a839-9903ec9b2699';
      const clientSecret = '7cec9b672940328020860a36271e608c';
      const redirectUri = 'http://localhost:5173/callback';

      const payload = new URLSearchParams();
      payload.append('grant_type', 'authorization_code');
      payload.append('code', code);
      payload.append('redirect_uri', redirectUri);
      payload.append('client_id', clientId);
      payload.append('client_secret', clientSecret);

      try {
        const response = await axios.post('https://accounts.salla.sa/oauth/token', payload);
        localStorage.setItem('access_token', response.data.access_token);
        this.$router.push('/callback'); // redirect after login
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
