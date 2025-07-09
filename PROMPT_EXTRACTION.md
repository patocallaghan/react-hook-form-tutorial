# Effective Prompts for Creating Tutorial Projects

This document extracts the key prompts used to successfully create the React Hook Form tutorial project. These prompts can be adapted for creating similar educational projects.

## Bootstrapping the project

```
pnpm create vite react-hook-form-tutorial --template react-ts
cd react-hook-form-tutorial
claude
```

## Key Prompts Used

### 1. Initial Project Setup
```
I want to learn how to use React Hook Form. I want you to do something for me.

* Install and configure tailwindcss
* Install zod@3
* Install react-hook-form
* Install react-router@7
* Install msw and fishery and configure them to set up mocks in development to mock apis
* Install vitest
* Come up with a curriculum for learning how to use React Hook form. From simple features to more complex ones. I want to learn how to use it properly. Output the lesson plan (about 10-12 lessons) to markdown. I want to approve the lesson plan before proceeding. Consider the items in the React Hook Form docs https://react-hook-form.com/docs
* Come up with route per lesson with an index page which links to all of the lessons
* Each lesson should have a static view which you will expect me to fill in the React Hook Form functionality to teach me the concepts and get to a working solution by the end
* create some vitest tests for each lesson so I can verify I am making each lesson working as expected
* In each lesson plan link out to the official docs
```

### 2. Architecture and Structure Guidance
```
Use bullet-proof for inspiration on how to structure the project https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md
```

### 3. Package Manager Preference
```
use pnpm instead
```

### 4. Documentation Organization
```
how about a markdown file per lesson in each lesson directory
```

### 5. Quality Control and Consistency
```
Put make sure they are done in a similar style to 1-4 for consistency
```

### 6. Content Completion
```
So looking at the lesson pages only 1-4 are filled out and the later ones have generic messages about coming soon. Please finish all of the lesson plans
```

### 7. Repository Management
```
create a public github repo under patocallaghan/react-hook-form-tutorial with gh cli and push this project
```

### 8. Documentation Updates
```
Update the main README with a description of the purpose of this repo, how to set it up and run it, and how to proceed through the exercises
```

### 9. Final Quality Check
```
once completed, commit the changes and push them up to github
```

## What Made These Prompts Effective

### ✅ **Successful Patterns:**

1. **Comprehensive Initial Request**: Provided complete list of requirements upfront
2. **Technology Specification**: Specified exact versions (zod@3, react-router@7)
3. **Architecture Reference**: Provided specific reference (bulletproof-react) for structure
4. **Quality Standards**: Emphasized consistency and completeness
5. **Documentation Focus**: Requested both inline docs and separate README files
6. **Progressive Development**: Allowed for iterative improvement and feedback
7. **Real-world Integration**: Included testing, mocking, and deployment requirements

### ✅ **Key Success Factors:**

- **Clear Learning Objective**: "I want to learn React Hook Form properly"
- **Specific Technology Stack**: Listed exact dependencies needed
- **Educational Structure**: Requested curriculum with progressive complexity
- **Hands-on Approach**: "static view which you will expect me to fill in"
- **Quality Assurance**: Requested tests for verification
- **Documentation Integration**: "link out to the official docs"
- **Repository Management**: Clear instructions for Git workflow

## Template for Similar Projects

Adapt this pattern for any technology/framework:

```
I want to learn [TECHNOLOGY/FRAMEWORK]. I want you to do something for me.

* Install and configure [list of dependencies with versions]
* Come up with a curriculum for learning [TECHNOLOGY]. From simple features to complex ones. 
  Output the lesson plan (about X lessons). Consider the items in the [OFFICIAL DOCS URL]
* Use [ARCHITECTURE REFERENCE] for inspiration on project structure
* Create route per lesson with index page linking to all lessons
* Each lesson should have static view with TODO sections for hands-on learning
* Create tests for each lesson for verification
* In each lesson link to official documentation
* Create comprehensive README with setup and usage instructions
* Create markdown file per lesson with detailed implementation guides
* Make sure lessons follow consistent style and structure
* Create public GitHub repo and push the project
```

## Follow-up Quality Control Prompts

Use these prompts to maintain quality throughout development:

- `"make sure they are done in a similar style to [examples] for consistency"`
- `"finish all of the lesson plans"` (when some are incomplete)
- `"commit the changes and push them up to github"`
- `"use [specific package manager] instead"`
- `"output to a markdown file"` (for documentation)

## Example Adaptations

### For Learning Vue.js:
```
I want to learn Vue.js. I want you to do something for me.

* Install and configure vue@3, pinia, vue-router@4, vitest
* Install tailwindcss and typescript
* Come up with a curriculum for learning Vue.js. From simple features to complex ones.
  Consider the items in the Vue.js docs https://vuejs.org/guide/
* Use [architecture reference] for project structure
* Create route per lesson with index page
* Each lesson should have static view with TODO sections for hands-on learning
* Create tests for each lesson
* Link to official Vue.js documentation in each lesson
```

### For Learning Next.js:
```
I want to learn Next.js. I want you to do something for me.

* Install and configure next@14, typescript, tailwindcss
* Install prisma, next-auth, zod for full-stack features
* Come up with a curriculum for learning Next.js. From basic pages to advanced features.
  Consider the items in the Next.js docs https://nextjs.org/docs
* Use App Router patterns for project structure
* Create lesson-based learning path with progressive complexity
* Each lesson should have starter code with TODO implementation areas
* Include testing with jest and testing-library
* Link to official Next.js documentation throughout
```

## Best Practices Demonstrated

1. **Start with Clear Intent**: Express learning goal clearly
2. **Be Specific**: List exact technologies and versions
3. **Provide References**: Include links to official docs and architecture examples
4. **Request Structure**: Ask for organized, progressive curriculum
5. **Emphasize Hands-on Learning**: Request TODO sections and implementation areas
6. **Include Quality Measures**: Ask for tests, consistency, documentation
7. **Plan for Sharing**: Request GitHub repository and comprehensive README
8. **Maintain Standards**: Use follow-up prompts for quality control

## Results Achieved

Using these prompts resulted in:
- ✅ Complete learning environment with 12 progressive lessons
- ✅ Modern tech stack properly configured
- ✅ Comprehensive documentation (13 README files)
- ✅ Working test suite (28 tests)
- ✅ Clean project structure following best practices
- ✅ Public GitHub repository ready for sharing
- ✅ Hands-on learning approach with TODO-driven implementation

## Tips for Success

1. **Front-load Requirements**: Include everything in initial prompt
2. **Reference Best Practices**: Point to established architecture patterns
3. **Emphasize Education**: Focus on learning outcomes, not just code
4. **Request Documentation**: Ask for both code comments and separate docs
5. **Plan for Quality**: Include testing and consistency requirements
6. **Think Long-term**: Request proper Git management and sharing setup
7. **Iterate Thoughtfully**: Use specific follow-up prompts for improvements

This prompt pattern can be adapted for any technology stack or learning objective to create comprehensive, hands-on tutorial projects.