<script>
    export let textFade = false
</script>

<button class="button no-underline flex justify-center items-center relative z-0 font-normal text-base focus:outline-none {$$props.class}" class:text-fade={textFade} on:click>
    <slot />
</button>

<style>
    .button::before {
        content: '';
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.5s ease;
        width: 0;
        height: 100%;
    }

    .button:hover::before {
        width: 100%;
    }

    .text-fade {
        transition: all 0.27s;
    }

    .text-fade:hover {
        color: #fff;
    }
</style>
