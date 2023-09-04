<script>
  const links = [
    { name: "Home", target: "", state: "" },
    { name: "About Me", target: "#aboutme", state: "" },
    { name: "Resume", target: "#resume", state: "" },
    { name: "GitHub", target: "https://github.com/ngitman", state: "_blank" },
    { name: "Contact", target: "#contact", state: "" },
  ];
</script>

<div class="relative hidden lg:flex items-center ml-auto">
  <nav>
    <ul class="flex flex-wrap flex-row space-x-10 text-2xl text-slate-200">
      {#each links as link}
        <li class="hover:text-slate-300">
          <a href={link.target} target={link.state}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
