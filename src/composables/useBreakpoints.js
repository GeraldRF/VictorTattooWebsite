import {
    computed, ref, onMounted
} from "vue";

export default function useBreakpoints() {

    const width = ref(window.innerWidth);

    onMounted(() => {
        window.addEventListener('resize', () => {
            width.value = window.innerWidth;
        })
    });

    const sm = computed(() => {
        return width.value >= 640 && width.value < 768
    });
    const md = computed(() => {
        return width.value >= 768 && width.value < 1024
    });
    const lg = computed(() => {
        return width.value >= 1024 && width.value < 1280
    });
    const xl = computed(() => {
        return width.value >= 1280;
    });

    return {
        sm,
        md,
        lg,
        xl
    }

}