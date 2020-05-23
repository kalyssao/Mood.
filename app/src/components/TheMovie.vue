<template>
    <div>
        Title: {{ title }}
        Duration: {{ duration }}
        Overview: {{ overview }}
    </div>
</template>

<script>
export default {
    name: 'RwvMovie',
    data() {
        return  {
            title: '',
            duration: '',
            overview: ''
        }
    }
}
</script>

<style>

</style>