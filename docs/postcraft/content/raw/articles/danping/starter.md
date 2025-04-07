# danping starter notes

I struggled to see ping times on termux on my phone yesterday, while up a ladder, using my other hand to adjust an antenna and my other hand to hold on... So I'd like an app that gives an audible **ping**. I want to make a #:hyperdata-android and noticed Ionic and Capacitor the other day, something to try.

So... made a repo and made it a submodule locally as `hyperdata/packages/danping`.

Made a new workspace in VSCode.

I've also created a Claude Project of the same name, given it a tweaked version my current system prompt for dev. I'll keep my eyes open for relevant docs/code I can add to Project Knowledge.

Annoyingly it seems most of the examples for vanilla JS use Tailwind CSS. I don't want to use any more bloody frameworks than I have to!

https://ionic.io/blog/create-powerful-native-mobile-apps-with-capacitor-vanillajs

```sh
npm init @capacitor/app
```

Gave a wizard, looks like I should have started in `../`. Hey ho, *moving*...

I see it uses Vite. It's not in my current toolchain, but I've seen #:@bergi using it somewhere in #:link:RDF-Ext, so I'm not averse.  

```sh
npm install
```

#:todo add a browser window to #:hyperdata-desktop (or finally get around to figure out window tiling in Ubuntu)

```sh
npm ERR! An unknown git error occurred
npm ERR! command git --no-replace-objects ls-remote ssh://git@github.com/pulsar-edit/document-register-element.git
npm ERR! fatal: cannot chdir to '../../../../packages/danping.git': No such file or directory
```

https://docs.npmjs.com/common-errors

out-of-date

```
npm cache verify
```
well it compressed the cache...

Nah, looks like my move buggered it up. 

```sh
cd ..
mv danping danping_
```

and try  again.

```sh
npm run start
```











---

> Ionic is the toolkit that provides the UI components. Capacitor is what creates the bridge between the web and native functionality. It also provides the tooling to build the native apps.
\- https://forum.ionicframework.com/t/what-is-the-difference-between-ionic-and-capacitor/226726

https://ionicframework.com/

https://ionic.io/blog/create-powerful-native-mobile-apps-with-capacitor-vanillajs

https://github.com/saimon24?tab=repositories
