<script>
    export let comment;
</script>

<div class="comment w-full px-12 p-3 bg-post-section text-sm">
    <div class="post-author flex text-sm">
        <img
            class="author-avatar mr-2 sm:rounded"
            src="https://cdn.discordapp.com/avatars/766005840154853430/2fb8c06f538d6b155e6ad9cca3c3e7d2.png"
            alt="Avatar"
        />

        <div class="w-full flex items-center">
            <div class="font-semibold">{comment.author.username}</div>
            <div class="px-2">•</div>
            <div>{new Date(Date.parse(comment.created_at)).toLocaleTimeString("pl-PL").slice(0, -3)}</div>
        </div>
    </div>

    <p class="pl-8">
        {comment.content}
    </p>
</div>

<style>
    .author-avatar {
        width: 24px;
        height: 24px;
    }
</style>
