<template>
    <footer>
        <span class="span">© <strong>2021</strong> SeekClass</span> 
    </footer>  
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer{
        grid-area: footer;
        background-color: #757575;
        color: white;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    
</style>