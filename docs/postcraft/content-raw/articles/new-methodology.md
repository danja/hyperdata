# Declarative-Imperative Development for the Age of AI

TODO write the paper!

tl;dr : for software projects, I'd strongly recommend repopack[^1]
Late to this thread, I was actually trying to find out if Claude has a limit on the number of Projects you can create (anyone?). Tip I must share before moving on...

I've found Claude Projects incredibly useful for not-huge (mostly coding) projects. I was using ChatGPT (and Cursor, and various free tools) but my funds are limited, and after a recent run around the block have settled on Claude Pro (and Codeium, and various free tools).

The Projects made a big difference to my productivity out of the box (well, after giving them custom system prompts), but I was still running into familiar issues around context length, also size of "project knowledge" attachments. A little breakthrough for me was discovering **repopack**. It's an open source nodejs-built utility which will crawl filesystem dirs and collate code into a single AI-friendly text file, stripping comments along the way if you like. The config is fairly basic, but it can do things like respect .gitignore, any similar custom additions etc.
The code I'm working on at the moment makes use of a few obscure libs that both OpenAI and Claude tended to hallucinate a lot over. But repopack allows me to add a couple of those of immediate interest. My main project at the moment as a whole (plus an essential lib) is over the limit. But I've been able to work around that by being selective, swapping out the "project knowledge" repopacks as I go along to focus on today's target.
A curious side effect is that it's made me much more diligent with Best Practices - favouring small, independent components and creating (with the help of AI) lots more tests than I would working alone.
Close to this is a **new methodology**  (to me at least - has it a name?), somewhere in between those ^^. My big project is a pipeliney thing which has open-ended use cases. The application functionality is defined declaratively (in RDF/Turtle), the pipeline only glued together at runtime (via a variant of dependency injection). But that gluing and runtime operation brings in a *lot* of (common) overhead. So I've begun making (with AI assistance) quick & dirty imperative-style runners for the specific applications. This gives me things that lie somewhere in between unit and (full) integration tests. It's been surprisingly useful. I'm confident the declarative bits are close to correct, so if the new single-purpose imperative runner works, there's a very good chance those components will work correctly flipped in the larger environment.   

I would have been very unlikely to go down this route otherwise, but it means I can significantly cut down the codebase an AI assistant has to consider, get it capable of much more of the work.   
[^1]: https://github.com/yamadashy/repopack

I asked Claude :

The approach you're describing doesn't have a specific, widely-recognized name in software development methodologies, but it shares elements with several existing practices and principles. Let's break down the key aspects of your approach and relate them to known methodologies:

1. Use of AI assistants (Claude, ChatGPT) for development
2. Employing projects and custom system prompts
3. Utilizing repopack for code collation and context management
4. Focusing on small, independent components
5. Increased emphasis on testing
6. Creating simplified, imperative-style runners for declarative systems
7. Balancing between unit and integration tests

This approach combines elements of:

1. Agile Development: Your focus on iterative development, adapting to AI limitations, and emphasis on testing aligns with Agile principles.

2. Extreme Programming (XP): The increased focus on testing and creating small, independent components is reminiscent of XP practices.

3. Test-Driven Development (TDD): Your approach to creating more tests with AI assistance reflects aspects of TDD.

4. Modular Programming: The emphasis on small, independent components aligns with modular programming principles.

5. AI-Augmented Development: Your use of AI tools throughout the development process is part of an emerging trend in software development.

6. Continuous Integration (CI): The practice of frequently integrating code changes and running tests is implied in your workflow.

While there isn't a specific name for this exact combination of practices, it could be described as "AI-Assisted Agile Development with Emphasis on Modularity and Testing" or perhaps "AI-Augmented Modular TDD."

The use of simplified runners for declarative systems is an interesting approach that doesn't have a widely-used name, but it's conceptually similar to creating "simulators" or "mock environments" for complex systems. This practice allows for faster iteration and testing of components in isolation.

If you're looking to name this approach, you might consider something like "Declarative-Imperative Hybrid Testing" or "Selective Context AI-Assisted Development" to capture the essence of your methodology.

It's worth noting that as AI-assisted development evolves, we may see more formal methodologies emerge that incorporate these practices. Your approach seems to be at the forefront of adapting existing best practices to work effectively with AI assistance in software development.
