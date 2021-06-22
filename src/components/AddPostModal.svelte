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

        <button
            class="modal-button relative self-end mt-4 z-0 bg-login-button text-white font-semibold py-2 px-4 focus:outline-none border border-black w-52"
        >
            <div class="text">Dodaj</div>
        </button>
    </div>
</div>

<style>
    .modal-input {
        @apply shadow appearance-none border py-2 px-3 transition duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-black;
    }

    .modal-button::before {
        content: '';
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.5s ease;
        width: 0;
        height: 100%;
    }

    .modal-button:hover::before {
        width: 100%;
    }

    .text {
        mix-blend-mode: difference;
    }
</style>
