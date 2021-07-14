<script>
    import Modal from 'svelte-simple-modal'
    import AddPostButton from './AddPostButton.svelte'
    import SearchBar from './search-bar/SearchBar.svelte'
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

        <li class="nav-link-item bg-login-button">
            <a href="/" class="nav-link-a text-black">
                <div>Zaloguj się</div>
            </a>
        </li>
    </ul>
</nav>

<style>
    .nav-link-a {
        @apply no-underline h-full flex justify-center items-center py-4 w-24 relative z-0 bg-nav font-normal text-base;

        transition: all 0.3s;
    }

    .nav-link-item {
        @apply h-full;
    }

    .nav-link-a::before {
        content: '';
        background-color: black;
        position: absolute;
        bottom: 0%;
        z-index: -1;
        transition: all 0.4s ease;
        width: 100%;
        height: 0;
    }

    .nav-link-a:hover::before {
        height: 100%;
    }

    .nav-link-a:hover {
        color: #fff;
    }
</style>
