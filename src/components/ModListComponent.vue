<script setup lang="ts">
</script>

<template>
    <div id="tincraft">
        <img src="https://github.com/randomusert-s-mods/logos/releases/download/tincraft/tincraft_logo_og.png" width="100" height="100" id="tincraft_logo"></img>
        <h1>tincraft</h1>
        <p>A mod all about automation</p>
        <a href="https://www.curseforge.com/minecraft/mc-mods/tincraft">Curseforge</a>
        <a href="https://modrinth.com/mod/tincraft">modrinth</a>
    </div>
    <div id="gregtech_pack_core">
        <img src="https://github.com/randomusert-s-mods/logos/releases/download/gt_pack_core/gregtech_pack_core_logo.webp" width="100" height="100" id="gregtech_pack_core_logo"></img>
        <h1>gregtech pack core</h1>
        <p>The core library for gregtech pack line of modpacks</p>
        <a href="https://www.curseforge.com/minecraft/mc-mods/gregtech-pack-core">Curseforge</a>
    </div>
    <button id="back"><a href="#/">Back to home</a></button>
</template>

<style scoped>
#tincraft {
    border: 2;
    border-style: solid;
    border-color: #464746;
    border-radius: 19px;
    width: 600px;

}
#tincraft_logo {
    border-radius: 19px;
}
#gregtech_pack_core {
    border: 2;
    border-style: solid;
    border-color: #464746;
    border-radius: 19px;
    width: 600px;
    margin-top: 20px;
}
#gregtech_pack_core_logo {
    border-radius: 19px;
}
#back {
    margin-top: 20px;
    border-radius: 19px;
    border: 2px solid #464746;
    background-color: #f0f0f01f;
    padding: 10px 20px;
}
</style>