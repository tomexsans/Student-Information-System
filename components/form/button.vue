<template>
    <button><slot/></button>
</template>

<style scoped>
[button]{
    @apply border px-5 py-3 rounded-md text-sm;
}

[button-green]{
    @apply border-green-700 text-green-700 hover:bg-green-700 hover:text-white;
}
</style>