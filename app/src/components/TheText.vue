<template>
    <div class="wrapper">
        <div class="child">
            <div class="prediction">
                <b-row>
                    <b-col sm="12">
                        <h4 class="text-left">Your Mood is</h4>
                        <br>
                        <h3>{{ prediction }}</h3>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RwvText',
    props: {
        prediction: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.wrapper {
    text-align: center;
}

.child {
    width: 50rem;
    height: 10rem;
    background-color: white;
    display: inline-block;
}

.prediction {
    padding: 50px;
}

</style>