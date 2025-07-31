import { ref } from 'vue';

const activeDropdown = ref<string | null>(null);

export const useDropdownState = () => {
    const setActiveDropdown = (id: string | null) => {
        activeDropdown.value = id;
    };

    const closeAllDropdowns = () => {
        activeDropdown.value = null;
    };

    return {
        activeDropdown,
        setActiveDropdown,
        closeAllDropdowns
    };
};