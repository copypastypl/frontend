<script>
    import Nav from '../components/nav/Nav.svelte'
    import Post from '../components/post/Post.svelte'

    const fetchPosts = (async () => {
        const response = await fetch('https://testy.copypasty.pl/posts/')
        return await response.json()
    })()
</script>


<Nav />

<div class="h-full w-full flex justify-center">
    <div class="h-full m-4 lg:m-0 lg:w-5/12 pt-24">
        {#await fetchPosts}
            <p>Trwa wczytywanie postów...</p>
        {:then data}
            {#each data.results as post}
                <Post {post} />
            {/each}
        {:catch error}
            <p>Wystąpił niespodziewany błąd!</p>
        {/await}

    </div>
</div>


