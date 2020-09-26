new Vue({
  el: '#v-form',
  data: {
    form: {
      formName: 'Online Order',
      userName: '',
      email: '',
      number: '',
      favoriteHamburger: '',
      order: [],
      siomay: {
        quantity: 0,
        cost: 8.5
      },
      sate: {
        quantity: 0,
        cost: 8.5
      },
      nasiLiwet: {
        quantity: 0,
        cost: 8.5
      },
      nasiCampur: {
        quantity: 0,
        cost: 8.5
      },
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
