<script>
  import Resume from "./Resume.svelte";
  import Header from "./Header.svelte";
  import AboutMe from "../AboutMe.svelte";
  import Contact from "./Contact.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home page for my personal website." />
</svelte:head>

<Header />
<div class="bg-black grid grid-cols-2 place-content-center place-items-center">
  <img
    src="https://media.licdn.com/dms/image/D4E03AQF0wDWWP0Werw/profile-displayphoto-shrink_800_800/0/1685142069747?e=1699488000&v=beta&t=a48fYQDpSerkKYMrqzrDTSgEDENikv4ueEMe8Byua4g"
    class="scale-75 border-8 shadow-inner"
    alt="Headshot of Nicholas Gitman"
  />
  <h2 class="px-20 text-5xl pt-5 text-white font-black">
    I'm an Information Systems student at Stony Brook University. I am an
    aspiring software engineer, and I am interested in working in the financial
    services industry.
  </h2>
</div>
<div class="px-10 text-slate-600">
  <div class="pt-10">
    <h3 class="text-3xl font-black border-solid">
      Note! This website is still a WIP! I am planning on adding more features
      in the future and improving the functionality of this site. Some of the
      buttons don't work, but that will be fixed eventually!
    </h3>
  </div>
  <AboutMe />
  <Resume />
  <Contact />
</div>
