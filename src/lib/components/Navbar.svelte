<script lang="ts">
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal p-0">
      <li tabindex="0">
        <a href="/about"> About </a>
        <a href="/publications"> Publications </a>
        <a href="/projects"> Projects </a>
        <a href="/cv.pdf"> CV </a>
        <a href="/contact"> Contact </a>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="btn btn-outline md:hidden"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
          ><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
          /></svg
        ></button
      >
      <ul tabindex="0" class="dropdown-content menu p-4 mx-auto shadow bg-base-200  w-screen">
        <li tabindex="0">
          <a href="/about"> About </a>
          <a href="/publications"> Publications </a>
          <a href="/projects"> Projects </a>
          <a href="/cv.pdf"> CV </a>
          <a href="/contact"> Contact </a>
        </li>
      </ul>
    </div>
  </div>
</div>
