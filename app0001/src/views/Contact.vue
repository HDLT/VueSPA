<template>
    <div class="row">
        <div v-if="contact" class="col s6 offset-s3">
            <form @submit.prevent="submitHandler">
                <div class="input-field col s6">
                    <input :disabled="isComplete" id="first_name" v-model="first_name" type="text" required>
                    <label for="first_name">Имя</label>
                </div>
                <div class="input-field col s6">
                    <input :disabled="isComplete" id="last_name" v-model="last_name" type="text" >
                    <label for="last_name">Фамилия</label>
                </div>
                <div class="input-field col s12">
                    <input :disabled="isComplete" id="phone" v-model="phone"  type="text" >
                    <label for="phone">Телефон</label>
                </div>
                <div>
                    <div  v-show="isNonA" v-for="(row,index) in rows" :key="index">
                        <div class="input-field col s12" :id="index">
                            <input  :disabled="isComplete" type="text" v-model="row.text">
                            <label for="custom">{{row.name}}</label>
                            <button class="btn red btn-small" 
                                    type="button" 
                                    style="margin:1rem; margin-top:0rem;" 
                                    @click="removeTextBox(index,row)">Удалить</button>
                        </div>
                    </div>
                </div>
                <div class="input-field col s12">
                    <input id="customBox" v-model="cBox" type="text" class="validate" name="customBox">
                    <label for="customBox">Данные нового поля</label>
                </div>

                <button class="btn" type="button" style="margin-right:1rem;" v-show="isComplete" @click="StartChanged()">Редактировать</button>
                <button class="btn" type="button" style="margin-right:1rem;" v-show="!isComplete" @click="CloseChanged()">Отмена</button>
                
                <button :disabled="noChanged" class="btn" type="button" style="margin-right:1rem;" @click="LoadPrev()">Шаг назад</button>
                <br>
                <button class="btn" type="submit" style="margin-right:1rem; margin-top:1rem;">Обновить</button>
                    
                <button class="btn blue" type="button" @click="AddTextBox()" style="margin-top:1rem;">Добавить поле </button>
                    
            </form>
        </div>
        <p v-else>Такого контакта нет</p>
    </div>
</template>

<script>
export default {
    data:() => ({
        first_name: '',
        last_name:'',
        phone:'',
        cBox: '',
        rows:[],
        isNonA: false,
        BoxCheck: '',
        isComplete: true,
        prevConctact: '',
        noChanged:true
    }),
    computed: {
        contact() {
            return this.$store.getters.contactById(+this.$route.params.id)
        },
    },
    mounted() {
        this.first_name = this.contact.first_name,
        this.last_name = this.contact.last_name,
        this.phone = this.contact.phone,
        
        this.prevConctact = {
                first_name: this.contact.first_name,
                last_name: this.contact.last_name,
                phone: this.contact.phone,
            }
        setTimeout(()=> {
            M.updateTextFields()
            },0)
    },
    methods: {
        submitHandler() {
            
            this.prevConctact = {
                first_name: this.contact.first_name,
                last_name: this.contact.last_name,
                phone: this.contact.phone,
            }

            this.$store.dispatch('updateContact',{
                id: this.contact.id,
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
            })
            
            this.noChanged= false
            this.isComplete=true
            //this.$router.push('/')
        },
        AddTextBox(){
            if (this.cBox.includes(':',1))
            {
                +this.BoxCheck++
                this.isNonA = true,

                this.rows.push({name: this.cBox.split(':')[0],text: this.cBox.split(':')[1]}),
                setTimeout(()=> {
                    M.updateTextFields()
                },0)
            }
        },
        removeTextBox(index,row) {
            if (confirm("Вы точно хотите удалить поле "+row.name+"?"))
            {
                this.rows.splice(index,1)
            }
        },
        StartChanged(){
            
            this.isComplete=!this.isComplete
        },
        CloseChanged() {
            this.first_name = this.contact.first_name,
            this.last_name = this.contact.last_name,
            this.phone = this.contact.phone,
            this.isComplete=!this.isComplete
        },
        LoadPrev(){
            this.first_name= this.prevConctact.first_name,
            this.last_name= this.prevConctact.last_name,
            this.phone= this.prevConctact.phone

            this.$store.dispatch('updateContact',{
                id: this.contact.id,
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>