<template>
    <div class="wrapper">
        <div class="child">
            <div class="prediction">
                <b-row>
                    <b-col sm="12">
                        <h5 class="text-left">You are...</h5>
                        <br>
                        <h4 id="predicted-mood" class="text-left">{{ emoji[prediction] }}</h4>
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
    },
    data() {
        return {
            emoji: {happy: '😁', sad: '☹️', neutral: '😐', angry: '😡', surprised: '😲'}
        }
    }
}
</script>

<style>

.child {
    width: 50rem;
    height: 10rem;
    background-color: white;
    display: inline-block;
}

.prediction {
    padding: 10px;
}

#predicted-mood {
    padding-left: 10%;
}

</style>