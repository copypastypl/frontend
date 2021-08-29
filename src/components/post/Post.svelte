<script>
    import Comment from './Comment.svelte'
    import Icon from 'svelte-awesome'
    import { plus, minus } from 'svelte-awesome/icons'
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
                    <div class="font-semibold">Username</div>
                    <div>2 days ago</div>
                </div>
            </div>

            <div class="py-1 mt-1 font-semibold text-2xl">
                Lorem ipsum dolor sit amet consectetur.
            </div>
            <!-- 
            <div class="flex justify-end items-center w-full post-options">
                <Icon class="mr-4" data={plus} scale="1.2" />
                <Icon data={minus} scale="1.2" />
            </div> -->
        </div>

        <div class="px-4 py-4 sm:p-12 sm:py-6 border-b">
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
