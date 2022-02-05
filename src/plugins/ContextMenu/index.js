export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true;
        this.element = null;

        Vue.prototype.$context = {
            EventBus: new Vue(),

            show({ ...settings }) {
                const element = settings.itemPos;
                if (element !== this.element) {
                    this.EventBus.$emit('show', { ...settings })
                    console.log('show', { ...settings })
                    this.element = element;
                } else {
                    this.hide();
                }
            },

            hide() {
                this.EventBus.$emit('hide')
                this.element = null;
                console.log('hide')
            }
        }
    }
}