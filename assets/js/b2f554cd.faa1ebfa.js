"use strict";(self.webpackChunkhopage=self.webpackChunkhopage||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2844-09-09-start-here/index.md","title":"Start Here","description":"Blog Banner","date":"2844-09-09T00:00:00.000Z","formattedDate":"September 9, 2844","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.46,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"welcome","title":"Start Here","authors":["veo"],"tags":["hello","docusaurus"],"sidebar_position":1},"unlisted":false,"nextItem":{"title":"Why no total time?","permalink":"/blog/yt-playlist-time"}},"content":"![Blog Banner](./blog-banner.jpeg)\\n\\nGreetings, fellow tech enthusiast! You\'ve landed on the central hub where I, share my explorations, and deep-dives into the world of technology. \\n\\nThis blog is much more than a collection of articles; it\'s a digital diary chronicling my adventures in the vast expanse of technology. From the nitty-gritty of software development to the latest in tech innovation, and the occasional detour into personal projects \u2013 every post is a piece of the puzzle that is my tech journey.\\n\\n:::info\\nI invite you to look out for little jokes that I distribute throughout this BLOG such as the *date* of this article.\\n:::\\n\\n### Why I Write\\n\\n- **To Educate & Inform**: Whether breaking down complex topics or sharing what worked for me in a particular situation, I aim to provide value in each post.\\n- **To Inspire & Engage**: I hope to spark curiosity and foster a community of learners and doers.\\n- **To Document & Reflect**: Writing is a way to track progress, reflect on experiences, and cement knowledge.\\n\\n### Featured Sections\\n\\n- **Development Tales**: Stories from the trenches of coding and system architecture.\\n- **Tech Trendspotting**: Spotlights on emerging technologies and their potential impacts.\\n- **Project Spotlights**: Deep dives into my personal projects, showcasing successes and learning from failures.\\n\\n### Staying Connected\\n\\nWhile the content here is rich with information, the conversation doesn\'t end at the blog\'s final period. Engage, comment, and connect:\\n\\n- **Comments & Discussions**: Share your thoughts on each post \u2013 let\'s learn from each other.\\n- **Social Sharing**: Found something enlightening? Share it with your network!\\n- **DEV.TO Mirror**: Each post is also available on [DEV.TO](https://dev.to/realvorl) for even greater community interaction.\\n\\nThank you for being here, and enjoy the read!\\n\\n---\\n\\n*Happy Exploring,*\\n\\nVeo."},{"id":"yt-playlist-time","metadata":{"permalink":"/blog/yt-playlist-time","source":"@site/blog/2024/2024-01-08-yt-playlist-time/yt-playlist-time.md","title":"Why no total time?","description":"If you\'re an avid YouTube user, you know the struggle of keeping track of the total time you\'re about to invest in watching a playlist or queue. Whether you\'re lining up tutorials, your favorite gaming sessions, or a list of must-watch documentaries, understanding how much time you\'re committing can be crucial. This is where the YouTube Queue Duration Tool comes into play\u2014a simple browser extension that sums up the total duration of videos in your YouTube queue.","date":"2024-01-08T00:00:00.000Z","formattedDate":"January 8, 2024","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"extension","permalink":"/blog/tags/extension"},{"label":"browser","permalink":"/blog/tags/browser"}],"readingTime":2.91,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"yt-playlist-time","title":"Why no total time?","authors":["veo"],"tags":["javascript","extension","browser"],"sidebar_position":1},"unlisted":false,"prevItem":{"title":"Start Here","permalink":"/blog/welcome"},"nextItem":{"title":"Zero-Cost Monitoring","permalink":"/blog/zero-cost-monitoring-solution"}},"content":"If you\'re an avid YouTube user, you know the struggle of keeping track of the total time you\'re about to invest in watching a playlist or queue. Whether you\'re lining up tutorials, your favorite gaming sessions, or a list of must-watch documentaries, understanding how much time you\'re committing can be crucial. This is where the YouTube Queue Duration Tool comes into play\u2014a simple browser extension that sums up the total duration of videos in your YouTube queue.\\n\\n:::info\\nI always wondered why this is not a feature already. Who cares? \\n\\nNow we can change it.\\n:::\\n\\n## Why You Need It\\n\\nIn our fast-paced world, time management is key. Whether you\'re taking a quick break or settling in for a long study session, knowing the total playtime helps you plan better. The YouTube Queue Duration Tool is perfect for:\\n\\n- **Educational Content**: Plan your learning sessions by knowing how long it will take to go through tutorial videos.\\n- **Entertainment**: Balance your leisure time and breaks by watching queued videos.\\n- **Workouts**: Queue up your exercise or yoga videos and get the total workout time.\\n\\n## How It Works\\n\\nThe tool is a piece of JavaScript that runs in the background of your browser. Once you\'ve added videos to your YouTube queue, the tool:\\n\\n1. Accesses the queue container element in the DOM.\\n2. Iterates over the listed videos, scraping the duration of each one.\\n3. Parses the durations and converts them into seconds.\\n4. Sums up the seconds and converts the total back into hours, minutes, and seconds.\\n5. Displays the total duration neatly at the top of your queue.\\n\\n## Under the Hood\\n\\nThe core of the extension is a simple, yet efficient, interval-based checking system that waits until all video items are loaded on the page. Here\'s the logic:\\n\\n```javascript\\nfunction parseTimeToSeconds(timeString) {\\n  const parts = timeString.split(\':\');\\n  let seconds = 0;\\n  let multiplier = 1;\\n\\n  while (parts.length > 0) {\\n    seconds += multiplier * parseInt(parts.pop(), 10);\\n    multiplier *= 60;\\n  }\\n\\n  return seconds;\\n}\\n\\nfunction formatSecondsAsTime(seconds) {\\n  const hours = Math.floor(seconds / 3600);\\n  seconds %= 3600;\\n  const minutes = Math.floor(seconds / 60);\\n  seconds %= 60;\\n  return `${hours}:${String(minutes).padStart(2, \'0\')}:${String(seconds).padStart(2, \'0\')}`;\\n}\\n\\nfunction checkPlaylistTimes() {\\n  let totalSeconds = 0;\\n  let queueTitle = null\\n  try {\\n    const sideBar = document.querySelector(\\"#secondary\\");\\n    const playList = sideBar.querySelector(\\"#playlist\\");\\n    const items = playList.querySelector(\\"#items\\");\\n    const times = items.querySelectorAll(\\"#time-status\\");\\n\\tconst queueH3 = playList.querySelector(\\"h3\\");\\n\\tqueueTitle = queueH3.querySelector(\\"yt-formatted-string\\");\\n    for (let i = 0; i < times.length; i++) {\\n      totalSeconds += parseTimeToSeconds(times[i].innerText);\\n    }\\n  } catch (e) {\\n    console.warn(\'An exception occurred:\', e);\\n    return;\\n  }\\n  const formattedTotalTime = formatSecondsAsTime(totalSeconds);\\n  //console.log(`Total Playlist Time: ${formattedTotalTime}`);\\n  const prefix = queueTitle.innerText.split(\\" \\")[0];\\n  queueTitle.innerText = `Queue (${formattedTotalTime})`;\\n}\\n\\n// Set an interval to sum up the times every second\\nsetInterval(checkPlaylistTimes, 1000);\\n\\n```\\nBy adding it to your *__User Javascript and CSS__* extension.\\n\\n![suggested configuration](image-2.png)\\n\\n:::info\\nI shown how to do this in a previous [DEV.TO post](https://dev.to/realvorl/if-you-don-t-like-it-change-it-ag5) \\n:::\\n\\nAs seen in the screenshots, the total duration of the queued videos is displayed in a clear format (`HH:MM:SS`), giving you a quick glimpse of the time required for your current queue.\\n\\n| Before | After |\\n|:------:|:-----:|\\n| ![before](image-1.png) | ![after](image.png) |\\n\\n## Wrapping Up\\n\\nThe YouTube Queue Duration Tool is a testament to how a little convenience can go a long way. For developers, the source code is a concise example of manipulating the DOM with pure JavaScript and can serve as a template for similar projects.\\n\\nStay tuned for updates, and happy queueing!\\n\\n--- \\nKeep on changing things.\\n\\nViorel PETCU"},{"id":"zero-cost-monitoring-solution","metadata":{"permalink":"/blog/zero-cost-monitoring-solution","source":"@site/blog/2023/2023-12-26-zero-cost-monitoring.md","title":"Zero-Cost Monitoring","description":"Efficient monitoring doesn\'t have to break the bank. In the world of DevOps, where every resource is precious, I\'ve tackled the challenge of implementing a robust monitoring solution that aligns with the most stringent of budgets: free.","date":"2023-12-26T00:00:00.000Z","formattedDate":"December 26, 2023","tags":[{"label":"monitoring","permalink":"/blog/tags/monitoring"},{"label":"devops","permalink":"/blog/tags/devops"},{"label":"free","permalink":"/blog/tags/free"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":0.74,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"zero-cost-monitoring-solution","title":"Zero-Cost Monitoring","authors":["veo"],"tags":["monitoring","devops","free","tools"]},"unlisted":false,"prevItem":{"title":"Why no total time?","permalink":"/blog/yt-playlist-time"},"nextItem":{"title":"Introducing the CPPL","permalink":"/blog/climate-positive-license"}},"content":"Efficient monitoring doesn\'t have to break the bank. In the world of DevOps, where every resource is precious, I\'ve tackled the challenge of implementing a robust monitoring solution that aligns with the most stringent of budgets: *free*.\\n\\nI\'ve shared my journey to this discovery on DEV.TO, where I detail a zero-cost monitoring solution that provides real value without the price tag.\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/a-zero-cost-monitoring-solution-12na)\\n:::\\nIn the article, you\'ll find an in-depth look at how you can set up a monitoring system that not only works effectively but also maintains your budget\'s integrity. It\'s perfect for small projects, startups, or anyone looking to get the most out of their operational tools without additional investment.\\n\\nDive into the setup, the tools, and the configurations that make up this cost-free solution. It\'s monitoring made accessible for everyone.\\n\\n---\\n\\n*Monitor smart, not hard,*\\n\\nVeo"},{"id":"climate-positive-license","metadata":{"permalink":"/blog/climate-positive-license","source":"@site/blog/2023/2023-10-16-CPPL.md","title":"Introducing the CPPL","description":"Open-source software is all about community and collaboration. But what if it could also be about contributing positively to the environment? That\'s the idea behind the Climate Positive Public License.","date":"2023-10-16T00:00:00.000Z","formattedDate":"October 16, 2023","tags":[{"label":"open source","permalink":"/blog/tags/open-source"},{"label":"climate","permalink":"/blog/tags/climate"},{"label":"sustainability","permalink":"/blog/tags/sustainability"}],"readingTime":0.675,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"climate-positive-license","title":"Introducing the CPPL","authors":["veo"],"tags":["open source","climate","sustainability"]},"unlisted":false,"prevItem":{"title":"Zero-Cost Monitoring","permalink":"/blog/zero-cost-monitoring-solution"},"nextItem":{"title":"Overcoming the \\"Pigdog\\"","permalink":"/blog/overcoming-pigdog"}},"content":"Open-source software is all about community and collaboration. But what if it could also be about contributing positively to the environment? That\'s the idea behind the Climate Positive Public License.\\n\\nI\'ve detailed this innovative concept on DEV.TO, where I introduce the principles and potential of a license that goes beyond the code.\\n\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/introducing-the-climate-positive-public-license-b2b)\\n::: \\n\\nThe license aims to address climate change by requiring projects to not only be open source but also to actively contribute to a healthier planet. It\'s a small step for code, but potentially a giant leap for the open-source community in terms of environmental responsibility.\\n\\nExplore the possibilities and join the discussion on how we, as developers and technologists, can be part of the climate solution.\\n\\n---\\n\\n*Code for a cause,*\\n\\nVeo"},{"id":"overcoming-pigdog","metadata":{"permalink":"/blog/overcoming-pigdog","source":"@site/blog/2023/2023-04-23-pigdog.md","title":"Overcoming the \\"Pigdog\\"","description":"\\"Der innere Schweinehund\\" \u2013 or the \\"inner pig dog\\" \u2013 is a quirky German term that refers to the inner voice that tempts us into procrastination. How do we combat this sly creature? Good design might just be the sword we need.","date":"2023-04-23T00:00:00.000Z","formattedDate":"April 23, 2023","tags":[{"label":"design","permalink":"/blog/tags/design"},{"label":"motivation","permalink":"/blog/tags/motivation"}],"readingTime":0.725,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"overcoming-pigdog","title":"Overcoming the \\"Pigdog\\"","authors":["veo"],"tags":["design","motivation"]},"unlisted":false,"prevItem":{"title":"Introducing the CPPL","permalink":"/blog/climate-positive-license"},"nextItem":{"title":"Dyslexic Developer Workaround","permalink":"/blog/dyslexic-dev-workaround"}},"content":"\\"Der innere Schweinehund\\" \u2013 or the \\"inner pig dog\\" \u2013 is a quirky German term that refers to the inner voice that tempts us into procrastination. How do we combat this sly creature? Good design might just be the sword we need.\\n\\nI\'ve penned down some thoughts on DEV.TO about the surprising role that thoughtful design plays in overcoming procrastination.\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/overcoming-the-pigdog-thanks-to-good-design-23io)\\n:::\\nThe article takes you through the ways in which a well-designed workspace and toolset can create an environment that\'s less conducive to the lures of the \\"pigdog.\\" It\'s not just about aesthetics; it\'s about functionality and creating a space that prompts action and creativity.\\n\\nDiscover how the principles of good design can be applied to your daily routine to enhance productivity and keep procrastination at bay.\\n\\n---\\n\\n*Design your space, design your pace,*\\n\\nVeo"},{"id":"dyslexic-dev-workaround","metadata":{"permalink":"/blog/dyslexic-dev-workaround","source":"@site/blog/2021/2021-10-31-dyslexic-dev.md","title":"Dyslexic Developer Workaround","description":"Dyslexia presents a unique set of challenges, especially in the world of software development where every character counts. But it doesn\'t have to be a roadblock.","date":"2021-10-31T00:00:00.000Z","formattedDate":"October 31, 2021","tags":[{"label":"docker","permalink":"/blog/tags/docker"},{"label":"bash","permalink":"/blog/tags/bash"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":0.675,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"dyslexic-dev-workaround","title":"Dyslexic Developer Workaround","authors":["veo"],"tags":["docker","bash","tools"]},"unlisted":false,"prevItem":{"title":"Overcoming the \\"Pigdog\\"","permalink":"/blog/overcoming-pigdog"},"nextItem":{"title":"Own Bitcoin; Stay Focused!","permalink":"/blog/my-bitcoin-alias"}},"content":"Dyslexia presents a unique set of challenges, especially in the world of software development where every character counts. But it doesn\'t have to be a roadblock.\\n\\nOn DEV.TO, I\'ve opened up about my own experiences as a developer with dyslexia and how I\'ve turned this challenge into a strength.\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/dyslexic-dev-no-problem-1nfc)\\n:::\\nIn the article, I share personal strategies and tools that have helped me excel in coding despite the hurdles dyslexia might throw my way. It\'s a message of empowerment and encouragement for anyone in the tech field who might see dyslexia as a barrier.\\n\\nJoin me in breaking down misconceptions and exploring the ways in which we can all create a more inclusive and supportive environment for dyslexic developers.\\n\\n---\\n\\n*Embrace your unique perspective,*\\n\\nVeo"},{"id":"my-bitcoin-alias","metadata":{"permalink":"/blog/my-bitcoin-alias","source":"@site/blog/2021/2021-04-02-bitcoin-alias.md","title":"Own Bitcoin; Stay Focused!","description":"Owning Bitcoin or any cryptocurrency can be an exhilarating ride, with market values fluctuating wildly from one moment to the next. But can this financial rollercoaster affect your ability to focus on work?","date":"2021-04-02T00:00:00.000Z","formattedDate":"April 2, 2021","tags":[{"label":"bitcoin","permalink":"/blog/tags/bitcoin"},{"label":"bash","permalink":"/blog/tags/bash"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":0.72,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"my-bitcoin-alias","title":"Own Bitcoin; Stay Focused!","authors":["veo"],"tags":["bitcoin","bash","tools"]},"unlisted":false,"prevItem":{"title":"Dyslexic Developer Workaround","permalink":"/blog/dyslexic-dev-workaround"},"nextItem":{"title":"Game of Life on PGE","permalink":"/blog/pixel-game-engine"}},"content":"Owning Bitcoin or any cryptocurrency can be an exhilarating ride, with market values fluctuating wildly from one moment to the next. But can this financial rollercoaster affect your ability to focus on work?\\n\\nI\'ve shared my thoughts and experiences on DEV.TO about the intersection of cryptocurrency ownership and workplace productivity.\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/can-you-focus-on-work-when-owning-bitcoin-l95)\\n:::\\nIn the article, I explore the challenges of staying focused on professional responsibilities amid the distractions posed by the volatile nature of cryptocurrencies. Whether you\'re a seasoned crypto investor or just crypto-curious, this piece sheds light on the importance of maintaining a balance between work and the watchful eye on investment fluctuations.\\n\\nDelve into the discussion and discover strategies for keeping your work productivity on track, even as you participate in the ever-changing world of digital currencies.\\n\\n---\\n\\n*Stay productive, stay balanced,*\\n\\nVeo"},{"id":"pixel-game-engine","metadata":{"permalink":"/blog/pixel-game-engine","source":"@site/blog/2020/2020-06-11-pixel-game-blog.md","title":"Game of Life on PGE","description":"Yet another GOL implementation - PGE (Pixel Game Engine) by OLC https://youtu.be/OMvEy8fv_4M","date":"2020-06-11T00:00:00.000Z","formattedDate":"June 11, 2020","tags":[{"label":"game","permalink":"/blog/tags/game"},{"label":"game-engine","permalink":"/blog/tags/game-engine"}],"readingTime":0.265,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"pixel-game-engine","title":"Game of Life on PGE","authors":["veo"],"tags":["game","game-engine"]},"unlisted":false,"prevItem":{"title":"Own Bitcoin; Stay Focused!","permalink":"/blog/my-bitcoin-alias"},"nextItem":{"title":"Auto Like Youtube","permalink":"/blog/youtube-autolike"}},"content":"Yet another GOL implementation - PGE (Pixel Game Engine) by OLC https://youtu.be/OMvEy8fv_4M\\n\\nThanks [@javidx9](https://github.com/OneLoneCoder) for gifting us with the [`PGE`](https://github.com/OneLoneCoder/olcPixelGameEngine).\\n\\nI had to find something distracting to do during my \\"vacation\\" and this provides LOTS OF ENTERTAINMENT! \\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/OMvEy8fv_4M?si=j08pLT7cz4Pnie26\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>"},{"id":"youtube-autolike","metadata":{"permalink":"/blog/youtube-autolike","source":"@site/blog/2020/2020-02-17-autolike.md","title":"Auto Like Youtube","description":"When you find a feature or function online that truly enhances your browsing experience, it\'s almost second nature to wish for a way to keep it close at hand. That\'s where browser extensions come into play \u2013 the little helpers that make our digital lives more efficient.","date":"2020-02-17T00:00:00.000Z","formattedDate":"February 17, 2020","tags":[{"label":"browser","permalink":"/blog/tags/browser"},{"label":"extension","permalink":"/blog/tags/extension"},{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"css","permalink":"/blog/tags/css"}],"readingTime":0.635,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"youtube-autolike","title":"Auto Like Youtube","authors":["veo"],"tags":["browser","extension","javascript","css"]},"unlisted":false,"prevItem":{"title":"Game of Life on PGE","permalink":"/blog/pixel-game-engine"},"nextItem":{"title":"Flutter Competition Entry","permalink":"/blog/flutter-cert"}},"content":"When you find a feature or function online that truly enhances your browsing experience, it\'s almost second nature to wish for a way to keep it close at hand. That\'s where browser extensions come into play \u2013 the little helpers that make our digital lives more efficient.\\n\\nIn a recent piece on DEV.TO, I dive into the world of browser extensions and the impact they have on our daily internet interactions.\\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/browser-extensions-if-you-liked-it-don-t-forget-to-it-1kf3)\\n:::\\nFrom personalization to productivity, extensions can significantly modify and improve our browsing experience. \\n\\nJoin me in exploring how these miniature programs can make a big difference and why it\'s crucial to show appreciation for the creative minds that develop them.\\n\\n---\\n\\n*Extend your capabilities,*\\n\\nVeo"},{"id":"flutter-cert","metadata":{"permalink":"/blog/flutter-cert","source":"@site/blog/2020/2020-01-06-flutter-blog.md","title":"Flutter Competition Entry","description":"So happy to receive my little @Google and @FlutterDev issued certificate for completing the #FlutterClock challenge:","date":"2020-01-06T00:00:00.000Z","formattedDate":"January 6, 2020","tags":[{"label":"certificate","permalink":"/blog/tags/certificate"},{"label":"flutter","permalink":"/blog/tags/flutter"}],"readingTime":0.245,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"flutter-cert","title":"Flutter Competition Entry","authors":["veo"],"tags":["certificate","flutter"]},"unlisted":false,"prevItem":{"title":"Auto Like Youtube","permalink":"/blog/youtube-autolike"},"nextItem":{"title":"Favorite Browser Extension","permalink":"/blog/my-fav-ext"}},"content":"So happy to receive my little @Google and @FlutterDev issued certificate for completing the #FlutterClock challenge:\\n:::info for details ...\\nThe nixie tube clock: https://github.com/realvorl/flutter-nixie-clock\\n:::\\nI had a lot of fun with the Hundred points symbol\uff05 developer friendly experience and perfect tool integration provided by #flutterdev\\n\\n<img src=\\"https://pbs.twimg.com/media/EO6VloUXkAAszzn?format=png&amp;name=small\\"/>"},{"id":"my-fav-ext","metadata":{"permalink":"/blog/my-fav-ext","source":"@site/blog/2019/2019-09-08-my-favorite-ext.md","title":"Favorite Browser Extension","description":"Change is the only constant in technology. As developers and tech enthusiasts, we face an array of tools, languages, and frameworks that constantly evolve. Sometimes, we encounter something in our tech stack that doesn\'t quite fit our needs or expectations.","date":"2019-09-08T00:00:00.000Z","formattedDate":"September 8, 2019","tags":[{"label":"productivity","permalink":"/blog/tags/productivity"},{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"browser","permalink":"/blog/tags/browser"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":0.785,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"my-fav-ext","title":"Favorite Browser Extension","authors":["veo"],"tags":["productivity","javascript","browser","tools"]},"unlisted":false,"prevItem":{"title":"Flutter Competition Entry","permalink":"/blog/flutter-cert"},"nextItem":{"title":"Finding a Meld Alternative","permalink":"/blog/meld-alternative"}},"content":"Change is the only constant in technology. As developers and tech enthusiasts, we face an array of tools, languages, and frameworks that constantly evolve. Sometimes, we encounter something in our tech stack that doesn\'t quite fit our needs or expectations.\\n\\nIn my recent exploration shared on DEV.TO, I delve into the concept of taking initiative when something in your workflow just doesn\'t click. \\n:::info\\n[Read the full article on DEV.TO](https://dev.to/realvorl/if-you-don-t-like-it-change-it-ag5)\\n:::\\nI discuss the empowerment that comes from tweaking, adjusting, or even overhauling elements that are within our control. From modifying open-source projects to suit our specific requirements, to contributing back to the community with our improvements, this article is an ode to the proactive spirit of the tech world.\\n\\nTake a moment to read through and maybe, the next time you find a tool or process that you think could be better, you\'ll remember to take charge and make that change.\\n\\n---\\n\\n*Carve your path,*\\n\\nVeo"},{"id":"meld-alternative","metadata":{"permalink":"/blog/meld-alternative","source":"@site/blog/2019/2019-08-19-meld-alt.md","title":"Finding a Meld Alternative","description":"In the realm of development, particularly when dealing with version control and code comparison, a robust diff and merge tool is indispensable. On Linux, Meld has long been the go-to solution, but macOS users often find themselves at a crossroads due to Meld\'s incompatibility.","date":"2019-08-19T00:00:00.000Z","formattedDate":"August 19, 2019","tags":[{"label":"productivity","permalink":"/blog/tags/productivity"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":0.695,"hasTruncateMarker":false,"authors":[{"name":"Viorel PETCU","title":"Maintainer and creator of this blog","url":"https://github.com/realvorl","imageURL":"https://github.com/realvorl.png","key":"veo"}],"frontMatter":{"slug":"meld-alternative","title":"Finding a Meld Alternative","authors":["veo"],"tags":["productivity","tools"]},"unlisted":false,"prevItem":{"title":"Favorite Browser Extension","permalink":"/blog/my-fav-ext"}},"content":"In the realm of development, particularly when dealing with version control and code comparison, a robust diff and merge tool is indispensable. On Linux, Meld has long been the go-to solution, but macOS users often find themselves at a crossroads due to Meld\'s incompatibility.\\n\\nIn my latest article, I explore a macOS-friendly alternative that not only matches Meld\'s functionality but integrates seamlessly with the Mac environment. \\n:::info for details ...\\n[Read the full article on DEV.TO](https://dev.to/realvorl/meld-alternative-for-macos-2ohk)\\n:::\\nDiscover the tool that has streamlined my code comparison process and learn how it can enhance your development workflow on macOS. Whether you\'re resolving merge conflicts or comparing local files against repository versions, having the right tool for the job makes all the difference.\\n\\nDive into the article for a detailed review and setup guide. Happy coding!\\n\\n---\\n\\n*Keep on merging,*\\n\\nVeo."}]}')}}]);