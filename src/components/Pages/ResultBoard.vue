<template>
    <div flex-fluid flex-column>
        <div class="titleContainer">
            <p><i class="far fa-check-square" style="color:green"></i> Notre chef vous propose...</p>
        </div>
        <hr width="80%">
        <section class='container'>
            <div v-for="day in days" v-bind:key="day" class="day flex-fluid">
                <h1 class="item-1">{{day}}</h1>
                <div v-for="(i, index) in results[day]" v-bind:key="i.day" class="item-1">
                    <h4>{{meal[index]}}</h4>
                    <section class='produit'>
                        <div v-for="t in i" v-bind:key="t.j">
                            <p>{{t.name}} x{{t.portions}}</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <div class="saveButton">
            <i class="fa fa-save" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResultBoard',
        props: [
            'dataMenu'
        ],
        data() {
            return {
                meal: ['Petit Déjeuner', 'Déjeuner', 'Gouter', 'Dîner'],
                days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                results: {}
            }
        },
        methods: {
            getData() {
                let happyMeals = new HappyMeals(recommendations, mealsPattern, this.dataMenu);
                happyMeals.provideMeals();
                this.results = happyMeals.weekMap;
            }
        },
        mounted () {
            this.getData()
        }
    }
</script>

<style lang='scss' scoped>

    .titleContainer {
        display: flex;
        justify-content: center;

        p {
            width: 80%;
            margin-bottom: 0;
            font-size: 18px;
        }
    }

    hr {
        margin-top: .5rem;
        margin-bottom: 1.3rem;
    }

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