/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {            
      reviews: [
        { reviewer: "Jimmy V",
          rating: 8,
          text: "Vue.JS is cool"
        },

        { reviewer: "Henry",
          rating: 5,
          text: "Vue.JS is aite"
        },

        { reviewer: "Cantalope", 
          rating: 1,
          text: "Vue.JS sucks hard"
        },

        { reviewer: "Xavier", 
          rating: 3,
          text: "What is Vue.JS"
        }
      ],
      newReview: {
        text: "",
        review: "",
        rating: ""
      },
      sortAttribute: "reviewer"
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
    // isValidReview: function(inputReview) {
    //   var validText = inputReview.text.includes(this.textFilter.toLowerCase());
    //   return validText;
    // },
    setAttribute: function(inputAttribute) {
      this.sortAttribute = inputAttribute;
    }
  },
  computed: {
    sortedReviews: function() {
      return this.reviews.sort(function(review1, review2) {
        var lowerAttribute1 = review1[this.sortAttribute].toLowerCase();
        var lowerAttribute2 = review2[this.sortAttribute].toLowerCase();
        return lowerAttribute1.localeCompare(lowerAttribute2);
      }.bind(this));
    }
  }
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