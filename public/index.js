/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {            
      reviews: [
        { reviewer: "Jimmy V",
          rating: 8,
          text: "Vue.js is cool"
        },

        { reviewer: "Henry",
          rating: 5,
          text: "Vue.js is aite"
        },

        { reviewer: "Cantalope", 
          rating: 1,
          text: "Vue.js sucks hard"
        }
      ],
      newReview: {
        text: "",
        review: "",
        rating: ""
      }
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      var newReviewInfo = {
        text: this.newReview.text,
        reviewer: this.newReview.reviewer,
        rating: this.newReview.rating,
      };
      this.reviews.push(newReviewInfo);
    },
    isPositive: function(inputReview) {
      inputReview.text.indexOf('sucks') === -1;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});