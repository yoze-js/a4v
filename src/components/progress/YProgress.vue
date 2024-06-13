<template>
  <NEl id="y-progress-wrapper" />
</template>

<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1031;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
}

/* Fancy blur effect */
#nprogress .peg {
  position: absolute;
  right: 0;
  display: block;
  width: 100px;
  height: 100%;
  box-shadow:
    0 0 10px var(--primary-color),
    0 0 5px var(--primary-color);
  transform: rotate(3deg) translate(0, -4px);
  opacity: 1;
}

.nprogress-custom-parent {
  overflow: hidden;

  /* position: relative; */
}

.nprogress-custom-parent .nprogress {
  position: absolute;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
