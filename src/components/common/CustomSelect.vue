<template>
    <select :value="modelValue" @change="changeOption">
        <option value="">Choose</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
};
</script>

<style lang="scss" scoped></style>
