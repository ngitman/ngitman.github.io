<script>
  const links = [
    { name: "Home", target: "index.html", state: "" },
    { name: "About Me", target: "", state: "" },
    { name: "Resume", target: "", state: "" },
    { name: "GitHub", target: "https://github.com/ngitman", state: "_blank" },
    { name: "Contact", target: "contact.html", state: "" },
  ];
</script>

<div class="relative hidden lg:flex items-center ml-auto">
  <nav>
    <ul class="flex flex-wrap flex-row space-x-10 text-2xl text-slate-500">
      {#each links as link}
        <li class="hover:text-slate-800">
          <a href={link.target} target={link.state}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
