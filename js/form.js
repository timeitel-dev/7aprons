new Vue({
  el: '#v-form',
  data: {
    form: {
      formName: 'Online Order',
      userName: '',
      favoriteColor: 'Red',
      favoriteHamburger: '',
      favoriteHangout: [],
      workHours: 0
    },
    showSubmitFeedback: false
  },
  methods: {
    fakeSubmit() {
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    }
  }
});
