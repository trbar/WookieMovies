### How To Run

`npx react-native run-ios` to run ios version

`npx react-native run-android` to run android version

`detox build --configuration ios` to build app for e2e testing on iOS

`detox build --configuration android` to build app for e2e testing on Android

`detox test --configuration ios` to run e2e tests on iOS

`detox test --configuration android` to run e2e tests on Android

**Note:** you will have to change the emulator on Android in the detoxrc.json file so that it runs on your machine

### Objective

Your assignment is to implement a React Native movie listing app.

### Brief

You are the owner of a movie theater in **Thikkiiana City,** on the Wookiee homeworld of Kashyyyk. Your customers are bored with the never changing selection and are asking for something completely different - they want to see what's playing on Earth. Wookies are the main exporter of Computer Technology for the New Republic so naturally you roll up your sleeves and get to work. You quickly scribble down some notes and after a few hours of relentless work you have a design in mind.

### Tasks

-   Implement a React Native movie listing app
-   Build out the project to the designs inside the `/Designs` folder
-   Connect your application to the **CodeSubmit Movie Database** at `https://wookie.codesubmit.io/movies`
-   For authentication pass the `"Authorization: Bearer Wookie2019"` header
-   Parse the API response and display the results as outlined in the design. **Make sure to group movies by categories**.
-   Implement a detail view for the movies in the list
-   Implement the search view by connecting to `https://wookie.codesubmit.io/movies?q=<search_term>`
-   Surprise us! Add a feature that you think would work well here (for instance, advanced search, integration with other API, a "Favorite" functionality)
    -   Describe the feature in separate markdown file

### Deliverables

Make sure to include all source code in this repository.

For iOS, include a assignment.zip file containing your compressed .app bundle **in the root of the repository**.
Your .app bundle must represent a simulator build of your app. After running in iOS Simulator via Xcode, look in ~/Library/Developer/Xcode/DerivedData/<project-name>/Build/Products/Debug-iphonesimulator/.
Alternatively, you may run xcodebuild -sdk iphonesimulator (if you use .xcodeproj) or xcodebuild -sdk iphonesimulator -workspace Sample.xcworkspace/ -scheme <your-scheme> -configuration Debug (if you use .xcworkspace) in your project directory, then zip the .app bundle in build/Debug-iphonesimulator/.

For Android, include assignment.apk containing your app **in the root of the repository**.
After your app is built, either via Android Studio or by running the command ./gradlew assembleDebug in your project directory, look in <project-name>/<module-name>/build/outputs/apk/.

### Evaluation Criteria

-   **React Native** best practices
-   Show us your work through your commit history
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways including proper loading and error states handling?
-   Maintainability: is it written in a clean, maintainable way?
    - Dependency management & Packaging
    - Project structure
    - Code Style (style guide, readability, type enforcement)
    - Code complexity
    - Possibility to run app by CLI commands
    - Modern stack (popular libs on recent versions is a plus)
    - Styling approach
        - Usage of theme or at least constants for colors/sizes
        - Repsect to the grid
        - Community best practicies
        - Semantics
- Performance
    -  No O(n^3) when it is not required
    -  No unnesesary re-renders/repaints
    -  Stable FPS
-   Testing: is the system adequately tested?
    - Unit testing or Integration testing
    - E2E

### CodeSubmit

Please organize, design, test and document your code as if it were
**going into production** - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The finn GmbH Team