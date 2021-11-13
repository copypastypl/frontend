<script>
    import Comment from './Comment.svelte'
    import Icon from 'svelte-awesome'
    import { plus, minus } from 'svelte-awesome/icons'

    export let post;
</script>

<div class="w-full mb-16 shadow-2xl">
    <div class="border">
        <div class="w-full sm:px-12 sm:py-2 m-0 bg-post-section border-b">
            <div class="flex text-sm">
                <img
                    class="author-avatar mr-2 sm:rounded"
                    src="https://cdn.discordapp.com/avatars/766005840154853430/2fb8c06f538d6b155e6ad9cca3c3e7d2.png"
                    alt="Avatar"
                />

                <div class="w-full flex flex-col justify-center">
                    <div class="font-semibold">{post.author}</div>
                    <div>{new Date(Date.parse(post.created_at)).toLocaleTimeString("pl-PL").slice(0, -3)}</div>
                </div>
            </div>

            <div class="py-1 mt-1 font-semibold text-2xl">
                {post.title}
            </div>
            <!--
            <div class="flex justify-end items-center w-full post-options">
                <Icon class="mr-4" data={plus} scale="1.2" />
                <Icon data={minus} scale="1.2" />
            </div> -->
        </div>

        <div class="px-4 py-4 sm:p-12 sm:py-6 border-b">
            {post.content}
        </div>

        <Comment />
        <Comment />

        <!-- <div class="w-full flex bg-white">
            <input
                class="w-full py-2 px-4 bg-post-section text-black font-semibold focus:outline-none border border-r-0 border-black"
                id="comment"
                type="text"
                placeholder="Napisz komentarz"
            />

            <button class="button" type="button">
                <div class="text">Skomentuj</div>
            </button>
        </div> -->
    </div>
</div>

<style>
    .author-avatar {
        width: 40px;
        height: 40px;
    }
</style>
