<template>
  <div>
    <h1>Контакты</h1>

    <table v-if="contacts">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(contact, index) of contacts"
            :key="contact.id"
          >
          <td>{{index+1}}</td>
          <td>{{contact.first_name}}</td>
          <td>{{contact.last_name}}</td>
          <td>{{contact.phone}}</td>
          <td>
            <router-link tag="button" class="btn blue btn-small" :to="'/contact/'+contact.id">
              Открыть
            </router-link>
          </td>
          <td>
            <button tag="button" class="btn red btn-small" v-on:click="DeleteContact(index)">Удалить</button>
          </td>
          </tr>
        </tbody>
    </table>
    <p v-else>Нет контактов</p>
  </div>
</template>

<script>

export default {
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  },
  methods:{
    
    DeleteContact(index){
      if (confirm("Вы точно хотите удалить контакт под номером "+(index+1)+"?"))
      {
        this.contacts.splice(index,1);
      }
    }
  }
}
</script>
