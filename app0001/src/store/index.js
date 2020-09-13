import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('conctacts') || '[]')
  },
  mutations: {
    createContact(state,contact) {
      state.contacts.push(contact)

      
      localStorage.setItem('contacts',JSON.stringify(state.contacts))
    },
    updateContact(state,{id,first_name,last_name,phone}){
      
      const contacts = state.contacts.concat()

      const index = contacts.findIndex(c=>c.id ===id)
      const contact = contacts[index]

      contacts[index] = {...contact, first_name, last_name, phone}
      
      state.contacts = contacts
      localStorage.setItem('contacts',JSON.stringify(state.contacts))
      
      console.log(state.contacts)
    }
  },
  actions: {
    createContact({commit},contact) {
      commit('createContact',contact)
    },
    updateContact({commit},contact) {
      commit('updateContact',contact)
    }
  },
  modules: {

  },
  getters: {
    contacts: s=> s.contacts,
    contactById: s =>id=>s.contacts.find(c=>c.id===id)
  }
})
