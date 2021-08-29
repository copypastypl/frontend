<script>
    import Nav from '../components/nav/Nav.svelte'
    import Post from '../components/post/Post.svelte'
</script>

<Nav />

<div class="h-full w-full flex justify-center">
    <div class="h-full m-4 lg:m-0 lg:w-5/12 pt-24">
        <Post />
        <Post />
        <Post />
    </div>
</div>
