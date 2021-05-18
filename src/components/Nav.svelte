<nav class="h-12 fixed w-full flex justify-center border-right border border-t-0 border-r-0 border-l bg-nav">
    <ul class="m-0 p-0 h-full w-2/4 flex">
        <li class="nav-link-item">
            <a
                href="/"
                class="nav-link-a"
            >
                <div class="text">Link1</div>
            </a>
        </li>
        <li class="nav-link-item">
            <a
                href="/"
                class="nav-link-a"
            >
                <div class="text">Link2</div>
            </a>
        </li>
        <li class="nav-link-item">
            <a
                href="/"
                class="nav-link-a"
            >
                <div class="text">Link3</div>
            </a>
        </li>
        <li class="nav-link-item bg-red-500 ml-auto">
            <a
                href="/"
                class="nav-link-a justify-self-end"
            >
                <div class="text logout-text text-red-500">Log out</div>
            </a>
        </li>
    </ul>
</nav>

<style>
    .nav-link-a {
        @apply no-underline h-full flex justify-center items-center p-0 py-4 relative z-0 bg-nav text-white font-normal text-base;
    }

    .text {
        mix-blend-mode: difference;
    }

    .logout-text {
        mix-blend-mode: normal;
    }

    .nav-link-item {
        @apply w-24 h-full;
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
</style>
