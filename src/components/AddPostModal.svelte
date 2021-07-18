<script>
import AnimatedButton from "./AnimatedButton.svelte";

</script>
<div>
    <h1 class="font-semibold text-2xl p-4 ml-4">Dodaj post</h1>

    <div class="border-t" />

    <div class="p-8 pt-0 flex flex-col">
        <input
            class="modal-input h-10 w-3/4 mt-4"
            id="title"
            type="text"
            placeholder="Tytuł"
        />

        <textarea
            class="modal-input mt-4 h-52"
            id="content"
            placeholder="Treść"
        />

        <AnimatedButton class="bg-login-button text-white self-end mt-4 w-52 py-2 px-4 border border-black font-semibold">
            <div class="text">Dodaj</div>
        </AnimatedButton>
    </div>
</div>

<style>
    .modal-input {
        @apply shadow appearance-none border py-2 px-3 transition duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-black;
    }

    .text {
        mix-blend-mode: difference;
    }
</style>
