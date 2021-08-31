<script>
    import { Router } from '@roxi/routify'
    import { routes } from '../.routify/routes'
    import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<Router {routes} />
<SvelteToast />

<style>
    :global(.input){
        @apply shadow appearance-none border w-full py-2 px-3 transition duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-black;
    }
</style>