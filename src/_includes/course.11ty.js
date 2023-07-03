/**
 * Default layout
 * Has main header with nav at the top
 */

const { html } = require("htm/preact");
const RawContent = require("./components/RawContent");
const { Nav, Section, Link } = require("./components/SidebarNav");

exports.data = {
  layout: "base",
  scripts: ["/assets/js/toggle-button.js"],
};

exports.render = ({ page: { url }, content }) => {
  return html`
  <div class="layout">
    <aside>
      <${Nav}>
        <${Link} url=${url} href="/course/introduction">Introduction</${Link}>
        <${Link} url=${url} href="https://www.foundersandcoders.com/code-of-conduct/" target="_blank" rel="noreferrer">Code of Conduct</${Link}>
        <${Section} title="Handbook" url=${url} subpath="course/handbook">
          <li><${Link} url=${url} href="/course/handbook/system-requirements/">System Requirements</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/installation/">Installation Guide</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/safeguarding/">Safeguarding</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/wellbeing/">Wellbeing</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/course-rules/">Course Rules</${Link}></li>
           <li><${Link} url=${url} href="/course/handbook/user-manuals/">User manuals</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/debugging/">Debugging</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/asking-for-help/">Asking for help</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/pair-programming/">Pair programming</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/spikes/">Tech Spikes</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/projects/">Projects</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/github-workflow/">GitHub Workflow</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/project-presentations/">Project Presentations</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/project-team/">Project Roles</${Link}></li>
           <li><${Link} url=${url} href="/course/handbook/role-circles/">Role circles</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/code-review/">Code review</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/retrospectives/">Retrospectives</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/mentor-guidance/">Mentoring guidance</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/mentor-roles/">What to expect of mentors</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/tech-for-better/">Tech for Better</${Link}></li>
        </${Section}>
        <${Section} title="Portfolio" url=${url} subpath="course/syllabus/portfolio">
          <li><${Link} url=${url} href="/course/syllabus/portfolio/hobby-page/project">Hobby page</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/portfolio/project-gallery/project">Project gallery</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/portfolio/movie-data/project">Movie data</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/portfolio/website/project">Website</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/portfolio/game/project">Game</${Link}></li>
        </${Section}>
        <${Section} title="Foundation" url=${url} subpath="course/syllabus/foundation">
          <li><${Link} url=${url} href="/course/syllabus/foundation/pre-course/schedule/">Pre-course</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/foundation/markup/schedule/">Markup</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/foundation/http/schedule/">HTTP</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/foundation/testing/schedule/">Testing</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/foundation/projects/schedule/">Projects</${Link}></li>
        </${Section}>
        <${Section} title="Developer" url=${url} subpath="course/syllabus/developer">
          <li value="0"><${Link} url=${url} href="/course/syllabus/developer/introduction/schedule">Introduction</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/server/schedule/">Server</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/database/schedule/">Database</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/authentication/schedule/">Authentication</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/server-side-app/schedule/">Server-side app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/client-side-app/schedule/">Client-side app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/full-stack-app/schedule/">Full-stack app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/in-house-design/schedule">Design Sprint</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/in-house-build-1/schedule">Build Sprint 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/in-house-build-2/schedule">Build Sprint 2</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/TFB-design/schedule">TFB Design Sprint</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/TFB-build-1/schedule">TFB Build Sprint 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/developer/projects/TFB-build-2/schedule">TFB Build Sprint 2</${Link}></li>
        </${Section}>
        <${Section} title="TfB" url=${url} subpath="course/syllabus/tfb">  
        <li><${Link} url=${url} href="/course/syllabus/tfb/week 1/introduction">Week 1: Introductions & Discovery Workshop</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 2/user-research">Week 2: User Research</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 3/analysis-definition">Week 3: Research Analysis & Definition Workshop</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 4/figma1">Week 4: Figma Prototype 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 5/figma2">Week 5: Figma Prototype 2</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 6/usability">Week 6: Usability testing</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 7/selection">Week 7: Product Pitches & Selection week</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 10/build1">Week 10: Build Week 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 11/build2">Week 11: Build Week 2</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/tfb/week 12/showcase">Week 12: Build Week 3</${Link}></li>
        </${Section}>
      </${Nav}>
    </aside>
    <main id="main">
      <${RawContent} class="flow">${content}</${RawContent}>
    </main>
  </div>
  `;
};
