<script>
    import AnimatedButton from '../components/AnimatedButton.svelte'

    let isRegistering = false
    let showFrontSide = true

    const changeRegisteringState = () => {
        isRegistering = !isRegistering

        setTimeout(() => {
            showFrontSide = !showFrontSide
        }, 180)
    }
</script>

<div class="h-full w-full flex justify-center items-center">
    <div
        class="login-box bg-login-box w-96 h-116 p-12 sm:shadow-lg sm:border transition duration-500 ease-in-out"
        class:rotated={isRegistering}
    >
        {#if showFrontSide}
            <div class="login-box-front">
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">Logowanie</h1>
                    <h2 class="text-center font-normal text-lg mt-3">
                        Zaloguj się, aby korzystać z pełnych możliwości serwisu
                    </h2>
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="username"
                        type="text"
                        placeholder="Nazwa użytkownika"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="password"
                        type="password"
                        placeholder="Hasło"
                    />
                </div>

                <div class="mt-4">
                    <AnimatedButton
                        class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4"
                    >
                        <div class="text">Zaloguj się</div>
                    </AnimatedButton>
                </div>

                <div class="mt-3 flex justify-between">
                    <button
                        class="login-text-button"
                        on:click={changeRegisteringState}
                    >
                        Zarejestruj się
                    </button>

                    <a class="login-text-button" href="/">
                        Zapomniałeś hasła?
                    </a>
                </div>
            </div>
        {:else}
            <div class="login-box-back">
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">Rejestracja</h1>
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="username"
                        type="text"
                        placeholder="Nazwa użytkownika"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="password"
                        type="password"
                        placeholder="Hasło"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="repeated-password"
                        type="repeated-password"
                        placeholder="Powtórzone hasło"
                    />
                </div>

                <div class="mt-4">
                    <AnimatedButton
                        class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4"
                    >
                        <div class="text">Zaloguj się</div>
                    </AnimatedButton>
                </div>

                <div class="mt-3 flex justify-between">
                    <button
                        class="login-text-button"
                        on:click={changeRegisteringState}
                    >
                        Zaloguj się
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .login-input {
        @apply shadow appearance-none border w-full py-2 px-3 transition duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-black;
    }

    .login-text-button {
        @apply font-bold text-sm text-gray-800 focus:outline-none;
    }

    .login-header {
        @apply mb-9;
    }

    .login-box-front,
    .login-box-back {
        @apply p-12 -ml-12 -mt-12 absolute h-full w-full;
    }

    .text {
        mix-blend-mode: difference;
    }

    .login-box {
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .rotated {
        transform: rotateY(180deg);
    }

    .login-box-back {
        transform: rotateY(180deg);
    }
</style>
