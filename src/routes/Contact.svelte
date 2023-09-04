<script>
  import ContactBox from "../ContactBox.svelte";
</script>

<div id="contact" class="pt-10">
  <h1 class="text-5xl text-slate-950">Contact</h1>
  <hr class="solid divide-slate-800" />
  <h1 class="text-4xl text-slate-950 pt-5">Social Links</h1>

  <div class="pt-10">
    <div class="flex place-items-center gap-10">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn logo"
        width="50"
        height="50"
      />
      <p class="text-3xl font-bold text-blue hover:text-blue-500">
        <a target="_blank" href="https://www.linkedin.com/in/nicholas-gitman/"
          >LinkedIn</a
        >
      </p>
    </div>
  </div>

  <div class="pt-10">
    <div class="flex place-items-center gap-10">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="GitHub logo"
        width="50"
        height="50"
      />
      <p class="text-3xl font-bold text-blue hover:text-blue-500">
        <a target="_blank" href="https://github.com/ngitman/">GitHub</a>
      </p>
    </div>
  </div>
</div>
