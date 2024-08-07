export const portfolioData = [
    {
        "name":"Rethink Bronchiectasis",
        "summary":"An responsive, interactive, content-rich website built with Gatsby and TailwindCSS.",
        "tech":"Gatsby, TailwindCSS",
        "features":"Responsive website featuring a video carousel, interactive form, extensive content engagement, and a customizable animated chart.",
        "challenges":"Develop a responsive, animated chart from scratch that accurately displays input values and supports updates as new data is added.",
        "fun":"Delighting the developer I handed the site off to when he realized how easy it was to update the data in the animated chart. ",
        "thumbSrc": require("../images/rethink-desktop.png"),
        "mobileSrc":require("../images/rethink-mobile.png"),
        "url":"https://www.rethinkbronchiectasis.com/"
    },
    {
        "name":"Unseen Rituals",
        "summary":"A socially engaging page where visitors can submit prompts about their rituals for a separate AI software to generate images. The feed is coded to release a new image weekly.",
        "tech":"Gatsby, TailwindCSS, Styled Components, Scroll ",
        "features":"Time-released images, responsive form carousel featuring overlapping AI-generated artwork with superimposed notes, a form that allows for going back and updating fields.",
        "challenges":"Precise CSS image positioning, responsive resizing, and managing z-index issues for share icons and forms.",
        "fun":"Figuring out the z-indexes was like solving a fun puzzle. Also, it was fun considering all possible form scenarios when the form's back button is enabled.",
        "thumbSrc": require("../images/rituals-desktop.png"),
        "mobileSrc": require("../images/rituals-mobile.png"),
        "url":"https://gatsby-rituals.vercel.app/unseen-rituals/"
    },
    {
        "name":"Trace-My-Name PDF Generator",
        "summary":"Most letter tracing worksheets feature ugly tracing fonts and dated cartoons so I created my own PDF generator with a cleaner font and cuter graphics.",
        "tech":"React, SCSS",
        "features":"Quickly generates a PDF once the user enters their name. The cartoon updates immediately based on the first letter typed.",
        "challenges":"Replicating the website preview in the PDF layout and selecting a font that aligns consistently with the letter template's center line.",
        "fun":"This was my first project where I combined coding with motherhood. My daughter actually uses and loves this. ",
        "thumbSrc": require("../images/practicetracing-desktop.png"),
        "mobileSrc": require("../images/practicetracing-mobile.png"),
        "url":"https://practicetracing.com/"
    },  
    {
        "name":"React Trivia Game",
        "summary":"A timed quiz built with React for iPad to be used at a convention. ",
        "tech":"React, SCSS, animations",
        "features":"Multiple choice, boolean, a timer that stops the quiz, a form, and a summary of all responses with the correct answers highlighted.",
        "challenges":"This was my first React app, and it involved many complex features.",
        "fun":"This was a tough first React app to build but very satisfying when I completed it.",
        "thumbSrc": require("../images/quiz-tablet.png"),
        "ipad": true,
        "url":"https://reactquiz.staging-domain.com/"
    },

    {
        "name":"Clean Braille",
        "summary":"Clean Braille was a thought piece exploring hypothetical scenarios in the world of braille.",
        "tech":"HTML, JS, SCSS, animation",
        "features":"Scroll animation",
        "challenges":"Only a flat PSD was handed off. Animations and interactivity was left for me to design and code.",
        "fun":"Complete creative agency over all animation, scrolling, and logo behavior.",
        "thumbSrc": require("../images/cleanbraille.png"),
        "mobileSrc": require("../images/cleanbraille-mobile.png"),
        "url":"https://cleanbraille.staging-domain.com/"
    },
    {
        "name":"Suspect PMM Pinball",
        "summary":"Pinball website with gradient backgrounds and scroll animations.",
        "tech":"NextJS, Tailwind, Intersection Observer",
        "features":"Scroll animation with Intersection Observer",
        "challenges":"Aligning the gradients and pinball flippers with the approved design, while addressing responsive design issues that were not fully considered in the prototyping process, requiring significant adjustments and decisions during development.",
        "fun":"Getting the site and design aligned despite the responsive design holes. Playing with Intersection Observer Api to work with scroll animations. Exploring the display:grid css feature.",
        "thumbSrc": require("../images/pinball-desktop.png"),
        "mobileSrc": require("../images/pinball-mobile.png"),
        "url":"https://pinball-seven.vercel.app/"
    },
    {
        "name":"Summer Culinary",
        "summary":"Build a custom Graduate Profiles section in Wordpress for a nation-wde summer culinary program.",
        "tech":"Wordpress, PHP, Javascript, HTML, JS, SCSS",
        "features":"Custom WordPress post type offering various options, designed to be user-friendly and robust for non-technical admins.",
        "challenges":"The post type needed to be handed off to a non-technical admin, so a robust design was essential to ensure the site remained stable. Since content length, image sizes, and placements were not defined during development, these factors had to be accounted for in the design.",
        "fun":"Collaborating with a new designer and reading the graduate students' actual content was heartwarming.",
        "thumbSrc": require("../images/summerculinary-desktop.png"),
        "mobileSrc": require("../images/summerculinary-mobile.png"),
        "url":"https://summerculinary.com/graduate-snapshot/"
    }
]