<template>
    <div>
        <form>
            <div v-for="el in reco" :key="el.id">
                <div class="formElement">
                    <label>{{el.name}}</label>
                    <div v-if="el.min !== undefined">
                        <input type="number" :value="el.min">
                        <div class="selectWrapper">
                            <select>
                                <option value="min" selected>Min</option>
                                <option value="max">Max</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="el.max !== undefined">
                        <input type="number" :value="el.max">
                        <div class="selectWrapper">
                            <select>
                                <option value="min">Min</option>
                                <option value="max" selected>Max</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- <button @click="save">Sauvegarder</button> -->
        <button>Sauvegarder</button>
    </div>
</template>

<script>
    export default {
        name: "SettingsPage",
        data() {
            return {
                reco: '',
                test: {id:1, name:'toto'}
            }
        },
        methods: {
            displayForm () {
                this.$emit('clicked', 'displaySettings')
            },
            save () {
                console.log('---Save---');
                console.log(this.reco);
                localStorage.setItem('reco', this.test)
            },
            getData () {
                if(localStorage.getItem('reco') !== null) {
                    console.log('ls reco trouvé');
                    console.log(localStorage.getItem('reco'));
                    this.reco = localStorage.getItem('reco')
                } else {
                    console.log('ls reco introuvable, on prend les recos par defaut');
                    this.reco = recommendations
                }
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>
    form {
        .formElement {
            display: flex;
            flex-direction: row;
            padding: 5px;
            label {
                min-width: 15em;
            }
            div {
                margin-left: 15px;
                display: flex;
                input {
                    width: 4em;
                }
                .selectWrapper {
                    justify-content: center;
                    select {
                        width: 100%;
                        background-color: white;
                        &:hover {
                            cursor: pointer;
                        }
                        &:focus {
                            outline: none;
                        }
                        border: none;
                        box-shadow: 0px 3px 5px rgba(0,0,0,.1);
                    }
                }
            }
        }
    }
</style>