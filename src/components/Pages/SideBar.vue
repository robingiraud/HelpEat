<template>
    <aside>
        <ul>
            <li v-for="categorie in reco">
                <!--<i v-if="categorie.max > totalPortions[categorie.id-1] || categorie.min < totalPortions[categorie.id-1]" class="fa fa-smile"></i>
                <i v-if="categorie.max < totalPortions[categorie.id-1] || categorie.min > totalPortions[categorie.id-1]" class="fa fa-frown"></i>
                <i v-if="categorie.max = totalPortions[categorie.id-1]" class="fa fa-meh"></i>
                <i v-if="categorie.min = totalPortions[categorie.id-1]" class="fa fa-meh"></i>-->
                <p>{{totalPortions}}</p>
                <p>{{categorie.name}}</p>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "SideBar.vue",
        props: [
            'totalPortions'
        ],
        data() {
            return {
                reco: recommendations,
                nbPortions: [],
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .far {
        font-size: 24px;
        margin-bottom: .2rem;
        &.fa-smile {
            color: green;
        }
        &.fa-meh {
            color: orange;
        }
        &.fa-frown {
            color: red;
        }
    }
    aside {
        width: 15vw;
        height: calc(100vh - 100px);
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
             li {
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 &:not(last-child) {
                     margin-bottom: 1rem;
                 }
                 p {
                     padding: 0;
                     margin: 0;
                     text-align: center;
                 }
             }
        }
    }
</style>