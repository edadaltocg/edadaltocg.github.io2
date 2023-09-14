<script lang="ts">
  import { onMount } from 'svelte';

  let current_theme = 'system';

  onMount(() => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('theme');
      if (theme !== null) {
        document.documentElement.setAttribute('data-theme', theme);
        current_theme = theme;
      } else {
        if (systemPreference.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
          current_theme = 'dark';
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          current_theme = 'light';
        }
      }
    }
  });

  const set_theme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    current_theme = theme;
    const one_year = 60 * 60 * 24 * 365;
    window.localStorage.setItem('theme', current_theme);
    document.cookie = `theme=${current_theme}; max-age=${one_year}; path=/; SameSite=Lax`;
    document.documentElement.setAttribute('data-theme', current_theme);
  };

  function switch_theme(event: Event) {
    const select = event.target as HTMLSelectElement;
    console.log(select);
    if (select.checked) {
      current_theme = 'dark';
    } else {
      current_theme = 'light';
    }
    set_theme(current_theme);
  }
</script>

<!-- Moon icon -->
<div class="flex space-x-1">
  <svg
    class="feather feather-sun"
    fill="none"
    height="24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    ><circle cx="12" cy="12" r="5" /><line x1="12" x2="12" y1="1" y2="3" /><line
      x1="12"
      x2="12"
      y1="21"
      y2="23"
    /><line x1="4.22" x2="5.64" y1="4.22" y2="5.64" /><line
      x1="18.36"
      x2="19.78"
      y1="18.36"
      y2="19.78"
    /><line x1="1" x2="3" y1="12" y2="12" /><line x1="21" x2="23" y1="12" y2="12" /><line
      x1="4.22"
      x2="5.64"
      y1="19.78"
      y2="18.36"
    /><line x1="18.36" x2="19.78" y1="5.64" y2="4.22" /></svg
  >

  <input
    type="checkbox"
    id="theme-toggle"
    class="toggle"
    checked={current_theme === 'dark'}
    on:change={switch_theme}
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
  >
</div>
