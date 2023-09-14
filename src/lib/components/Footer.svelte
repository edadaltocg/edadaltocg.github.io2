<script>
  import Social from './Social.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  const date = new Date();
</script>

<footer class="footer bg-base-200 sm:flex sm:justify-between footer-center p-4 text-base-content">
  <p>© {date.getFullYear()} Eduardo Dadalto</p>
  <div class="md:flex space-x-4 space-y-4 md:space-y-0">
    <ThemeToggle />
    <Social />
  </div>
</footer>
