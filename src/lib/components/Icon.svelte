<script lang="ts">
  export let href: string;
</script>

<a class="btn btn-circle flex place-items-center justify-center" {href}>
  <slot />
</a>
