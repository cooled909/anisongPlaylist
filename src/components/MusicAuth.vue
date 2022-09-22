<script>
    export default {
        data() {
            return {
                clientId: import.meta.env.VITE_CLIENT_ID,
            };
        },
        mounted(){
            this.receiveSpotifyToken();
        },
        methods: {
            receiveSpotifyToken(){
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const accessToken = urlParams.get('access_token');
                const refreshToken = urlParams.get('refresh_token');

                console.log(accessToken);
                console.log(refreshToken);
            }
        },
    }
</script>

<template>
    <div class="h-1/2">
        <a href='http://localhost:8888/login'>
            <button class="flex flex-row h-12 w-60 bg-[#1db954] rounded-md hover:bg-green-600 active:bg-green-800">
                <img src="../assets/spotify-white.png" alt="" class="h-10 ml-2 mt-1">
                <span class="ml-4 my-3 text-white text-md font-bold">Connect with Spotify</span>
            </button>
        </a>
    </div>
</template>