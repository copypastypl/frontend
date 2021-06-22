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

<li class="nav-link-item" on:click={showModal}>
    <a href="/" class="nav-link-a">
        <div class="text">Add post</div>
    </a>
</li>
