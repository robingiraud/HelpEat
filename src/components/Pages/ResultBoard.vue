<template>
    <div flex-fluid flex-column>
        <section class='container'>
            <div v-for="day in days" v-bind:key="day" class="day flex-fluid">
                <h1 class="item-1">{{day}}</h1>
                <div v-for="(i, index) in arr[day]" v-bind:key="i.day" class="item-1">
                    <h4>{{meal[index]}}</h4>
                    <section class='produit'>
                        <div v-for="t in i" v-bind:key="t.j">
                            <p>{{t.name}}</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <div class="saveButton">
            <i class="fa fa-save"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResultBoard',
        data() {
            return {
                meal: ["Petit Déjeuner", "Déjeuner", "Gouter", "Dîner"],
                days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
                arr: []

            }
        },
        methods: {
            getData() {
                this.arr = testSemaine.weekMap
            }
        },
        mounted () {
            this.getData()
        }
    }
</script>

<style lang='scss' scoped>

    .container {
        width: 100%;
    }

    .day {
        width: 100%;
    }

    .item-1 {
        flex-basis: calc(((0.2%) * 100) - 10px);
        height: auto;
        background-color: rgba(242, 242, 242, 0.7);
    }

    [class*="item-"] {
        margin: 16px 5px;
    }

    h1.item-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
    }

    h4 {
        display: flex;
        justify-content: center;
    }

    .produit {
        padding: 0 15px;
    }
    .saveButton {
        width: 80px;
        height: 80px;
        position: fixed;
        bottom: 1em;
        right: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #C83E3E;
        border-radius: 50px;
        color: white;
        font-size: 32px;-webkit-box-shadow: 2px 6px 22px -1px rgba(87,87,87,1);
        -moz-box-shadow: 2px 6px 22px -1px rgba(87,87,87,1);
        box-shadow: 2px 6px 22px -1px rgba(87,87,87,1);
        &:hover {
            cursor: pointer;
        }
    }
</style>