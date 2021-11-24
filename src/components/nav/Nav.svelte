<script>
    import AnimatedButton from '../AnimatedButton.svelte'
    import SearchBar from './search-bar/SearchBar.svelte'

    function handleLogout() {
        localStorage.clear()
        location.href = '/'
    }
</script>

<nav
    class="h-12 fixed w-full flex justify-center border-right border border-t-0 border-r-0 border-l bg-nav"
>
    <ul class="m-0 p-0 h-full lg:w-5/12 flex">
        <li
            class="nav-link-item no-underline flex justify-center items-center font-semibold text-lg"
        >
            <!-- <Modal>
                <AddPostButton />
            </Modal> -->

            Copypasty
        </li>

        <li class="w-full mx-12 h-52">
            <SearchBar />
        </li>

        <li class="nav-link-item w-24 bg-login-button">
            <AnimatedButton textFade class="w-24 h-full text-black bg-nav">
                {#if !localStorage.accessToken}
                <a href="/login" class="w-full h-full flex justify-center items-center">Zaloguj się</a>
                {:else}
                <a on:click={handleLogout} class="w-full h-full flex justify-center items-center">Wyloguj się</a>
                {/if}
            </AnimatedButton>
        </li>
    </ul>
</nav>

<style>
    .nav-link-item {
        @apply h-full;
    }
</style>
