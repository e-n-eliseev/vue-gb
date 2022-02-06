import { mount } from "@vue/test-utils";
import Calc from "../components/Calc";

describe('Test Calculator', () => {
    it('test first operand input', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('1')
        expect(wrapper.vm.number1).toBe(1)
    })

    it('test second operand input', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find("input[class='calc-number2']")
        // operand2.setValue('1')
        operand2.element.value = '1'
        operand2.trigger('input')
        expect(wrapper.vm.number2).toBe(1)
    })

    it('test sum', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-summ']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат сложения чисел 3 и 2 : 5")

    })
    it('test keyboard vision', () => {
        const wrapper = mount(Calc)
        wrapper.find("input[id='checkbox']").setChecked()
        expect(wrapper.vm.isVisible).toBe(true)
    })
    it('test keyboard reset', async () => {
        let wrapper = mount(Calc)
        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')
        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')
        wrapper.find("input[id='checkbox']").setChecked()
        await wrapper.nextTick
        wrapper.find("button[class='calc-reset']").trigger('click')
        expect(wrapper.vm.number1).toBe(0)
        expect(wrapper.vm.number2).toBe(0)
    })
    it('test keyboard erase', async () => {
        let wrapper = mount(Calc)
        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('361')
        wrapper.find("input[id='checkbox']").setChecked()
        await wrapper.nextTick
        wrapper.find("button[class='calc-erase']").trigger('click')
        expect(wrapper.vm.number1).toBe(36)
    })
    it('test keyboard type button1', async () => {
        const wrapper = mount(Calc)
        wrapper.find("input[id='checkbox']").setChecked()
        await wrapper.nextTick
        wrapper.find("button[data-id='1']").trigger('click')
        expect(wrapper.vm.number1).toBe(1)
    })
    it('test keyboard change operand', async () => {
        let wrapper = mount(Calc)
        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('36')
        wrapper.find("input[id='checkbox']").setChecked()
        await wrapper.nextTick
        wrapper.find("input[value='number2']").setChecked()
        wrapper.find("button[data-id='6']").trigger('click')
        expect(wrapper.vm.number2).toBe(366)
    })
    it('test diff', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-diff']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат разности чисел 3 и 2 : 1")

    })
    it('test mult', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-mult']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат умножения чисел 3 и 2 : 6")

    })
    it('test divide', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('4')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-divide']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат деления числа 4 на 2 : 2")

    })
    it('test divide to 0', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('0')

        const sumBtn = wrapper.find("button[class='calc-divide']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Делить на 0 нельзя")

    })
    it('test divide-int', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-divide-int']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат целочисленного деления числа 3 на 2 : 1")

    })
    it('test divide-int to 0', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('3')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('0')

        const sumBtn = wrapper.find("button[class='calc-divide-int']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Делить на 0 нельзя")

    })
    it('test pow', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find("input[class='calc-number1']")
        operand1.setValue('2')

        const operand2 = wrapper.find("input[class='calc-number2']")
        operand2.setValue('2')

        const sumBtn = wrapper.find("button[class='calc-pow']")
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe("Результат возведения числа 2 в степень 2 : 4")

    })
})