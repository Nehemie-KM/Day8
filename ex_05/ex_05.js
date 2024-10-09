let { createApp, ref} = Vue;

createApp( {

setup(){ 

    let message = ref('')

    let time = function() { 
        let dada = new Date();
message.value = dada.toLocaleTimeString("fr-FR");
    };
time();
setInterval(time, 1000);
return { 
    message
};
}

}).mount("#app")