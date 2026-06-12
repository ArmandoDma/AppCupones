import { apiConnection } from "./db/apiConnection.js";
import { useAnimations } from "./hooks/useAnimations.js";
import { useHash } from "./hooks/useHash.js";

window.addEventListener('DOMContentLoaded', () => {    
    apiConnection();
    useHash()
    useAnimations();
})