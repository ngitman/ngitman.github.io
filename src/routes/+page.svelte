<script>
  import Resume from "../Resume.svelte";
  import Header from "./Header.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home page for my personal website." />
</svelte:head>

<Header />
<div class="px-10 text-slate-600">
  <div class="box-border pt-10">
    <h2 class="text-3xl">
      I'm an Information Systems student at Stony Brook University. I am an
      aspiring software engineer, and I am interested in working in the
      financial services industry.
    </h2>
  </div>
  <div class="pt-10">
    <h1 class="text-5xl text-slate-950">About Me</h1>
    <p class="text-xl pt-5">
      My name is Nicholas Gitman. I was born in Staten Island, NY on September
      21, 2004 and was raised in Brooklyn, NY. I attended James Madison High
      School and later Stony Brook University for my undergraduate degree. I
      entered undecided, but later switched to Information Systems in hopes of
      later changing my major to Computer Science with a double major with
      Applied Mathematics and Statistics.
    </p>
    <h2 class="text-3xl text-slate-950 pt-10">Hobbies and Interests</h2>
    <p class="text-xl pt-5">
      I have a wide variety of hobbies and interests, but here are a few:
    </p>
    <ul class="list-disc px-10 pt-5 text-lg">
      <li>Chess</li>
      <li>Working out at the gym</li>
      <li>Playing tennis and pickleball</li>
      <li>
        Enhancing my knowledge of programming and learning new stuff about it
        every day
      </li>
      <li>Video games like Rainbow Six Siege</li>
      <li>
        Watching anime (my personal favorite (so far) is JoJo's Bizarre
        Adventure)
      </li>
    </ul>
  </div>
  <Resume />
</div>
