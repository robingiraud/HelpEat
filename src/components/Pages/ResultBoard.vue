<template>
    <div flex-fluid flex-column>
        <div class="titleContainer">
            <p>Notre chef vous propose...</p>
        </div>
        <hr width="80%">
        <aside>
            <ul>
                <li v-for="categorie in reco">
                    <i v-if="totals[categorie.id] === undefined" class="fas fa-ban"></i>
                    <i v-else-if="totals[categorie.id].week > reco[categorie.id].min && totals[categorie.id].week < reco[categorie.id].max" class="fas fa-battery-half"></i>
                    <i v-else-if="totals[categorie.id].week == reco[categorie.id].min" class="fas fa-battery-quarter"></i>
                    <i v-else-if="totals[categorie.id].week == reco[categorie.id].max" class="fas fa-battery-three-quarters"></i>
                    <i v-else-if="totals[categorie.id].week < reco[categorie.id].min" class="fas fa-battery-empty"></i>
                    <i v-else-if="totals[categorie.id].week > reco[categorie.id].max" class="fas fa-battery-full"></i>
                    <p>{{categorie.name}}</p>
                </li>
            </ul>
        </aside>
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
            <i class="fa fa-print" @click="save" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResultBoard',
        props: [
            'dataMenu', 'wantProvide'
        ], data() {
            return {
                meal: ['Petit Déjeuner', 'Déjeuner', 'Gouter', 'Dîner'],
                days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                totals: {},
                results: {},
                reco: recommendations
            }
        },
        methods: {
            getData() {
                let happyMeals = new HappyMeals(recommendations, mealsPattern, this.dataMenu);
                if(this.wantProvide) {
                    happyMeals.provideMeals();
                    this.results = happyMeals.weekMap;
                } else {
                    this.results = happyMeals.weekMap;
                }
                this.totals = happyMeals.totalsWeek;
            },
            save() {
                window.print()
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

        @media screen and (max-width: 480px) {
            flex-basis: 100%;
        }
    }

    [class*="item-"] {
        margin: 16px 5px;

        @media screen and (max-width: 480px) {
            margin: 10px 5px;
        }
    }

    h1.item-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;

        @media screen and (max-width: 480px) {
            padding: 15px 0;
        }
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
    aside {
        display: flex;
        justify-content: center;
        ul {
            width: 80%;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            li {
                width: 10%;
                display: flex;
                flex-direction: column;
                align-items: center;
                &:not(last-child) {
                    margin-bottom: 1rem;
                }
                .fas {
                    font-size: 24px;
                    margin-bottom: .4rem;
                    &.fa-battery-half {
                        color: green;
                    }
                    &.fa-battery-quarter {
                        color: orange;
                    }
                    &.fa-battery-three-quarters {
                        color: orange;
                    }
                    &.fa-battery-full {
                        color: red;
                    }
                    &.fa-battery-empty {
                        color: red;
                    }
                }
                p {
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
    }
</style>