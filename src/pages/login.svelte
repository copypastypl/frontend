<script>
    import AnimatedButton from '../components/AnimatedButton.svelte'

    let isRegistering = false
    let showFrontSide = true

    let username = ''
    let email = ''
    let password = ''
    let repeatedPassword = ''

    const changeRegisteringState = () => {
        isRegistering = !isRegistering

        setTimeout(() => {
            showFrontSide = !showFrontSide
        }, 180)
    }

    const handleRegister = () => {
        if (username.length === 0) return
        if (email.length === 0) return
        if (password.length === 0) return
        if (repeatedPassword.length === 0) return
        if (password !== repeatedPassword) return
        if (!/^[^\s@]+@[^\s@]+$/.test(email)) return

        fetch('https://testy.copypasty.pl/users/create/', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                changeRegisteringState()
            }
        })
    }

    const handleLogin = () => {
        if (username.length === 0) return
        if (password.length === 0) return

        console.log('tak')

        fetch('https://testy.copypasty.pl/users/token/', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.accessToken = data.access
                localStorage.refreshToken = data.refresh

                location.href = "/"
            })
    }
</script>

<div class="h-screen w-full flex justify-center items-center">
    <div
        class="login-box bg-login-box w-96 h-116 p-12 sm:shadow-lg sm:border transition duration-500 ease-in-out"
        class:rotated={isRegistering}
    >
        {#if showFrontSide}
            <form class="login-box-front" on:submit|preventDefault>
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">Logowanie</h1>
                    <h2 class="text-center font-normal text-lg mt-3">
                        Zaloguj się, aby korzystać z pełnych możliwości serwisu
                    </h2>
                </div>

                <input
                    class="login-input mt-2"
                    id="username"
                    type="text"
                    placeholder="Nazwa użytkownika"
                    bind:value={username}
                    required
                />

                <input
                    class="login-input mt-2"
                    id="password"
                    type="password"
                    placeholder="Hasło"
                    bind:value={password}
                    required
                />

                <AnimatedButton
                    class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4 mt-4"
                    on:click={handleLogin}
                >
                    <div class="text">Zaloguj się</div>
                </AnimatedButton>

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
            </form>
        {:else}
            <form class="login-box-back" on:submit|preventDefault>
                <div class="login-header">
                    <h1 class="text-center font-bold text-4xl">Rejestracja</h1>
                </div>

                <input
                    class="login-input mt-2"
                    type="text"
                    placeholder="Nazwa użytkownika"
                    bind:value={username}
                    required
                />

                <input
                    class="login-input mt-2"
                    type="email"
                    placeholder="Email"
                    bind:value={email}
                    required
                />

                <input
                    class="login-input mt-2"
                    type="password"
                    placeholder="Hasło"
                    bind:value={password}
                    required
                />

                <input
                    class="login-input mt-2"
                    type="password"
                    placeholder="Powtórzone hasło"
                    bind:value={repeatedPassword}
                    required
                />

                <AnimatedButton
                    class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4 mt-4"
                    on:click={handleRegister}
                >
                    <div class="text">Zarejestruj się</div>
                </AnimatedButton>

                <div class="mt-3 flex justify-between">
                    <button
                        class="login-text-button"
                        on:click={changeRegisteringState}
                    >
                        Zaloguj się
                    </button>
                </div>
            </form>
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
