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
        if (width.value >= 640 && width.value < 768) return true;
        else return false;
    });
    const md = computed(() => {
        if (width.value >= 768 && width.value < 1024) return true;
        else return false;
    });
    const lg = computed(() => {
        if (width.value >= 1024 && width.value < 1280) return true;
        else return false;
    });
    const xl = computed(() => {
        if (width.value >= 1280) return true;
        else return false;
    });

    return {
        sm,
        md,
        lg,
        xl
    }

}