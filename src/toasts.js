import { toast } from '@zerodevx/svelte-toast'

export const toastError = (message) => {
    toast.push(message, {
        theme: {
            '--toastBackground': '#F56565',
            '--toastProgressBackground': '#F56565'
        },
    })
}

export const toastSuccess = (message) => {
    toast.push(message, {
        theme: {
            '--toastBackground': '#48BB78',
            '--toastProgressBackground': '#48BB78'
        },
    })
}