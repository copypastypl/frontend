<script>
    let isRegistering = false
    let showFrontSide = true

    const changeRegisteringState = () => {
        isRegistering = !isRegistering

        setTimeout(() => {
            showFrontSide = !showFrontSide
        }, 250)
    }
</script>

<div class="h-full w-full flex justify-center items-center">
    <div
        class="login-box bg-login-box w-96 h-116 p-12 sm:shadow-lg sm:border transition duration-600 ease-in-out"
        class:rotated={isRegistering}
    >
        {#if showFrontSide}
            <div class="login-box-front">
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">
                        Lorem, ipsum.
                    </h1>
                    <h2 class="text-center font-normal text-lg mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h2>
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <div class="mt-4">
                    <button class="login-button" type="button">
                        <div class="text">Log in</div>
                    </button>
                </div>

                <div class="mt-3 flex justify-between">
                    <button
                        class="login-text-button"
                        on:click={changeRegisteringState}
                    >
                        Register
                    </button>

                    <a class="login-text-button" href="/"> Forgot Password? </a>
                </div>
            </div>
        {:else}
            <div class="login-box-back">
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">
                        Lorem, ipsum.
                    </h1>
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="username"
                        type="text"
                        placeholder="Username"
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
                        placeholder="Password"
                    />
                </div>

                <div class="mt-2">
                    <input
                        class="login-input"
                        id="repeated-password"
                        type="repeated-password"
                        placeholder="Repeat password"
                    />
                </div>

                <div class="mt-4">
                    <button class="login-button" type="button">
                        <div class="text">Register</div>
                    </button>
                </div>

                <div class="mt-3 flex justify-between">
                    <button
                        class="login-text-button"
                        on:click={changeRegisteringState}
                    >
                        Log in
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .login-button {
        @apply relative z-0 bg-login-button text-white font-semibold py-2 px-4 w-full focus:outline-none border border-black;
    }

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

    .login-button::before {
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

    .login-button:hover::before {
        width: 100%;
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
