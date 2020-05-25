<template>
    <div>
        Title: {{ title }}
        Duration: {{ duration }}
        Overview: {{ overview }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    name: 'RwvMovie',
}
</script>

<style>

</style>