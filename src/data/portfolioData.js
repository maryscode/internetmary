export const portfolioData = [
    {
        "name":"Rethink Bronchiectasis",
        "summary":"A responsive, interactive, content-rich website built with Gatsby and TailwindCSS.",
        "tech":"Gatsby, TailwindCSS",
        "features":"Responsive website featuring a video carousel, interactive form, extensive content engagement, and a customizable animated chart.",
        "challenges":"Develop a responsive, animated chart from scratch that accurately displays input values.",
        "fun":"Building the responsive animated chart to be easily editable. Seeing the delight on my fellow developers' faces when I handed off the project.",
        "thumbSrc": require("../images/rethink-desktop.png"),
        "mobileSrc":require("../images/rethink-mobile.png"),
        "url":"https://gatsby-animated-charts.vercel.app/"
    },
    {
        "name":"Unseen Rituals",
        "summary":"A socially engaging page where visitors can submit prompts about their rituals for a separate AI software to generate images. The feed is coded to release a new image weekly.",
        "tech":"Gatsby, TailwindCSS, Styled Components ",
        "features":"Time-released images, overlapping AI-generated artwork with superimposed notes, a form that allows for going back and updating fields.",
        "challenges":"Precise CSS image positioning, responsive resizing, and managing z-index issues for share icons and forms.",
        "fun":"Figuring out the z-indexes was like solving a fun puzzle. Also, it was fun considering all possible form scenarios when the form's back button is enabled.",
        "thumbSrc": require("../images/rituals-desktop.png"),
        "mobileSrc": require("../images/rituals-mobile.png"),
        "url":"https://gatsby-rituals.vercel.app/unseen-rituals/"
    },
    {
        "name":"Trace-My-Name PDF Generator",
        "summary":"Most letter tracing worksheets feature ugly tracing fonts and dated cartoons so I created my own and turned it into a PDF generator.",
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
        "features":"Multiple choice, true/false answers, a timer and modal that stops the quiz, a form, and a summary of all responses with the correct answers highlighted.",
        "challenges":"This project was my first foray into React, and it required coordinating multiple complex components under tight deadlines. I had to quickly learn React in just two weeks to meet the demands of the project.",
        "fun":"This project was especially exciting because it was my first opportunity to truly dive into React and explore its capabilities. I had been eagerly anticipating working with React, and it didn’t disappoint—it was a lot of fun to see firsthand how powerful and versatile the framework is.",
        "thumbSrc": require("../images/quiz-tablet.png"),
        "ipad": true,
        "url":"https://reactquiz.staging-domain.com/"
    },

    {
        "name":"Clean Braille",
        "summary":"Clean Braille was a thought piece exploring hypothetical scenarios in the world of braille.",
        "tech":"HTML, JS, SCSS, animation",
        "features":"Scroll animation and smooth interactivity",
        "challenges":"I was provided with a static desktop design, and it was up to me to conceptualize, design, and implement all animations and interactive elements.",
        "fun":"Complete creative agency over all animation, scrolling, and logo behavior.",
        "thumbSrc": require("../images/cleanbraille.png"),
        "mobileSrc": require("../images/cleanbraille-mobile.png"),
        "url":"https://cleanbraille.staging-domain.com/"
    },
    {
        "name":"Suspect PMM Pinball",
        "summary":"Pinball website with gradient backgrounds and scroll animations.",
        "tech":"NextJS, Tailwind, Intersection Observer",
        "features":"Large, colorful graphics and scroll animation with Intersection Observer",
        "challenges":"Optimized image-heavy content to reduce load times, ensuring gradients and pinball flippers were perfectly aligned with the approved design. Additionally, I tackled responsive design issues that were overlooked in the prototyping phase, making critical adjustments during development.",
        "fun":"Getting the site and design aligned despite the responsive design holes. Playing with Intersection Observer Api to work with scroll animations. Exploring the display:grid css feature.",
        "thumbSrc": require("../images/pinball-desktop.png"),
        "mobileSrc": require("../images/pinball-mobile.png"),
        "url":"https://pinball-seven.vercel.app/"
    },
    {
        "name":"Summer Culinary",
        "summary":"A custom Graduate Profiles section built in Wordpress for a nation-wide summer culinary program.",
        "tech":"Wordpress, PHP, Javascript, HTML, SCSS",
        "features":"Custom WordPress post type with menu and index page, offering various options and designed to be user-friendly for non-technical admins.",
        "challenges":"The post type needed to be handed off to a non-technical admin, so a simple, yet robust design was essential to ensure the site couldn't break during edits. Since content length, image sizes, and locations were not predefined, these factors had to be accounted for in the development.",
        "fun":"Collaborating with a new designer and reading the graduate students' actual content was heartwarming.",
        "thumbSrc": require("../images/summerculinary-desktop.png"),
        "mobileSrc": require("../images/summerculinary-mobile.png"),
        "url":"https://summerculinary.com/graduate-snapshot/"
    }
]