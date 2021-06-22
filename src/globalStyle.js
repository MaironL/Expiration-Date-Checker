import { createGlobalStyle } from 'styled-components';
import animatedShape from './Assets/animatedShape.svg';

export const GlobalStyle = createGlobalStyle`
:root {
/*
* =============== 
* Variables
* ===============
*/

  /* dark shades of primary color*/
  --clr-primary-1: hsl(225, 36%, 4%);
  --clr-primary-2: hsl(225, 36%, 9%);
  --clr-primary-3: hsl(225, 35%, 13%);
  --clr-primary-4: 	hsl(225, 36%, 18%);
  /* primary/main color */
  --clr-primary-5: hsl(225, 36%, 22%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(225, 17%, 38%);
  --clr-primary-7: hsl(225, 10%, 53%);
  --clr-primary-8: hsl(225, 10%, 69%);
  --clr-primary-9: 	hsl(225, 10%, 84%);
  --clr-primary-10: hsl(225, 10%, 96%);
  /* darkest grey */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-black: #222;

  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  --shadow-click: 0 0 8px #000000 inset;

}

/*
* =============== 
* Global Styles
* ===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
} 

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

@media screen and (min-width: 280px) {
    :root {
        font-size: calc(14px + 8 * ((100vw - 280px) / 1640));
    }
    p {
        line-height: calc(19.6px + 11.2 * ((100vw - 280px) / 1640));
    }
}
@media screen and (min-width: 900px) {
    body {
      font-size: 17.0244px
    }

    p {
      line-height: 23.8341px;
    }
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

/*
* ==================== 
* Custom Project Style
* ====================
*/

#root {
  height: 100%;
  overflow-y: scroll;

  background-image: url(${animatedShape});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
`;

export default GlobalStyle;
