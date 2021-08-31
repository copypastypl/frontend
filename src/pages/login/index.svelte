<script>
    import LoginCard from './_login.svelte'
    import RegisterCard from './_register.svelte'

    let showFrontSideForm = false
    let showFrontSide = true

    const rotateCard = () => {
        showFrontSideForm = !showFrontSideForm

        setTimeout(() => {
            showFrontSide = !showFrontSide
        }, 180)
    }
</script>

<div class="h-screen w-full flex justify-center items-center">
    <div class="login-box" class:rotated={showFrontSideForm}>
        {#if showFrontSide}
            <div class="card-front">
                <LoginCard on:rotateCard={rotateCard} />
            </div>
        {:else}
            <div class="card-back">
                <RegisterCard on:rotateCard={rotateCard} />
            </div>
        {/if}
    </div>
</div>

<style>
    .login-box {
        @apply bg-login-box w-96 h-116 p-12 sm:shadow-2xl sm:border transition duration-500 ease-in-out;
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .rotated {
        transform: rotateY(180deg);
    }

    .card-back {
        transform: rotateY(180deg);
    }
</style>
