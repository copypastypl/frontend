<script>
    import Nav from '../components/Nav.svelte'
</script>

<Nav />

<div class="h-full w-full flex justify-center">
    <div class="h-full m-4 lg:m-0 lg:w-2/4 pt-24">
        <div class="w-full mb-16">
            <div class="sm:p-12 border">
                <div class="header">
                    <div class="flex w-full items-center m-0">
                        <img
                            class="author-avatar m-2"
                            src="https://cdn.discordapp.com/avatars/766005840154853430/2fb8c06f538d6b155e6ad9cca3c3e7d2.png"
                            alt="Avatar"
                        />

                        <div class="flex-col">
                            <div class="font-bold">Lorem, ipsum.</div>
                            <div>2 days ago</div>
                        </div>
                    </div>
                </div>

                <div class="content mx-16">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi vel asperiores eos molestiae iure vitae porro, esse,
                    possimus, delectus nihil nam quia nobis id sed dolore eius
                    quisquam enim odio autem suscipit ipsa veniam. Magnam odio,
                    nihil quidem aliquid sunt porro, modi aliquam ipsam
                    recusandae, obcaecati nobis possimus veniam eos officiis?
                    Quaerat in eum consequatur! Possimus tempore, saepe quam
                    fugiat laboriosam fuga laudantium cum! Veritatis corporis
                    vero officia quod iusto. Numquam quis adipisci temporibus
                    nesciunt voluptatem facere autem libero, id eaque vel enim
                    nulla dignissimos dolores veniam harum fuga cum quasi
                    tenetur aperiam obcaecati accusantium. Delectus culpa
                    doloribus velit fugit?
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .author-avatar {
        width: 48px;
        height: 48px;
    }
</style>
