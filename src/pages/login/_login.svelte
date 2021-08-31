<script>
    import AnimatedButton from '../../components/AnimatedButton.svelte'
    import { createEventDispatcher } from 'svelte'
    import * as yup from 'yup'
    import { toastError, toastSuccess } from '../../toasts'

    const dispatch = createEventDispatcher()

    const rotateCard = () => {
        dispatch('rotateCard')
    }

    const fields = { username: '', password: '' }

    const validator = yup.object().shape({
        password: yup.string().required('Podaj poprawne hasło'),
        username: yup.string().required('Podaj poprawną nazwę użytkownika')
    })

    const handleLogin = () => {
        validator
            .validate(fields)
            .then(() => {
                fetch('https://testy.copypasty.pl/users/token/', {
                    method: 'POST',
                    body: JSON.stringify(fields),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.access && data.refresh) {
                            localStorage.accessToken = data.access
                            localStorage.refreshToken = data.refresh

                            toastSuccess('Zalogowano pomyślnie!')

                            location.href = '/'
                        } else {
                            toastError('Niepoprawne dane logowania!')
                        }
                    })
            })
            .catch((data) => {
                if (data.errors) {
                    for (const error of data.errors) {
                        toastError(error)
                    }
                }
            })
    }
</script>

<form on:submit|preventDefault>
    <div class="login-header">
        <h1 class="text-center font-bold text-4xl">Logowanie</h1>
        <h2 class="text-center font-normal text-lg mt-3">
            Zaloguj się, aby korzystać z pełnych możliwości serwisu
        </h2>
    </div>

    <input
        class="input mt-2"
        bind:value={fields.username}
        type="text"
        placeholder="Nazwa użytkownika"
    />

    <input
        class="input mt-2"
        bind:value={fields.password}
        type="password"
        placeholder="Hasło"
    />

    <AnimatedButton
        class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4 mt-4"
        on:click={handleLogin}
    >
        <div class="text">Zaloguj się</div>
    </AnimatedButton>

    <div class="mt-3 flex justify-between">
        <button class="login-text-button" on:click={rotateCard}>
            Zarejestruj się
        </button>

        <a class="login-text-button" href="/"> Zapomniałeś hasła? </a>
    </div>
</form>

<style>
    .text {
        mix-blend-mode: difference;
    }

    .login-header {
        @apply mb-9;
    }

    .login-text-button {
        @apply font-bold text-sm text-gray-800 focus:outline-none;
    }
</style>
