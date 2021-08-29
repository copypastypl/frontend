<script>
    import VirtualList from '@sveltejs/svelte-virtual-list'

    // Sample data
    const items = [
        { name: 'one', number: 1 },
        { name: 'two', number: 2 },
        { name: 'three', number: 3 },
        { name: 'a', number: 4 },
        { name: 'b', number: 5 },
        { name: 'c', number: 6 },
        { name: 'd', number: 7 },
        { name: 'e', number: 8 },
        { name: 'six thousand and ninety-two', number: 6092 }
    ]

    let searchTerm = ''

    $: filteredList = items.filter(
        (item) => item.name.indexOf(searchTerm) !== -1
    )

    let focused = false

    const onFocus = () => {
        focused = true
    }

    const onBlur = () => {
        focused = false
    }
</script>

<div class="w-full flex items-center flex-col">
    <input
        class="appearance-none border h-8 mt-2 lg:w-4/6 px-3 transition duration-500 ease-in-out focus:outline-none"
        on:focus={onFocus}
        on:blur={onBlur}
        bind:value={searchTerm}
        type="text"
        placeholder="Szukaj..."
    />

    {#if focused}
        <div class="h-48 w-4/6 bg-post-section border p-4 pr-0">
            <VirtualList items={filteredList} let:item>
                <p>{item.number}: {item.name}</p>
            </VirtualList>
        </div>
    {/if}
</div>
