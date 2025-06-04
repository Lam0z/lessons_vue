<script setup>
const value = ref("");
const message = ref("message");
const checked = ref(false);

const checkedNames = ref([]);
const picked = ref("");
const john = ref("");
const selected = ref("A");
const number = ref();

const options = ref([
    { text: "Один", value: "A" },
    { text: "Два", value: "B" },
    { text: "Три", value: "C" },
]);
</script>

<template>
    <!--  -->
    <LPart title="v-model analog">
        <div>Output: {{ value }}</div>
        <input
            type="text"
            class="form-control"
            :value="value"
            @input="value = $event.target.value"
        />
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Обычное использование">
        <p>Сообщение: {{ message }}</p>
        <input
            v-model="message"
            class="form-control"
            placeholder="отредактируй меня"
        />
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Обычное использование">
        <span>Многострочное сообщение:</span>
        <p style="white-space: pre-line">{{ message }}</p>
        <textarea
            v-model="message"
            placeholder="введите несколько строчек"
        ></textarea>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Чекбоксы">
        <input
            type="checkbox"
            id="checkbox"
            v-model="checked"
            class="form-check-input"
        />
        <label for="checkbox" class="form-check-label">{{ checked }}</label>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Чекбоксы">
        <div>Отмеченные имена: {{ checkedNames }}</div>

        <input
            type="checkbox"
            class="form-check-input"
            id="jack"
            value="Jack"
            v-model="checkedNames"
        />
        <label for="jack" class="form-check-label">Jack</label>

        <input
            type="checkbox"
            class="form-check-input"
            id="john"
            value="John"
            v-model="checkedNames"
        />
        <label for="john" class="form-check-label">John</label>

        <input
            type="checkbox"
            class="form-check-input"
            id="mike"
            value="Mike"
            v-model="checkedNames"
        />
        <label for="mike" class="form-check-label">Mike</label>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Радиокнопки ">
        <div>Выбрано: {{ picked }}</div>

        <input type="radio" id="one" value="Один" v-model="picked" />
        <label for="one">Один</label>

        <input type="radio" id="two" value="Два" v-model="picked" />
        <label for="two">Два</label>

        <div>is John? : {{ john }}</div>
        <label>
            John
            <input
                type="radio"
                class="form-check-input"
                id="john"
                value="John"
                v-model="john"
            />
        </label>
        <label>
            Kostya
            <input
                type="radio"
                class="form-check-input"
                id="john"
                value="Konstantine"
                v-model="john"
            />
        </label>
    </LPart>
    <!--  -->

    <!--  -->
    <LPart title="Выпадающие списки">
        <select v-model="selected">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>

        <div>Выбрано: {{ selected }}</div>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Модификаторы">
        <div>Output: {{ number }}</div>
        <input
            class="form-control"
            type="number"
            v-model.number="number"
            @input="number = $event.target.value"
        />
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
