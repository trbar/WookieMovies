## Technical Choices and Reasoning

### Overall Setup

As this project is quite simple, I could have chosed to use Expo, yet I decided against this to show my skills using a pure React Native project

### Navigation

I chose to use [react-navitation](https://reactnavigation.org/) as the main navigation library. This simplifies creating the bottom tab bar and has an elegant api for navigating and managing the view stack

### Testing

I decided to do 100% E2E tests instead of adding Unit/Integration tests. My reasoning is that I feel it is best that any testing done on the app always tried to mimic user behaviour. As a result, you can see that some of the E2E tests are a little bit elaborate and build on other tests to add cross coverage. Moreover, if these tests past, it builds confidence that the app can deploy while maintaining app critical flows passing, ableit with slightly off UI which is better than having a main app flow breaking despite of passing unit/integration tests.

### Styling

I chose to go with a modern styling framework via (react-native-paper)[https://callstack.github.io/react-native-paper/4.0/index.html] as it has an elegant and easy to use API and plently of base components that help quickly build out features for this test. In addition, this framework contains a customizable theme that can be extended to add cool features such as dark mode, which I did not add due to time constraints. 

In terms of sizing, as this app is simple I placed the sizing in pixel values, but it is pretty simple to implement custom reusable sizings throughout the app

### State and Effect Management

I chose to have Redux as my main state management tool, and to manage mutations on this state I used Redux-Saga. Although this might be overkill for an app like this, in real life complexity will always increase and managing side effects becomes more and more important in order to maintain app performance, stability and quality. Furthermore it permits complex behaviour management in a central place, seperating concerns between the data layer and the display layer. In other words it helps keep the rendering as simple as possible to make it as performant as possible, while keeping data/business logic seperate in an elegant and easy to follow manner.

### Logging

I used redux-logger in order to log out actions and state (you can check it out via debugging the app in the console) in order to simplify development and possible extension in the future via a logging platform to quickly spot errors in production