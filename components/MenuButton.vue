<template>

    <button @click="openMenu()" class="text-[12px] group transition-all duration-300 flex items-center space-x-5 text-gray-800">
        <span>Menu</span>
        <div>
            <svg height="7" width="15">
                <line x1="0" y1="0" x2="15" y2="0"
                    :class="'stroke-gray-800' + (appStore.isMenuOpen ? '  translate-y-[4px]' : '')"
                    class="stroke-gray-800 stroke-[2px] transform-gpu transition-all duration-300 group-hover:translate-y-[4px] ">
                </line>
                <line x1="0" y1="7" x2="15" y2="7"
                    :class="'stroke-gray-800' + (appStore.isMenuOpen ? ' -translate-y-[3px] ' : '')"
                    class="stroke-gray-800 stroke-[2px] transform-gpu transition-all duration-300 group-hover:-translate-y-[3px]">
                </line>
            </svg>
        </div>
    </button>

</template>

<script setup>

    // import { useAppStore } from '@/stores/appStore';
    // const appStore = useAppStore();

    const openMenu = () => {
        appStore.isMenuOpen = true;
    }

</script>