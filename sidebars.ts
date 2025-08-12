/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [ 
    'getting-started/syntaxes/introduction',
    {
      type: 'category',
      label: 'Syntax Guide',
      link: {
        type: 'generated-index',
        description: "Learn Crabby's Syntax!",
      },
      items: [
        'getting-started/syntaxes/variables',
        'getting-started/syntaxes/constants',
        'getting-started/syntaxes/arrays',
        'getting-started/syntaxes/functions',
        'getting-started/syntaxes/publickeyword',
        'getting-started/syntaxes/privatekeyword',
        'getting-started/syntaxes/docstrings',
        'getting-started/syntaxes/ifelse',
        'getting-started/syntaxes/loops',
        'getting-started/syntaxes/classes',
        'getting-started/syntaxes/structs',
        'getting-started/syntaxes/enums',
        'getting-started/syntaxes/matching',
        'getting-started/syntaxes/lambdas',
        'getting-started/syntaxes/decorators',
        'getting-started/syntaxes/macros'
      ],
    },
    'getting-started/use-cases',
  ],

};

export default sidebars;
