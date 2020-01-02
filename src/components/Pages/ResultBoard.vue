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
        created: function () {
            this.getData()
        },
        methods: {

            getData() {
                this.arr = testSemaine.weekMap
            }
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
</style>