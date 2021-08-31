<script>
    import AnimatedButton from '../../components/AnimatedButton.svelte'
    import { createEventDispatcher } from 'svelte'
    import * as yup from 'yup'
    import { toastError, toastSuccess } from '../../toasts'

    const dispatch = createEventDispatcher()

    const rotateCard = () => {
        dispatch('rotateCard')
    }

    const fields = {
        username: '',
        email: '',
        password: '',
        repeatedPassword: ''
    }

    const validator = yup.object().shape({
        repeatedPassword: yup
            .string()
            .required('Podane hasła nie są identyczne')
            .oneOf(
                [yup.ref('password'), null],
                'Podane hasła nie są identyczne'
            ),
        password: yup.string().required('Podaj poprawne hasło'),
        email: yup.string().required('Podaj poprawny adres email').email(),
        username: yup.string().required('Podaj poprawną nazwę użytkownika')
    })

    const handleRegister = () => {
        validator
            .validate(fields)
            .then(() => {
                fetch('https://testy.copypasty.pl/users/create/', {
                    method: 'POST',
                    body: JSON.stringify(fields),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.username && data.username[0] === 'A user with that username already exists.') {
                            toastError('Użytkownik z tą nazwą już istnieje')
                            return
                        }

                        if (data.email && data.email[0] === 'user with this email address already exists.') {
                            toastError('Użytkownik z tym adresem email już istnieje')
                            return
                        }

                        toastSuccess('Zarejestrowano pomyślnie!')
                        rotateCard()
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
        <h1 class="text-center font-bold text-4xl">Rejestracja</h1>
    </div>

    <input
        class="input mt-2"
        type="text"
        placeholder="Nazwa użytkownika"
        bind:value={fields.username}
    />

    <input
        class="input mt-2"
        type="email"
        placeholder="Email"
        bind:value={fields.email}
    />

    <input
        class="input mt-2"
        type="password"
        placeholder="Hasło"
        bind:value={fields.password}
    />

    <input
        class="input mt-2"
        type="password"
        placeholder="Powtórzone hasło"
        bind:value={fields.repeatedPassword}
    />

    <AnimatedButton
        class="w-full m-0 bg-login-button text-white font-semibold border-black border py-2 px-4 mt-4"
        on:click={handleRegister}
    >
        <div class="text">Zarejestruj się</div>
    </AnimatedButton>

    <div class="mt-3 flex justify-between">
        <button class="login-text-button" on:click={rotateCard}>
            Zaloguj się
        </button>
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
