<script>
    import { getContext } from 'svelte'
    import AddPostModal from './AddPostModal.svelte'

    const { open } = getContext('simple-modal')

    const showModal = () => {
        open(AddPostModal, {},
            {
                styleWindow: {
                    borderRadius: '0px',
                    padding: '0px'
                },
                styleContent: {
                    padding: '0px'
                }
            }
        )
    }
</script>

<div class="h-full" on:click={showModal}>
    <a href="/" class="nav-link-a">
        <div class="text">Add post</div>
    </a>
</div>

<style>
    .nav-link-a {
        @apply no-underline h-full flex justify-center items-center py-4 w-24 relative z-0 bg-nav text-white font-normal text-base;
    }

    .text {
        mix-blend-mode: difference;
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
