<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Создать контакт</h1>

            <form @submit.prevent="submitHandler">
                <div class="input-field col s6">
                    <input id="first_name" v-model="first_name" type="text" class="validate" required>
                    <label for="first_name">Имя</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" v-model="last_name" type="text" class="validate">
                    <label for="last_name">Фамилия</label>
                </div>
                <div class="input-field col s12">
                    <input id="phone" v-model="phone"  type="text" class="validate">
                    <label for="phone">Телефон</label>
                </div>

                <button class="btn" type="submit">Создать контакт</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'crate',
    data:() => ({
        first_name: '',
        last_name:'',
        phone:'',
    }),
    methods: {
        submitHandler() {
            const contact = {
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
                id: Date.now(),
            }
            
            this.$store.dispatch('createContact',contact)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>