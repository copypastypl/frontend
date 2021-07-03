<script>
    import Comment from './Comment.svelte'
    import Icon from 'svelte-awesome'
    import { plus, minus } from 'svelte-awesome/icons'
</script>

<div class="w-full mb-16 shadow-lg">
    <div class="border">
        <div
            class="flex w-full items-center sm:px-12 sm:py-2 m-0 bg-post-section border-b"
        >
            <img
                class="author-avatar mr-2 sm:rounded"
                src="https://cdn.discordapp.com/avatars/766005840154853430/2fb8c06f538d6b155e6ad9cca3c3e7d2.png"
                alt="Avatar"
            />

            <div class="flex-col w-full">
                <div class="font-bold">Lorem, ipsum.</div>
                <div>2 days ago</div>
            </div>

            <div class="justify-self-end w-24 sm:text-right">
                <Icon class="mr-4" data={plus} scale="1.2" />
                <Icon data={minus} scale="1.2" />
            </div>
        </div>

        <div class="px-4 py-2 sm:p-12 sm:py-2 border-b">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi vel
            asperiores eos molestiae iure vitae porro, esse, possimus, delectus
            nihil nam quia nobis id sed dolore eius quisquam enim odio autem
            suscipit ipsa veniam. Magnam odio, nihil quidem aliquid sunt porro,
            modi aliquam ipsam recusandae, obcaecati nobis possimus veniam eos
            officiis? Quaerat in eum consequatur! Possimus tempore, saepe quam
            fugiat laboriosam fuga laudantium cum! Veritatis corporis vero
            officia quod iusto. Numquam quis adipisci temporibus nesciunt
            voluptatem facere autem libero, id eaque vel enim nulla dignissimos
            dolores veniam harum fuga cum quasi tenetur aperiam obcaecati
            accusantium. Delectus culpa doloribus velit fugit?
        </div>

        <Comment />
        <Comment />
    </div>
</div>

<style>
    .author-avatar {
        width: 48px;
        height: 48px;
    }
</style>
