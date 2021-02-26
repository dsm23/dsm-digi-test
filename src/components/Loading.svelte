<svg
  class="fullscreen-spinner load-spin"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    fill="#C4B6FF"
    d="M12 18.5a1 1 0 011 1V22a1 1 0 11-2 0v-2.5a1 1 0 011-1z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#7D55FF"
    d="M12 1a1 1 0 011 1v2.5a1 1 0 11-2 0V2a1 1 0 011-1z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#C4B6FF"
    d="M15.238 17.625a1 1 0 011.367.363l1.26 2.17a1 1 0 01-1.73 1.004l-1.26-2.17a1 1 0 01.363-1.367z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#7D55FF"
    d="M6.498 2.475a1 1 0 011.367.363l1.26 2.17a1 1 0 11-1.73 1.004l-1.26-2.17a1 1 0 01.363-1.367z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#C4B6FF"
    d="M17.625 15.238a1 1 0 011.367-.363l2.17 1.26a1 1 0 11-1.004 1.73l-2.17-1.26a1 1 0 01-.363-1.367z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#7D55FF"
    d="M2.475 6.498a1 1 0 011.367-.363l2.17 1.26a1 1 0 01-1.004 1.73l-2.17-1.26a1 1 0 01-.363-1.367z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#C4B6FF"
    d="M18.5 12a1 1 0 011-1H22a1 1 0 110 2h-2.5a1 1 0 01-1-1z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#7D55FF"
    d="M1 12a1 1 0 011-1h2.5a1 1 0 110 2H2a1 1 0 01-1-1z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
  <path
    fill="#C4B6FF"
    d="M21.525 6.498a1 1 0 01-.363 1.367l-2.17 1.26a1 1 0 01-1.004-1.73l2.17-1.26a1 1 0 011.367.363zM6.375 15.238a1 1 0 01-.363 1.367l-2.17 1.26a1 1 0 01-1.004-1.73l2.17-1.26a1 1 0 011.367.363zM17.502 2.475a1 1 0 01.363 1.367l-1.26 2.17a1 1 0 01-1.73-1.004l1.26-2.17a1 1 0 011.367-.363zM8.762 17.625a1 1 0 01.363 1.367l-1.26 2.17a1 1 0 01-1.73-1.004l1.26-2.17a1 1 0 011.367-.363z"
    clip-rule="evenodd"
    fill-rule="evenodd"
  />
</svg>

<style>
  .load-spin {
    animation: loading 1s steps(12) infinite;
  }

  .fullscreen-spinner {
    height: 100vh;
    width: 100%;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
