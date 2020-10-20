<template lang="pug">
  #ReadyUpDiscover
    .img-container
      img(class="logo" src="@/assets/images/readyup-logo-color-white-horz-clover-text.svg")
    Carousel(
      :per-page='3' 
      autoplay 
      loop
      paginationActiveColor="#ff4713"
      paginationColor="#ffffff"
      centerMode
    )
      Slide(
        v-for="event in events" 
        :key="event.id" 
        @slide-click="openEventLink(event.id)"
      )      
        .event-container
          img(
            class="event-logoURL" 
            :src="event.logoURL"
          )
          button.event-register
            .event-register-text 
              | Register
          .event-info
            .event-info-game(v-if="eventHasGameInfo(event)") 
              | {{ event.games[0].name }}
            .event-info-game.no-game-info(v-else)
              | - 
            .event-info-date
              | {{ event.start | formatEventDate }} 
              | to 
              | {{ event.end | formatEventDate }}
</template>

<script>
import ReadyUpSearchApi from "@/libs/ReadyUp/ReadyUpSearchApi";
import { Carousel, Slide } from "vue-carousel";
import moment from "moment";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      events: null,
    };
  },
  props: {
    organizer: {
      type: String,
      default: null,
      required: false,
    },
  },
  filters: {
    formatEventDate: function(value) {
      return moment.unix(value).format("MMM Do");
    },
  },
  created() {
    this.populateWidget();
  },
  methods: {
    async populateWidget() {
      const search = new ReadyUpSearchApi();
      const { data } = await search.getEvents({
        organizers: this.organizer ? [this.organizer] : null,
      });
      this.events = data;
    },
    eventHasGameInfo(event) {
      return event.games && event.games.length > 0 && event.games[0].name;
    },
    openEventLink(eventId) {
      window.open(`https://app.readyup.gg/events/${eventId}`, "_blank");
    },
  },
};
</script>

<style lang="scss">
@import url("~@/assets/css/VueCarousel.css");

#ReadyUpDiscover {
  font-family: "Gotham B", "Montserrat", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  max-height: 400px;
  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 14px;
    .logo {
      height: 4rem;
    }
  }
  background-color: #1d2027;
  background-image: url("~@/assets/images/rup-logo-pattern-bg.jpg");
  background-size: cover;
  .VueCarousel {
    &-wrapper {
      margin-top: 14px;
    }
    &-slide {
      max-width: 400px;
      margin-right: 8px;
      margin-left: 8px;
      .event {
        &-container {
          position: relative;
        }
        &-logoURL {
          border-radius: 16px;
          width: 400px;
          min-height: 225px;
        }
        &-info {
          position: absolute;
          top: 0px;
          width: 100%;
          opacity: 0.7;
          background-color: black;
          color: white;
          text-align: center;
          padding-top: 4px;
          padding-bottom: 4px;
          border-top-right-radius: 16px;
          border-top-left-radius: 16px;
          &-game {
            font-weight: bold;
            font-size: 1.75rem;
          }
          &-game.no-game-info {
            visibility: hidden;
          }
          &-date {
            font-size: 1.25rem;
            font-weight: bold;
            background-color: white;
            color: black;
          }
        }
        &-register {
          position: absolute;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 136px;
          height: 0;
          padding: 0;
          bottom: 4px;
          right: 0;
          border-bottom: 38px solid #2b5bff;
          border-left: 30px solid transparent;
          border-right: none;
          border-bottom-right-radius: 16px;
          background-color: transparent;
          line-height: 2.9;
          color: #fff;
          border-top-left-radius: 45% 140%;
          &-text {
            height: 38px;
            z-index: 1;
            padding: 0 5px 0 3px;
            font-size: 14px;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-transform: initial;
            letter-spacing: 0.2px;
          }
        }
      }
    }
    &-pagination {
      padding-bottom: 16px;
      display: inherit !important;
    }
  }
}
</style>
