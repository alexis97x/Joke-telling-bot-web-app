<script setup>

    import {ref, watch} from 'vue'
    import axios from 'axios'

    const joke_setup = ref('')
    const joke_punchline = ref('')
    const recognition = new window.webkitSpeechRecognition();
    const recognitionResult = ref('')
    const items = ref([])
    const voiceAccent = ref('')
    const grammar = ''

    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        voiceAccent.value = voices[0].lang
        const langSet = new Set();
        voices.forEach(voice => {
            langSet.add(voice.lang)
        })
        langSet.forEach(lang => {
            items.value.push(lang)
        })
    };

    function handleKeyDown(event) {
        if(event.key === 'j' || event.key === 'J') {
            generateJoke()
        }
    }

    watch(recognitionResult, () => {
        if(recognitionResult.value.toLowerCase() == 'tell me a joke') {
            generateJoke()
        }
    })
    
    window.addEventListener('keydown', handleKeyDown)

    function listen() {
        recognition.start()
    }

    recognition.continuos = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
        recognitionResult.value = event.results[0][0].transcript
    }

    function generateJoke() {
        axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(response => {
            joke_setup.value = response.data[0].setup
            joke_punchline.value = response.data[0].punchline
            setTimeout(() => {
                let punchline = new SpeechSynthesisUtterance(joke_punchline.value)
                punchline.lang = voiceAccent.value
                window.speechSynthesis.speak(punchline)
            }, 3000)
            let setup = new SpeechSynthesisUtterance(joke_setup.value)
            setup.lang = voiceAccent.value
            window.speechSynthesis.speak(setup)
        })
    }

    
    recognition.start()


</script>

<template>
    <v-container align="center" id="container" class="mt-5">
        <h2 v-show="joke_setup">{{ joke_setup }}</h2>
        <h2 v-show="joke_punchline">{{ joke_punchline }}</h2>
        <v-img src="https://i.gifer.com/YseV.gif" width="80vw" class="mt-5" height="70vh">
            <v-row>
                <v-col>
                    <v-btn @click="listen" id="button2">Say Tell me a joke</v-btn>
                </v-col>
                <v-col id="button">
                    <v-btn color="blue" @click="generateJoke" @keydown="handleKeyDown">Tell me a joke</v-btn>
                </v-col>
                <v-col id="button">
                    <v-select 
                    label="Select voice language"
                    v-model="voiceAccent"
                    :items="items"
                    ></v-select>
                </v-col>
            </v-row>
            
        </v-img>
    </v-container>
</template>

<style scoped>

    #container {
        background-color: rgb(187,210,239);
    }

    #button, #button2 {
        margin-top: 420px;
    }

</style>