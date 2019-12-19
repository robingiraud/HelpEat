<template>
    <main>
        <div class="contentPage">
            <div class="titleContainer">
                <p>Veuillez saisir le contenu des repas de la semaine, je me charge du reste...</p>
            </div>
            <hr width="80%">
            <div class="submitContainer">
                <button @click="displayResult">Valider</button>
            </div>
            <section class="tableMenus">
                <div class="accordion" @click="toggleAccordeon('monday')"
                     v-bind:class="{isOpen: accordeons['monday'] === true}">
                    <h2>Lundi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['monday'] === false, isOpen: accordeons['monday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('monday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['monday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['monday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('monday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('monday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['monday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['monday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('monday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('monday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['monday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['monday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('monday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('monday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['monday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['monday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('monday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('tuesday')"
                     v-bind:class="{isOpen: accordeons['tuesday'] === true}">
                    <h2>Mardi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['tuesday'] === false, isOpen: accordeons['tuesday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('tuesday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['tuesday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['tuesday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('tuesday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('tuesday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['tuesday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['tuesday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('tuesday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('tuesday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['tuesday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['tuesday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('tuesday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('tuesday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['tuesday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['tuesday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('tuesday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('wednesday')"
                     v-bind:class="{isOpen: accordeons['wednesday'] === true}">
                    <h2>Mercredi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['wednesday'] === false, isOpen: accordeons['wednesday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('wednesday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['wednesday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['wednesday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('wednesday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('wednesday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['wednesday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['wednesday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('wednesday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('wednesday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['wednesday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['wednesday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('wednesday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('wednesday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['wednesday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['wednesday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('wednesday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('thursday')"
                     v-bind:class="{isOpen: accordeons['thursday'] === true}">
                    <h2>Jeudi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['thursday'] === false, isOpen: accordeons['thursday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('thursday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['thursday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['thursday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('thursday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('thursday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['thursday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['thursday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('thursday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('thursday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['thursday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['thursday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('thursday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('thursday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['thursday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['thursday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('thursday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('friday')"
                     v-bind:class="{isOpen: accordeons['friday'] === true}">
                    <h2>Vendredi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['friday'] === false, isOpen: accordeons['friday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('friday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['friday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['friday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('friday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('friday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['friday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['friday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('friday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('friday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['friday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['friday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('friday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('friday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['friday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['friday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('friday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('saturday')"
                     v-bind:class="{isOpen: accordeons['saturday'] === true}">
                    <h2>Samedi</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['saturday'] === false, isOpen: accordeons['saturday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('saturday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['saturday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['saturday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('saturday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('saturday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['saturday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['saturday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('saturday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('saturday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['saturday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['saturday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('saturday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal"
                                    @change="appendData('saturday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['saturday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['saturday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('saturday', 3, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                </article>
                <div class="accordion" @click="toggleAccordeon('sunday')"
                     v-bind:class="{isOpen: accordeons['sunday'] === true }">
                    <h2>Dimanche</h2>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <article class="menu"
                         v-bind:class="{ closed: accordeons['sunday'] === false, isOpen: accordeons['sunday'] === true }">
                    <section>
                        <h3>Petit-Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('sunday', 0, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['sunday'][0]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['sunday'][0][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('sunday', 0, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Déjeuner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('sunday', 1, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['sunday'][1]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['sunday'][1][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('sunday', 1, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Goûter</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('sunday', 2, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['sunday'][2]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['sunday'][2][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('sunday', 2, index)"></i>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>Dîner</h3>
                        <div class="selectWrapper flex">
                            <select name="food" v-model="selectedMeal" @change="appendData('sunday', 3, selectedMeal)">
                                <option value="" selected>Categories</option>
                                <option value="Fruits et légumes">Fruits et légumes</option>
                                <option value="Viande Rouge">Viande rouge</option>
                                <option value="Charcuterie">Charcuterie</option>
                                <option value="Viande blanche">Viande blanche</option>
                                <option value="Féculents et produits céréaliers">Féculents et produits céréaliers
                                </option>
                                <option value="Poisson gras">Poisson gras</option>
                                <option value="Poisson maigre">Poisson maigre</option>
                                <option value="Oeuf">Oeuf</option>
                                <option value="Produit laitier">Produit laitier</option>
                                <option value="Légumineuse">Légumineuse</option>
                            </select>
                        </div>
                        <div class="contentWrapper">
                            <ul>
                                <div v-for="(element,index) in data['sunday'][3]" :key="index">
                                    <li>
                                        <div class="listLibelle">
                                            <span>{{ element.name }}</span>
                                        </div>
                                        <input type="number" v-model="data['sunday'][3][index].portions">
                                        <i class='fas fa-times-circle' aria-hidden="true"
                                           @click="deleteData('sunday', 3, index)"></i>
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
                    'monday': false,
                    'tuesday': false,
                    'wednesday': false,
                    'thursday': false,
                    'friday': false,
                    'saturday': false,
                    'sunday': false,
                },
                selectedMeal: '',
                data: {
                    "monday": {0: [], 1: [], 2: [], 3: []},
                    "tuesday": {0: [], 1: [], 2: [], 3: []},
                    "wednesday": {0: [], 1: [], 2: [], 3: []},
                    "thursday": {0: [], 1: [], 2: [], 3: []},
                    "friday": {0: [], 1: [], 2: [], 3: []},
                    "saturday": {0: [], 1: [], 2: [], 3: []},
                    "sunday": {0: [], 1: [], 2: [], 3: []}
                }
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
                let isAlreadySelected = false
                this.data[day][meal].forEach((element) => {
                    if (element.name === selectedMeal) {
                        isAlreadySelected = true
                    }
                });
                if (!isAlreadySelected) {
                    this.data[day][meal].push({'name': selectedMeal, 'portions': 1})
                }
                this.selectedMeal = ''
            },
            deleteData(day, meal, index) {
                this.data[day][meal].splice(index, 1)
            },
            displayResult ()  {
                this.$emit('clicked', 'displayResult')
            }
        }
    };
</script>

<style lang='scss' scoped>

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
            text-align: center;
            margin-bottom: 1.5rem;
            button {
                border-radius: 10px;
                background-color: #C83E3E;
                color: white;
                padding: .5em 1em;
                font-size: 16px;
                cursor: pointer;
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
</style>
