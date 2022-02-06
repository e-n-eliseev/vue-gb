<template>
  <div class="calc">
    <div class="calc-inputs">
      <input class="calc-number1" type="number" v-model.number="number1" />
      <input class="calc-number2" type="number" v-model.number="number2" />
      <p class="calc-result">{{ result }}</p>
    </div>
    <div class="calc-methods">
      <button class="calc-summ" @click="summ(number1, number2)">+</button>
      <button class="calc-diff" @click="diff(number1, number2)">-</button>
      <button class="calc-mult" @click="mult(number1, number2)">*</button>
      <button class="calc-divide" @click="divide(number1, number2)">/</button>
      <button class="calc-divide-int" @click="divideInt(number1, number2)">
        int
      </button>
      <button class="calc-pow" @click="pow(number1, number2)">
        n<sup>m</sup>
      </button>
    </div>
    <label
      ><input type="checkbox" id="checkbox" v-model="isVisible" /> Показать
      экранную клавиатуру.</label
    >
    <div v-if="isVisible">
      <button
        v-for="item in 9"
        :data-id="item"
        :key="item"
        @click="buttonNumber(item)"
      >
        {{ item }}
      </button>
      <button class="calc-erase" @click="buttonBackSpace()">Del</button>
      <button class="calc-reset" @click="buttonReset()">Reset</button>
      <div>
        <label
          ><input
            type="radio"
            name="number"
            v-model="number"
            value="number1"
          />Первое число</label
        >
        <label
          ><input
            type="radio"
            name="number"
            v-model="number"
            value="number2"
          />Второе число</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      result: "Введите числа и выберите операцию",
      number1: 0,
      number2: 0,
      isVisible: false,
      number: "number1",
    };
  },
  methods: {
    buttonReset() {
      this.number1 = 0;
      this.number2 = 0;
    },
    buttonBackSpace() {
      this[this.number] = (this[this.number] / 10) | 0;
    },
    buttonNumber(item) {
      this[this.number] = this[this.number] * 10 + item;
    },
    summ(number1, number2) {
      this.result = `Результат сложения чисел ${this.number1} и ${
        this.number2
      } : ${number1 + number2}`;
      return this.result;
    },
    diff(number1, number2) {
      this.result = `Результат разности чисел ${this.number1} и ${
        this.number2
      } : ${number1 - number2}`;
      return this.result;
    },
    mult(number1, number2) {
      this.result = `Результат умножения чисел ${this.number1} и ${
        this.number2
      } : ${number1 * number2}`;
      return this.result;
    },
    divide(number1, number2) {
      if (!this.number2) {
        return (this.result = "Делить на 0 нельзя");
      }
      this.result = `Результат деления числа ${this.number1} на ${
        this.number2
      } : ${number1 / number2}`;
      return this.result;
    },
    divideInt(number1, number2) {
      if (!this.number2) {
        return (this.result = "Делить на 0 нельзя");
      }
      this.result = `Результат целочисленного деления числа ${
        this.number1
      } на ${this.number2} : ${Number.parseInt(number1 / number2)}`;
      return this.result;
    },
    pow(number1, number2) {
      this.result = `Результат возведения числа ${this.number1} в степень ${
        this.number2
      } : ${Math.pow(number1, number2)}`;
      return this.result;
    },
  },
};
</script>
<style scoped>
input {
  text-align: end;
  margin: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}
input::placeholder {
  text-align: end;
}
button {
  width: 50px;
  height: 50px;
  margin: 20px;
}
</style>