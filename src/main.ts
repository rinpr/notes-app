import { createApp } from 'vue'
import 'virtual:windi.css'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenSquare} from "@fortawesome/free-solid-svg-icons"
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash)
library.add(faPenSquare)
library.add(faPlusCircle)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
