export const wiggle = {
    transition: { ease: "easeInOut", repeatDelay: 0.7, duration: 0.8, repeat: 2 },
    rotate: [0, 4, -8, 8, -8, 8, -4, 0],
    scale: [1, 1.05, 1.1, 1.05, 1],
};

export const shockwave = (scale) => ({
    transition: { ease: "easeOut", times: [0, 0.4, 0.5, 0.55, 0.6, 1], repeatDelay: 0.7, duration: 1 },
    scale: [1, scale, 0.98, 1.02, 0.98, 1],
});
