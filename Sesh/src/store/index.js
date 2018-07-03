import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://digitalnewsroom.media/uploads/2010/11/Front_small.jpg',
        id: 'brewd',
        title: 'Pints in BrewDog',
        date: '2017-07-10'
      },
      {
        imageUrl: 'https://www.pressandjournal.co.uk/wp-content/uploads/sites/2/2014/05/Siberia%20the%20bar.jpg',
        id: 'shott',
        title: 'Shots in Siberia ;)',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['aadsfhbkhlk1241']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
