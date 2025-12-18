export default function smoothScrollContainer({
    container,
    target,
    duration = 1000,
}) {
    const start = container.scrollTop
    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()

    const offset =
        targetRect.top - containerRect.top
        - container.clientHeight / 2
        + target.clientHeight / 2

    const to = start + offset
    const change = to - start
    let startTime = null

    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    function animate(time) {
        if (!startTime) startTime = time
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)

        container.scrollTop =
            start + change * easeInOutCubic(progress)

        if (progress < 1) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}