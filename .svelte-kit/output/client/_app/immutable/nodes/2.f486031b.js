import{s as M,n as p}from"../chunks/scheduler.e108d1fd.js";import{S as H,i as L,g as h,h as m,y as D,k as u,a as x,f as d,j as S,x as g,z as R,m as q,s as w,n as J,c as $,r as T,u as A,v as E,d as C,t as P,w as B,A as U}from"../chunks/index.62c37e82.js";function j(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const Y=!0,ct=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y},Symbol.toStringTag,{value:"Module"}));function F(r){let t,l=`<h1 class="text-5xl text-slate-950">Resume</h1> <hr class="solid divide-slate-800"/> <h1 class="text-3xl pt-3">Education</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5">Stony Brook University</p> <p class="text-lg">Bachelor of Science in Information Systems</p> <p class="text-lg">University Scholars Honors</p> <p class="text-lg">GPA: 3.76</p></div> <div class="ml-auto"><p class="text-lg pt-5">Stony Brook, NY</p> <p class="text-lg">Expected May 2026</p></div></div> <h3 class="text-lg font-semibold pt-5">Relevant Coursework:</h3> <p class="text-lg">Data Structures, Discrete Mathematics, Survey of Probability and Statistics,
    Discrete Structures, Introduction to Object-Oriented Programming, Applied
    Linear Algebra</p> <h1 class="text-3xl pt-3">Projects</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="" target="_blank">ngitman.github.io</a></p> <p class="text-lg italic">Svelte, HTML, TailwindCSS</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Designed a personal porfolio website built in basic HTML using the
          Svelte framework styled with TailwindCSS.</li></ul></div> <div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="https://github.com/skqwid/DIABLO" target="_blank">DIABLO (Database-Influenced Automated Ban List of Offenders)</a></p> <p class="text-lg italic">Python, MongoDB</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Designed and built a chatbot for Discord- a popular communication
          platform- intended to prevent harmful users from joining public spaces
          using the Discord.PY API wrapper.</li> <li>Created a MongoDB database to store user IDs of harmful individuals
          and linked it to the Discord API to match user IDs.</li> <li>Wrote a public-use report system embedded into the Discord app using
          the Discord API that allowed users to feed information about potential
          harmful users to be manually determined by verified moderators</li></ul></div></div> <h1 class="text-3xl pt-3">Certifications</h1> <div class="text-slate-950 flex"><div><p class="text-lg font-semibold pt-5"><a class="text-lg font-semibold pt-5 hover:text-red" href="" target="_blank">Java Programming and Software Engineering Fundamentals Specialization</a></p> <p class="text-lg">Coursera, Expected September 2023</p> <p class="text-lg">Relevant skills: HTML, JavaScript, CSS, Java, Software Design</p></div></div> <p class="text-lg pt-10 italic font-semibold">Still not finished; looking for ways to automate this!</p>`;return{c(){t=h("div"),t.innerHTML=l,this.h()},l(s){t=m(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-vkmciy"&&(t.innerHTML=l),this.h()},h(){u(t,"id","resume"),u(t,"class","pt-10 text-slate-950")},m(s,c){x(s,t,c)},p,i:p,o:p,d(s){s&&d(t)}}}class Q extends H{constructor(t){super(),L(this,t,null,F,M,{})}}function z(r,t,l){const s=r.slice();return s[1]=t[l],s}function O(r){let t,l,s=r[1].name+"",c,a;return{c(){t=h("li"),l=h("a"),c=q(s),a=w(),this.h()},l(i){t=m(i,"LI",{class:!0});var n=S(t);l=m(n,"A",{href:!0,target:!0});var e=S(l);c=J(e,s),e.forEach(d),a=$(n),n.forEach(d),this.h()},h(){u(l,"href",r[1].target),u(l,"target",r[1].state),u(t,"class","hover:text-slate-300")},m(i,n){x(i,t,n),g(t,l),g(l,c),g(t,a)},p,d(i){i&&d(t)}}}function K(r){let t,l,s,c=j(r[0]),a=[];for(let i=0;i<c.length;i+=1)a[i]=O(z(r,c,i));return{c(){t=h("div"),l=h("nav"),s=h("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=m(i,"DIV",{class:!0});var n=S(t);l=m(n,"NAV",{});var e=S(l);s=m(e,"UL",{class:!0});var f=S(s);for(let I=0;I<a.length;I+=1)a[I].l(f);f.forEach(d),e.forEach(d),n.forEach(d),this.h()},h(){u(s,"class","flex flex-wrap flex-row space-x-10 text-2xl text-slate-200"),u(t,"class","relative hidden lg:flex items-center ml-auto")},m(i,n){x(i,t,n),g(t,l),g(l,s);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(s,null)},p(i,[n]){if(n&1){c=j(i[0]);let e;for(e=0;e<c.length;e+=1){const f=z(i,c,e);a[e]?a[e].p(f,n):(a[e]=O(f),a[e].c(),a[e].m(s,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:p,o:p,d(i){i&&d(t),R(a,i)}}}function X(r){return[[{name:"Home",target:"",state:""},{name:"About Me",target:"#aboutme",state:""},{name:"Resume",target:"#resume",state:""},{name:"GitHub",target:"https://github.com/ngitman",state:"_blank"},{name:"Contact",target:"#contact",state:""}]]}class Z extends H{constructor(t){super(),L(this,t,X,K,M,{})}}function tt(r){let t,l,s='<h1 class="text-6xl text-white">Nicholas Gitman</h1> <p class="text-3xl text-slate-300">Welcome to my personal website.</p>',c,a,i;return a=new Z({}),{c(){t=h("header"),l=h("div"),l.innerHTML=s,c=w(),T(a.$$.fragment),this.h()},l(n){t=m(n,"HEADER",{id:!0,class:!0});var e=S(t);l=m(e,"DIV",{"data-svelte-h":!0}),D(l)!=="svelte-8qnlv4"&&(l.innerHTML=s),c=$(e),A(a.$$.fragment,e),e.forEach(d),this.h()},h(){u(t,"id","header"),u(t,"class","mx-auto p-6 relative flex items-center px-10 bg-black")},m(n,e){x(n,t,e),g(t,l),g(t,c),E(a,t,null),i=!0},p,i(n){i||(C(a.$$.fragment,n),i=!0)},o(n){P(a.$$.fragment,n),i=!1},d(n){n&&d(t),B(a)}}}class et extends H{constructor(t){super(),L(this,t,null,tt,M,{})}}function st(r){let t,l=`<h1 class="text-5xl text-slate-950">About Me</h1> <p class="text-xl pt-5">My name is Nicholas Gitman. I was born in 2004 and was raised in Brooklyn,
    NY. I attended Stony Brook University for my undergraduate degree, majoring
    in Information Systems.</p> <h2 class="text-3xl text-slate-950 pt-10">Hobbies and Interests</h2> <p class="text-xl pt-5">I have a wide variety of hobbies and interests, but here are a few:</p> <ul class="list-disc px-10 pt-5 text-lg"><li>Chess</li> <li>Working out at the gym</li> <li>Playing tennis and pickleball</li> <li>Enhancing my knowledge of programming and learning new stuff about it
      every day</li> <li>Video games like Rainbow Six Siege</li> <li>Watching anime (my personal favorite (so far) is JoJo&#39;s Bizarre Adventure)</li></ul>`;return{c(){t=h("div"),t.innerHTML=l,this.h()},l(s){t=m(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-zu3gdr"&&(t.innerHTML=l),this.h()},h(){u(t,"id","aboutme"),u(t,"class","pt-10")},m(s,c){x(s,t,c)},p,i:p,o:p,d(s){s&&d(t)}}}class at extends H{constructor(t){super(),L(this,t,null,st,M,{})}}function lt(r){let t,l='<h1 class="text-5xl text-slate-950">Contact</h1> <hr class="solid divide-slate-800"/> <h1 class="text-4xl text-slate-950 pt-5">Social Links</h1> <div class="pt-10"><div class="flex place-items-center gap-10"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn logo" width="50" height="50"/> <p class="text-3xl font-bold text-blue hover:text-blue-500"><a target="_blank" href="https://www.linkedin.com/in/nicholas-gitman/">LinkedIn</a></p></div></div> <div class="pt-10"><div class="flex place-items-center gap-10"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" width="50" height="50"/> <p class="text-3xl font-bold text-blue hover:text-blue-500"><a target="_blank" href="https://github.com/ngitman/">GitHub</a></p></div></div>';return{c(){t=h("div"),t.innerHTML=l,this.h()},l(s){t=m(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1gqkm5p"&&(t.innerHTML=l),this.h()},h(){u(t,"id","contact"),u(t,"class","pt-10")},m(s,c){x(s,t,c)},p,i:p,o:p,d(s){s&&d(t)}}}class it extends H{constructor(t){super(),L(this,t,null,lt,M,{})}}function nt(r){let t,l,s,c,a,i=`<img src="https://media.licdn.com/dms/image/D4E03AQF0wDWWP0Werw/profile-displayphoto-shrink_800_800/0/1685142069747?e=1699488000&amp;v=beta&amp;t=a48fYQDpSerkKYMrqzrDTSgEDENikv4ueEMe8Byua4g" class="scale-75 border-8 shadow-inner" alt="Headshot of Nicholas Gitman"/> <h2 class="px-20 text-5xl pt-5 text-white font-black">I&#39;m an Information Systems student at Stony Brook University. I am an
    aspiring software engineer, and I am interested in working in the financial
    services industry.</h2>`,n,e,f,I=`<h3 class="text-3xl font-black border-solid">Note! This website is still a WIP! I am planning on adding more features
      in the future and improving the functionality of this site. Some of the
      buttons don&#39;t work, but that will be fixed eventually!</h3>`,N,k,G,_,W,y,V;return s=new et({}),k=new at({}),_=new Q({}),y=new it({}),{c(){t=h("meta"),l=w(),T(s.$$.fragment),c=w(),a=h("div"),a.innerHTML=i,n=w(),e=h("div"),f=h("div"),f.innerHTML=I,N=w(),T(k.$$.fragment),G=w(),T(_.$$.fragment),W=w(),T(y.$$.fragment),this.h()},l(o){const v=U("svelte-f2oxbm",document.head);t=m(v,"META",{name:!0,content:!0}),v.forEach(d),l=$(o),A(s.$$.fragment,o),c=$(o),a=m(o,"DIV",{class:!0,"data-svelte-h":!0}),D(a)!=="svelte-dpbfzk"&&(a.innerHTML=i),n=$(o),e=m(o,"DIV",{class:!0});var b=S(e);f=m(b,"DIV",{class:!0,"data-svelte-h":!0}),D(f)!=="svelte-1wuf05n"&&(f.innerHTML=I),N=$(b),A(k.$$.fragment,b),G=$(b),A(_.$$.fragment,b),W=$(b),A(y.$$.fragment,b),b.forEach(d),this.h()},h(){document.title="Home",u(t,"name","description"),u(t,"content","Home page for my personal website."),u(a,"class","bg-black grid grid-cols-2 place-content-center place-items-center"),u(f,"class","pt-10"),u(e,"class","px-10 text-slate-600")},m(o,v){g(document.head,t),x(o,l,v),E(s,o,v),x(o,c,v),x(o,a,v),x(o,n,v),x(o,e,v),g(e,f),g(e,N),E(k,e,null),g(e,G),E(_,e,null),g(e,W),E(y,e,null),V=!0},p,i(o){V||(C(s.$$.fragment,o),C(k.$$.fragment,o),C(_.$$.fragment,o),C(y.$$.fragment,o),V=!0)},o(o){P(s.$$.fragment,o),P(k.$$.fragment,o),P(_.$$.fragment,o),P(y.$$.fragment,o),V=!1},d(o){o&&(d(l),d(c),d(a),d(n),d(e)),d(t),B(s,o),B(k),B(_),B(y)}}}class dt extends H{constructor(t){super(),L(this,t,null,nt,M,{})}}export{dt as component,ct as universal};
