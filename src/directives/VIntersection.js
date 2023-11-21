export default {
    name: 'intersection',
    mounted(el, binding) {
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value();
            }
        };
        const observer = new IntersectionObserver(callback, {
            rootMargin: '8px',
            threshold: 1.0
        });
        observer.observe(el);
    }
};
