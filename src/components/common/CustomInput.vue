<template>
    <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    margin: 8px 0;
    padding: 4px 8px;
}
</style>
