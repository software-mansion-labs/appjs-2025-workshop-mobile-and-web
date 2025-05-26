# Workshops: Mobile & Web with React Native

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
   yarn web
   ```

FIXME: add instructions how to run: android, ios

## Section 1: Navigation basics

Throughout this and upcoming exercises we will be using `expo-router`. While it may be useful or sometimes even required to write more custom code using `react-navigation` directly it takes much more time and work.

### Exercise 1.1: Add some initial screens

The initial Screen that a user will land in our app is `/app/index.ts`.

Let's add some more screens. We want to add a dynamic screen which will accept an id and point to a specific activity. Also, we want some static screens for the Settings of the app.

**TODOs**

1. Add a screen with a route `/activity/:activityId` and make sure it's dynamic
1. Add a screen with a route `/settings` and then 2 sub-routes: `account` and `notifications`
1. Use existing components inside `/components` to render some basic content:
   - `SettingsCard` will provide a list of settings
   - `AccountCard` and `NotificationSettingsCard` can be used as content of these pages

Here's the route setup we expect:

1. `/` - Home screen - the activity list
   1. `/activity/:activityId` - single activity screen
1. `/settings` - main settings screen
   1. `/settings/account` - account settings
   1. `/settings/notifications` - notification settings

Now we need to add some basic navigation to be able to look at the activity and settings screens.

**TODOs**

1. Inside `<ActivityList />` component use `Pressable` to navigate user to `/activity/:activityId` route. Whenever a user clicks on a list item, they should see a single activity screen.
1. Modify `SettingsCard` so that appropriate buttons navigate to `/settings/account` and `/settings/notifications`
1. On web, it is very easy to modify the current URL via the browser bar. What happens when someone tries to access a non-existing activity id?  
   We should ensure that if activity id is missing or incorrect, the app will still work and display a useful message to the user. You can use existing `NotFoundMessage` component to achieve that.  
   **Note** that non-existing item data is different from non-existing route.

<details>
<summary>Hint</summary>

Use `useRouter` hook from `expo-router` for navigation between the views: https://docs.expo.dev/router/basics/navigation/

</details>

### Exercise 1.2: Tab Navigation

Mobile apps usually have a tab navigator at the bottom of the screen. Let's see how it works in a cross-platform app.

**TODOs**

1. Add a new screen `/app/you.tsx` which will display some statistics about the user (use existing `/components/LifetimeStats.tsx` component)
1. In the root layout, change the stack to a tab navigator with icons for `Home`, `You`, `Settings` and `Exercises`.
   - You can use [expo-vector-icons](https://docs.expo.dev/guides/icons/) to get icons for the tabs
1. Settings tab has nested routes, right now each screen is displayed as a separate tab. Let's add a stack navigator inside settings directory to display all the nested routes in a single tab.
   - Create a new `_layout.tsx` file in `/app/settings` directory and render a stack navigator
1. In a similar manner we need to group our "Home" screen `/` with `/activity/[activityId]` using another stack navigator, so that a single activity will be displayed under Home tab
   - Create a new directory called `(home)` using the expo-router [route group syntax](https://docs.expo.dev/router/basics/notation/#parentheses)
   - Create a new `_layout.tsx` file in `/(home)` directory and render a stack navigator
   - Move the `activity` directory created in 1.1 and its screen inside `(home)`
1. On web, especially on large screens, bottom tab navigator is not a good fit. Let's change it to a side bar displayed on the left side of the screen.
   - Edit `/components/SideBar.tsx` to display a side bar with the same icons as the tab navigator
   - Display the `SideBar` component in the root layout conditionally based on the screen size and platform (use `useWindowDimensions` and `Platform` from `react-native`)
   - You might need to change TabBar's `sceneStyle` to account for the sidebar width
   - An alternative approach is to use `tabBarPosition: "left"` to display the tab bar on the left side of the screen but you have less control over the styling.

### Exercise 1.3: Split navigation

Lastly we'll tackle a common issue: mobile screens don’t always translate well to web routes and layouts. More specifically, when using web browsers, we must account for a wide range of screen sizes - including wide desktop screens. Because of that there will be extra space on web that we should somehow utilize.

![](/workshop-assets/1.3-split-view.png)

One thing we can do is make our `ActivityList` display as a side panel on the `/activity/[activityId]` Screen.  
Like so:

<img src="/workshop-assets/1.3-split-desktop.png" alt="desktop split view" width="500"/>

**TODOs**

1. Modify Activity Screen to display a side panel (on the left) with list of activities:
   - Create a new component `<WithSidePanel>` that will encapsulate the logic of displaying split view
   - It should accept React `children` as a prop and then either render them unchanged or wrap them with side panel 
   - You can use `useWindowDimensions` hook from `react-native` to check for the width of the screen
   - you can (optionally) also use the check `Platform.OS === "web"` to run code only for web
   - On screens lower than 800px users should get the unchanged activity view, but when they're on wider screens - they should see a split view: activity view as main content and list of activities on the left
   - use `<WithSidePanel>` inside `[activityId].tsx`
1. Modify `(home)/index.tsx` - there is no need for this view on web, since we always show `ActivityList` as a side panel:
   - whenever a user enters `/` on web, we will redirect them to `/activity/[activityId]`
   - use the same check that was used in previous point - `useWindowDimensions()` and/or `Platform.OS` to perform the redirect
   - the redirect can be done via `<Redirect />` component, or imperatively via `useRouter()`. We will have to get all activities data to grab a correct id of one of them (for example 1st one) and use it to create the redirect route

_Note:_ the proposed solution is just one of many, and other apps might want different approaches.


## Section 2: Handling different apis on web and mobile
In this section we will use platform specific file extensions to implement a very similar functionality, using different APIs on mobile and on web.

As an example we will be using a simple alert that will display some information to the user.

<img src="/workshop-assets/2.1-alert.png" alt="desktop split view" width="400"/>

**TODOs**
1. Inside `libs/alerts/types.ts` you can find a super simple type for Alert - use it when implementing this exercise.
1. Implement a function `showAlert` which accepts arguments of type `AppAlertType` and displays the alert. You will have to create two index files: one with standard extension `*.ts` and one with `*.web.ts` (or `*.native.ts`, it's your choice)
1. We will end up with 2 implementations of `showAlert`. Both functions have to accept identical arguments, but will vary in the actual implementation.

**Native**
1. Native implementation is quite simple, we will use standard `Alert` component from `react-native`.
1. In the file for native implementation export a `showAlert` function, and display a simple alert with 2 buttons: "Cancel" and "Confirm". Use [alert docs](https://reactnative.dev/docs/alert) for guidance.
1. Pressing on "Cancel" and "Confirm" buttons should call the provided callbacks.

**Web**
1. `Alert` from react native is a very nice api, unfortunately `react-native-web` does not provide web implementation.
1. Web browsers have a different api which we can use: [Dialog Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) and it's method `showModal()` - get a look at both apis.
1. When writing web-specific code we have two approaches, either writing HTML/CSS or calling DOM api methods. We want the second approach, since we want to control our Alert fully via calling `showAlert` function, without creating any extra files.
1. In the file for web implementation export a `showAlert` function, and inside it create a simple structure of elements to display a dialog. We don't need to be semantically correct, so just a simple `div` with `h2` and two buttons is enough.
1. Use `document.createElement()` and `element.appendChild()` to programmatically create new dom elements and combine them together.
1. Lastly attach event listeners to two buttons - both should close the modal (dialog) and call the provided callbacks.

**Web styling**
1. Basic web dialog will have almost no styling. Some basic styling was provided inside file `/web-dialog.css`
1. Now modify the barebones styling and improve the dialog on web. You have 2 possible approaches:
   - you can modify existing `.css` file and improve the styles there
   - alternatively you can apply styling directly to elements, when creating them via DOM api
1. The actual method of styling in a real world app would probably be based on what kind of styling and builder you are using. 

<details>
<summary>Some helpful code for HTML Dialog</summary>
To create the dialog element you can use this snippet:

```js
const dialog = document.createElement("dialog");
document.body.appendChild(dialog);
```

Then you can add more elements via:
```js
const anotherEL = document.createElement("...");
dialog.appendChild(anotherEl)
```

Inline styling can be done like this:
```js
const element = document.createElement("...");
element.style.width = "200px";
element.style.color = "some color";
```
</details>


## Section 3: Styling

In this section we will be looking at different ways to style our cross-platform app. We will be using the following libraries:

- [Styled Components](https://styled-components.com/docs/basics#react-native)
- [Unistyles](https://www.unistyl.es/v3/start/introduction)
- [Nativewind](https://www.nativewind.dev/docs)
- [Tamagui](https://tamagui.dev/ui/intro)

Open `http://localhost:8081/exercises/styling` in your browser, you will see a grid of empty containers.

We implemented the styling for the first cell using React Native's StyleSheet. Your job is to implement one component for each container using the library that is specified in the container's header.

Feel free to play around with the example components to get a better understanding of them. Also check out the implementation of `ActivitySelector`, `StreakFlameWidget` and `JoinChallengeButton` in `/components/styling` to get an idea how to implement the styling for the upcoming exercises.

### Exercise 3.1: Styled components

The library is already installed and configured, you can search globally for 'styled-components setup' in the project to see what it takes to configure it. 

**TODOs**

1. Choose a component that you want to implement (you can use the example components as a reference)
1. Create a new file `/components/styling/StyledComponents.tsx` and implement the styling for the component you chose in the previous step (you can copy the implementation of the example component and modify it)
1. Display it in the second cell and compare the result with the original component
1. **Extra**: In the `Theming` cell there is a button to change the theme of the app. Try to use the theme in your styled components.
   - ThemeProvider is already configured in the `app/exercises/styling.tsx` file, and the theme is defined in the `libs/styles/theme.ts` file
   - [Styled Components Theming docs](https://styled-components.com/docs/advanced#theming)

### Exercise 3.2: Unistyles

The library is already installed and configured, you can search globally for 'unistyles setup' in the project to see what it takes to configure it. More information can be found in the [configuration guide](https://www.unistyl.es/v3/start/configuration).

**TODOs**

1. Choose a component that you want to implement 
1. Create a new file `/components/styling/Unistyles.tsx` and implement the styling for the component you chose in the previous step (you can copy the implementation of the example component and modify it)
   - Notice that Unistyles looks similar to React Native's StyleSheet API. [Dynamic Functions](https://www.unistyl.es/v3/references/dynamic-functions) might be super handy to improve the code readability.
1. Display it in the appropriate cell and compare the result with the original component
2. **Extra**: In the `Theming` cell there is a button to change the theme of the app. Try to use the theme in your unistyles component.
   - Themes are configured in the `libs/styles/unistyles.ts` file, and you can access the current theme in the [Themable StyleSheet](https://www.unistyl.es/v3/references/stylesheet) or with [useUnistyles](https://www.unistyl.es/v3/references/use-unistyles) hook.
   - [Unistyles Theming docs](https://www.unistyl.es/v3/references/theming)
3. **Extra**: Experiment with breakpoints to create a responsive component
   - Breakpoints are configured in the `libs/styles/unistyles.ts` file. You can change colors/margins/paddings/etc based on the current window width.
   - For more information about breakpoints check out the [Unistyles Breakpoints docs](https://www.unistyl.es/v3/references/breakpoints)

### Exercise 3.3: Nativewind

The library is already installed and configured, you can search globally for 'nativewind setup' in the project to see what it takes to configure it. More information can be found in the [installation guide](https://www.nativewind.dev/docs/getting-started/installation).

For better DX, it is advised to [configure your editor](https://tailwindcss.com/docs/editor-setup) so it can highlight and autocomplete tailwind classes.

**TODOs**

1. Choose a component that you want to implement
1. Create a new file `/components/styling/Nativewind.tsx` and implement the styling for the component you chose in the previous step (you can copy the implementation of the example component and modify it)
1. Display it in the fourth cell and compare the result with the original component
1. **Extra**: In the `Theming` cell there is a button to change the theme of the app. Try to use the theme in your nativewind component.
   - Colors are defined in the `tailwind.config.js` file. You can use them like `bg-primary`, `bg-secondary`, etc.
   - [Nativewind Theming docs](https://www.nativewind.dev/docs/guides/themes)
1. **Extra**: Experiment with breakpoints to create a responsive component
   - Nativewind uses the same breakpoints as Tailwind CSS. You can use them like `sm:bg-primary`, `md:bg-secondary`, etc.
   - For more information about breakpoints check out the [Tailwind Breakpoints docs](https://tailwindcss.com/docs/responsive-design)

### Exercise 3.4: Tamagui

The library is already installed and configured, you can search globally for 'tamagui setup' in the project to see what it takes to configure it. More information can be found in the [installation guide](https://tamagui.dev/ui/intro).

This exercise is a bit different from the previous ones, Tamagui is a powerful style system with a lot of features. It could have a whole workshop on its own, so we will only scratch the surface of what it can do. 

**TODOs**

1. Pick some of the components from Tamagui to style the fifth cell.
    - For example `XStack`, `YStack`, `Button`, `Tooltip` or `Switch`
    - You could try building something like a simple sign-in form with email and password fields, but feel free to explore whatever component or layout you'd like
1. Try to use the breakpoints to create a responsive component
    - [Configure media queries](https://tamagui.dev/docs/core/use-media) in the `tamagui.config.ts` file. You can use them like `$gtSm` to create a responsive layout.
2. **Extra**: Make your own styled component
    - Check out tamagui's styled API [here](https://tamagui.dev/docs/core/styled). Try to make a reusable `CircleButton` component (button with a circular shape)
    - Create variants for the button, for example `small` and `large` that change the size of the button


### Exercise 3.5: Reanimated CSS Animations 

With Reanimated 4, you can now write animations using a CSS-like API. This new syntax supports keyframes, duration, easing and is a great way to animate things using familiar web concepts.

**TODOs**

1. Open the `RunnerLoading.tsx` file
2. Use [`CSSAnimationKeyframes`](https://docs.swmansion.com/react-native-reanimated/docs/next/css-animations/animation-name) to define a loop that:
    - Rotates a runner icon back and forth
    - Scales it up in the middle of the animation
    - Apply this animation using the animationName, animationDuration, animationIterationCount and animationTimingFunction properties
3. **Extra**: Try to animate the text under the runner icon, be creative!

## Section 4: DOM Components – Embedding Web Pages in Native Apps

Sometimes, you want to reuse parts of your website inside a native app — like legal documents, dashboards, or blog pages. Instead of rewriting everything in React Native, Expo allows embedding web components directly into your app using [DOM Components](https://docs.expo.dev/guides/dom-components/) with a simple 'use dom' directive.

In this exercise, we’ll build a Privacy Terms page using React DOM and render it inside a native screen.

### Exercise 4.1: Create a DOM component

**TODOs**

1. Create a new file `/components/PrivacyTerms.tsx` and add some Privacy Terms text to it.
   - Use the `use dom` directive at the top of the file
   - Use html tags to structure the content (div, h1, p, a, etc.)
   - You can use tailwind classes to style the content
   - Sample html with privacy terms can be found in `/assets/privacy-terms.html`
2. Create a new screen at `/app/settings/privacy.tsx` and import the `PrivacyTerms` component to render it.
3. Modify `SettingsCard` so that Privacy Terms button navigates to `/settings/privacy`
4. **Extra**: Add support for props — e.g. pass a custom contact email to the component

## Section 5: React Strict DOM
"React Strict DOM" is a technology developed by Meta that allows to write code that look good on all platforms, by using a subset of the DOM API that is compatible with both web and native.

Take a look at docs: https://facebook.github.io/react-strict-dom/

**IMPORTANT**: this library is still in development. Although almost every abstraction for web is supported, not everything is supported for android/ios. Consider this section of workshops as an interesting look into the possible future of writing React for web and native, but be prepared for things that are missing.

Because the setup of `react-strict-dom` requires several config changes it was easier to create it in a separate directory as a fresh app.

**Please go to** `/react-strict-dom-demo` directory and run the app. It was build using expo based on the setup guide in the docs.
You can run it via:

```bash
yarn install
```

```bash
yarn web
   ``` 

### Styling in `react-strict-dom`
React strict dom provides a simple but flexible `css` api which is a bit similar to StyleSheet. It's worth knowing that underneath it uses [StyleX](https://stylexjs.com/) which is a styling system used internally at Meta.

You can find the api docs for styling here: https://facebook.github.io/react-strict-dom/api/css/

### Exercise 5.1: Write some code using React strict dom

**TODOs**
 - Visit the main page and see how we can write and style components using `react-strict-dom`.
 - Next try your hand in writing some code, go to `/src/app/landing.tsx` and try to create a simple landing page with buttons, headings and some text
 - See which elements work on native and which don't, try to use semantic elements when doing this exercise.
 - In case something doesn't work, we can use the well known strategy of "forking" a file into `*.native.ts` or `*.web.ts`.

You can use the screenshot below as inspiration:

<img src="/workshop-assets/5.1-strict-dom-landing-page.png" alt="desktop split view" width="700"/>

