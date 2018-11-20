<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        pwa-sample
      </h1>
      <h2 class="subtitle">
        My great Nuxt.js project
      </h2>
      <div style="width: 300px; overflow: scroll;">
        <nuxt-link to="/">index</nuxt-link>
        <nuxt-link to="/detail">detail</nuxt-link>
        <button
          type="button"
          @click="toIndex">index2</button>
        <button
          type="button"
          @click="toDetail">detail2</button>
        {{ location }}
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data() {
    return {
      location: ''
    }
  },

  mounted() {
    this.location = JSON.stringify(location)

    console.log(this.$OneSignal);

    this.$OneSignal.push(['sendTag', 'id', 100, function(tagsSent) {}])

    this.$OneSignal.push(() => {
      console.log(this.$OneSignal)
      console.log(window.OneSignal)
      OneSignal.isPushNotificationsEnabled((isEnabled) => {
        if (isEnabled) {
          console.log('Push notifications are enabled!')
        } else {
          console.log('Push notifications are not enabled yet.')
        }
      })

      OneSignal.on('notificationDisplay', (event) => {
      	console.warn('OneSignal notification displayed:', event)
      })
    })
  },

  methods: {
    toIndex() {
      this.$router.push('/')
    },
    toDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
