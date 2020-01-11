<template>
    <main>
        <div class="contentPage">
            <div class="titleContainer">
                <p>Saisissez le contenu des repas de cette semaine, et je me charge du reste...</p>
            </div>
            <hr width="80%">
            <div class="submitContainer">
                <button @click="displayResult">Valider</button>
                <div class="checkboxContainer">
                    <input v-model="wantProvide" type="checkbox" name="cb" id="cb">
                    <label for="cb" id="checkbox">
                        <svg viewBox="0 0 100 100">
                            <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                            <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                        </svg>
                        <span>Activer la génération de repas</span>
                    </label>
                </div>
            </div>
            <section class="tableMenus">
                <div class="accordion" @click="toggleAccordeon('Lundi')"
                     v-bind:class="{isOpen: accordeons['Lundi'] === true}">
                    <h2>Lundi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Lundi'] === false, isOpen: accordeons['Lundi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Lundi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Lundi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Lundi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Lundi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Lundi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Lundi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Lundi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Lundi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Lundi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Lundi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Lundi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Lundi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Lundi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Lundi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Lundi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Lundi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Mardi')"
                     v-bind:class="{isOpen: accordeons['Mardi'] === true}">
                    <h2>Mardi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Mardi'] === false, isOpen: accordeons['Mardi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mardi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mardi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mardi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mardi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mardi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mardi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mardi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mardi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mardi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mardi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mardi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mardi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mardi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mardi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mardi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mardi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Mercredi')"
                     v-bind:class="{isOpen: accordeons['Mercredi'] === true}">
                    <h2>Mercredi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Mercredi'] === false, isOpen: accordeons['Mercredi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mercredi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mercredi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mercredi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mercredi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mercredi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mercredi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mercredi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mercredi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mercredi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mercredi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mercredi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mercredi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Mercredi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Mercredi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Mercredi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Mercredi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Jeudi')"
                     v-bind:class="{isOpen: accordeons['Jeudi'] === true}">
                    <h2>Jeudi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Jeudi'] === false, isOpen: accordeons['Jeudi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Jeudi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Jeudi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Jeudi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Jeudi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Jeudi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Jeudi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Jeudi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Jeudi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Jeudi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Jeudi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Jeudi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Jeudi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Jeudi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Jeudi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Jeudi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Jeudi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Vendredi')"
                     v-bind:class="{isOpen: accordeons['Vendredi'] === true}">
                    <h2>Vendredi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Vendredi'] === false, isOpen: accordeons['Vendredi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Vendredi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Vendredi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Vendredi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Vendredi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Vendredi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Vendredi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Vendredi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Vendredi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Vendredi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Vendredi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Vendredi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Vendredi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Vendredi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Vendredi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Vendredi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Vendredi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Samedi')"
                     v-bind:class="{isOpen: accordeons['Samedi'] === true}">
                    <h2>Samedi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Samedi'] === false, isOpen: accordeons['Samedi'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Samedi', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Samedi'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Samedi'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Samedi', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Samedi', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Samedi'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Samedi'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Samedi', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Samedi', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Samedi'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Samedi'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Samedi', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('Samedi', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Samedi'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Samedi'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Samedi', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('Dimanche')"
                     v-bind:class="{isOpen: accordeons['Dimanche'] === true }">
                    <h2>Dimanche</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['Dimanche'] === false, isOpen: accordeons['Dimanche'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Dimanche', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Dimanche'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Dimanche'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Dimanche', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Dimanche', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Dimanche'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Dimanche'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Dimanche', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Dimanche', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Dimanche'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Dimanche'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Dimanche', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('Dimanche', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option v-for="categorie in reco" :value="categorie.id">{{categorie.name}}</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['Dimanche'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" min="0" v-model="data['Dimanche'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('Dimanche', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Content",
        data() {
            return {
                accordeons: {
                    'Lundi': false,
                    'Mardi': false,
                    'Mercredi': false,
                    'Jeudi': false,
                    'Vendredi': false,
                    'Samedi': false,
                    'Dimanche': false,
                },
                selectedMeal: '',
                reco: recommendations,
                data: {
                    'Lundi': {0: [], 1: [], 2: [], 3: []},
                    'Mardi': {0: [], 1: [], 2: [], 3: []},
                    'Mercredi': {0: [], 1: [], 2: [], 3: []},
                    'Jeudi': {0: [], 1: [], 2: [], 3: []},
                    'Vendredi': {0: [], 1: [], 2: [], 3: []},
                    'Samedi': {0: [], 1: [], 2: [], 3: []},
                    'Dimanche': {0: [], 1: [], 2: [], 3: []}
                },
                wantProvide: false
            }
        },
        methods: {
            toggleAccordeon(day) {
                for (let element in this.accordeons) {
                    if (element === day) {
                        this.accordeons[day] = !this.accordeons[day]
                    } else {
                        this.accordeons[element] = false
                    }
                }
            },
            appendData(day, meal, selectedMeal) {
                //v2
                let isAlreadySelected = false
                this.data[day][meal].forEach((element) => {
                    if (element.id === selectedMeal) {
                        isAlreadySelected = true
                    }
                })
                if(!isAlreadySelected) {
                    recommendations.forEach((category) => {
                        if(category.id === selectedMeal) {
                            this.data[day][meal].push({'id': selectedMeal, 'name': category.name, 'portions': 1})
                        }
                    })
                }
                this.selectedMeal = ''
            },
            deleteData(day, meal, index) {
                this.data[day][meal].splice(index, 1)
            },
            displayResult ()  {
                this.$emit('clicked', 'displayResult');
                this.$emit('results', this.data);
                this.$emit('wantProvide', this.wantProvide);
            }
        }
    };
</script>

<style lang='scss'>
    .contentPage {
        color: gray;

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

        .submitContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            button {
                border-radius: 10px;
                background-color: #C83E3E;
                color: white;
                padding: .5em 1em;
                font-size: 16px;
                cursor: pointer;
            }
            
            // Custom checkbox avec SVG
            .checkboxContainer
            {
                margin: .3rem 0 .3rem  0;
            }
            input[type=checkbox] {
                display: none;
                pointer-events: none;

                & + label {
                    cursor: pointer;
                    font-size: .8em;
                    display: grid;
                    grid-template-columns: auto 3fr;

                    svg {
                        width: 2em;
                        stroke: #C83E3E;
                        stroke-width: 5;
                        fill: white;


                        .box {
                            stroke-dasharray: 320;
                            stroke-dashoffset: 0;
                            fill: white;
                            transition: stroke-dashoffset .3s linear;
                        }
                        .check {
                            stroke-dasharray: 70;
                            stroke-dashoffset: 70;
                            fill: none;
                            transition: stroke-dashoffset .3s linear;
                        }
                    }

                    span {
                        padding-top: .5em;
                        margin-left: .3em;
                    }
                }

                &:checked + label {
                    .box {
                        stroke-dashoffset: 320;

                    }
                    .check {
                        stroke-dashoffset: 0;
                    }
                }
            }
        }

        .tableMenus {
            display: flex;
            flex-direction: column;
            align-items: center;

            .accordion {
                display: flex;
                width: 80%;
                margin: 0;
                cursor: pointer;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #E1E1E1;
                border-left: 1px solid #E1E1E1;
                border-right: 1px solid #E1E1E1;

                &:first-child {
                    border-top: 1px solid #E1E1E1;
                    border-radius: 5px 5px 0 0;
                }

                .fa-chevron-down {
                    transition: .7s;
                }

                h2 {
                    padding-top: 5px;
                    margin: 0 0 0 2%;
                    font-weight: normal;
                }

                i {
                    font-size: 24px;
                    margin-right: 2%;
                }

                &:hover {
                    background-color: #F8F8F8;
                }

                &.isOpen {
                    background-color: #C83E3E;
                    border-bottom: 1px solid #C83E3E;
                    border-left: 1px solid #C83E3E;
                    border-right: 1px solid #C83E3E;
                    h2 {
                        color: white;
                    }

                    .fa-chevron-down {
                        color: white;
                        transform: rotateZ(180deg);
                    }
                }
            }

            .menu {
                width: 80%;
                display: flex;
                flex-direction: row;
                height: 0;
                overflow: hidden;
                border-left: 1px solid #E1E1E1;
                border-right: 1px solid #E1E1E1;
                transition: .5s ease;
                justify-content: space-around;
                overflow-y: scroll;

                section {
                    width: 25%;

                    h3 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: normal;
                        font-size: 14px;
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
                            height: 30px;
                            box-shadow: 0px 3px 5px rgba(0,0,0,.1);
                        }
                    }

                    .contentWrapper {
                        ul {
                            padding: 0;
                            margin: 5% 5% 0 5%;
                            list-style: none;
                            justify-content: center;

                            div li {
                                background-color: white;
                                margin-bottom: 2px;
                                padding: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: space-around;

                                .listLibelle {
                                    font-size: 12px;
                                    width: 50%;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                }

                                input {
                                    width: 20%;
                                }
                            }
                        }

                        .fa-times-circle {
                            transition: .5s;
                            color: #C83E3E;

                            &:hover {
                                transform: rotateZ(90deg);
                            }
                        }
                    }
                }

                &.isOpen {
                    background-color: #F8F8F8;
                    border-bottom: 1px solid #E1E1E1;
                    transition: .5s ease;
                    height: 35vh;
                }
            }

            .closed {
                transition: .5s ease;
                background-color: #F8F8F8;

                .fa-chevron-down {
                    transition: 1s;
                    transform: rotateZ(180deg);
                }
            }
        }
    }

    @media screen and (max-width: 640px) {
        .accordion {
            width: 100% !important;
        }
        .menu {
            width: 100% !important;
            flex-direction: column !important;
            &.isOpen {
                height: 60vh !important;
            }
            section {
                width: 100% !important;
            }
        }
    }
</style>
