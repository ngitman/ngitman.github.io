import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="resume" class="pt-10 text-slate-950" data-svelte-h="svelte-vkmciy"><h1 class="text-5xl text-slate-950">Resume</h1> <hr class="solid divide-slate-800"> <h1 class="text-3xl pt-3">Education</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5">Stony Brook University</p> <p class="text-lg">Bachelor of Science in Information Systems</p> <p class="text-lg">University Scholars Honors</p> <p class="text-lg">GPA: 3.76</p></div> <div class="ml-auto"><p class="text-lg pt-5">Stony Brook, NY</p> <p class="text-lg">Expected May 2026</p></div></div> <h3 class="text-lg font-semibold pt-5">Relevant Coursework:</h3> <p class="text-lg">Data Structures, Discrete Mathematics, Survey of Probability and Statistics,
    Discrete Structures, Introduction to Object-Oriented Programming, Applied
    Linear Algebra</p> <h1 class="text-3xl pt-3">Projects</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="" target="_blank">ngitman.github.io</a></p> <p class="text-lg italic">Svelte, HTML, TailwindCSS</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Designed a personal porfolio website built in basic HTML using the
          Svelte framework styled with TailwindCSS.</li></ul></div> <div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="https://github.com/skqwid/DIABLO" target="_blank">DIABLO (Database-Influenced Automated Ban List of Offenders)</a></p> <p class="text-lg italic">Python, MongoDB</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Designed and built a chatbot for Discord- a popular communication
          platform- intended to prevent harmful users from joining public spaces
          using the Discord.PY API wrapper.</li> <li>Created a MongoDB database to store user IDs of harmful individuals
          and linked it to the Discord API to match user IDs.</li> <li>Wrote a public-use report system embedded into the Discord app using
          the Discord API that allowed users to feed information about potential
          harmful users to be manually determined by verified moderators</li></ul></div></div> <h1 class="text-3xl pt-3">Certifications</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="" target="_blank">Java Programming and Software Engineering Fundamentals Specialization</a></p> <p class="text-lg">Coursera, Expected September 2023</p> <p class="text-lg">Relevant skills: HTML, JavaScript, CSS, Java, Software Design</p></div></div> <p class="text-lg pt-10 italic font-semibold">Still not finished; looking for ways to automate this!</p></div>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "Home", target: "", state: "" },
    {
      name: "About Me",
      target: "#aboutme",
      state: ""
    },
    {
      name: "Resume",
      target: "#resume",
      state: ""
    },
    {
      name: "GitHub",
      target: "https://github.com/ngitman",
      state: "_blank"
    },
    {
      name: "Contact",
      target: "#contact",
      state: ""
    }
  ];
  return `<div class="relative hidden lg:flex items-center ml-auto"><nav><ul class="flex flex-wrap flex-row space-x-10 text-2xl text-slate-200">${each(links, (link) => {
    return `<li class="hover:text-slate-300"><a${add_attribute("href", link.target, 0)}${add_attribute("target", link.state, 0)}>${escape(link.name)}</a> </li>`;
  })}</ul></nav></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header id="header" class="mx-auto p-6 relative flex items-center px-10 bg-black"><div data-svelte-h="svelte-8qnlv4"><h1 class="text-6xl text-white">Nicholas Gitman</h1> <p class="text-3xl text-slate-300">Welcome to my personal website.</p></div> ${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}</header>`;
});
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="aboutme" class="pt-10" data-svelte-h="svelte-zu3gdr"><h1 class="text-5xl text-slate-950">About Me</h1> <p class="text-xl pt-5">My name is Nicholas Gitman. I was born in 2004 and was raised in Brooklyn,
    NY. I attended Stony Brook University for my undergraduate degree, majoring
    in Information Systems.</p> <h2 class="text-3xl text-slate-950 pt-10">Hobbies and Interests</h2> <p class="text-xl pt-5">I have a wide variety of hobbies and interests, but here are a few:</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Chess</li> <li>Working out at the gym</li> <li>Playing tennis and pickleball</li> <li>Enhancing my knowledge of programming and learning new stuff about it
      every day</li> <li>Video games like Rainbow Six Siege</li> <li>Watching anime (my personal favorite (so far) is JoJo&#39;s Bizarre Adventure)</li></ul></div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="contact" class="pt-10" data-svelte-h="svelte-1gqkm5p"><h1 class="text-5xl text-slate-950">Contact</h1> <hr class="solid divide-slate-800"> <h1 class="text-4xl text-slate-950 pt-5">Social Links</h1> <div class="pt-10"><div class="flex place-items-center gap-10"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn logo" width="50" height="50"> <p class="text-3xl font-bold text-blue hover:text-blue-500"><a target="_blank" href="https://www.linkedin.com/in/nicholas-gitman/">LinkedIn</a></p></div></div> <div class="pt-10"><div class="flex place-items-center gap-10"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" width="50" height="50"> <p class="text-3xl font-bold text-blue hover:text-blue-500"><a target="_blank" href="https://github.com/ngitman/">GitHub</a></p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-f2oxbm_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Home page for my personal website."><!-- HEAD_svelte-f2oxbm_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="bg-black grid grid-cols-2 place-content-center place-items-center" data-svelte-h="svelte-dpbfzk"><img src="https://media.licdn.com/dms/image/D4E03AQF0wDWWP0Werw/profile-displayphoto-shrink_800_800/0/1685142069747?e=1699488000&v=beta&t=a48fYQDpSerkKYMrqzrDTSgEDENikv4ueEMe8Byua4g" class="scale-75 border-8 shadow-inner" alt="Headshot of Nicholas Gitman"> <h2 class="px-20 text-5xl pt-5 text-white font-black">I&#39;m an Information Systems student at Stony Brook University. I am an
    aspiring software engineer, and I am interested in working in the financial
    services industry.</h2></div> <div class="px-10 text-slate-600"><div class="pt-10" data-svelte-h="svelte-1wuf05n"><h3 class="text-3xl font-black border-solid">Note! This website is still a WIP! I am planning on adding more features
      in the future and improving the functionality of this site. Some of the
      buttons don&#39;t work, but that will be fixed eventually!</h3></div> ${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})} ${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
