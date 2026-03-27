	- Intpreted, on demand compile.
	- Cchanges made and dynamic
	- No static check, rutime verficiation.
	- Object strcuture can be modified at runtime.
	- Pro: flexible cons: eing dynamic compiler breaks execution.
	- Oobject oriented but not class oriented.
	- Support functional style programming. i.e immutable.
	- Reason for popularity for functional programming. 
		○ Analogy : concurrent access to resource needs address the most boilerplate code so functional programming solves this in different aspect.
	- ReacctJs - Always immutabl, if you want change copy and modified.
	- JS in single threaded. 
	- NodeJs is for the backend.
	- JS vs ECMA 
		○ JS for netscape browser.
		○ Js is not w3 standard but follow ECMA standards, below follows same ecma script
			§ JS
			§ Actionsript
			§ Jscript 
	- ECMASCRIPT 6
		○ CLASSES, MODULES, Arrow func
	- Browser maintain java-runtime and user browser might not have relavant ecma script.
	

ES8


Trans compiler

Babel a javascript tool

ES5

================================NODEJS=================================



- Serverside javascript platform.
- East way too develop scalable network applications.
	○ Scalability via clustering, It is key benfitt of having nodejs.
	○ Build Google v8, javascript engine and libuv
		§ Async needs a callbacks all are facilitated by libuv 
- NPM - Node package manager.
	○ For JavaScript programs for library life-cycle management. 


=========================TYPE SCRIPT======================================

Is a programming lang developed and mintaned by MS.
It is a superset of javascript.
Transcompiles to javascript. No runtime for typescript, it relies on javascript runtime.
Have option to select target version. Like ES6,ES5


Ts config



Compiler operations
javascript


=================================REACTJS============================

	- A javasript library - UI intefaces.
	- Reusable components.
	- Declarative
		○ Allow developers to write declarative code. Making UI predictable and easier to debug.
	- Single Page Aplications. SPA
		○ Multipage applications reloads entire components multiple times.
		○ SPA loads impacted page.
		○ Limitrations to search engine optimization like meta-data is not part of Reactjs applications.
		○ To handle these we have Server side rendering.
	- JAX 
	- Component Based Architecture.
	- Virtual DOM.
		○ Reason for React to be popular.
	- ReactJs vs Angular is that - Angular framework while reactjs is a library.
	- React needs to rok on external applications.
	- Relatively reactjs perfmance though angular is in the race just behind.

History.
	- From faceboook.
	- Opensource.
	- Instra adopted.
	- 2015 - Reactive native
	- 217 - Fiber release. 
		○ Improves the ability to handle  updates effectively.

Pre-requistites.
	- Reference to js library ass like it react and reactdom dependent modules.
	- React same for both web and mobile while reactdom meant for web

React Hooks
	- Many react features like state, lefcycle hooks etc were available only wit classbased components prior to 16.8.
	- Function can't create object
	- Feature associated with  Hooks let us use state and other react features in functional component.
	- State hooks
		○ Equivalent of state in class-based components
	- Effect Hooks useEffect
		○ Used to perofmr side-eefect in func comp
		○ Equicalnent lify cycle hoooks
		const [state, setState] = useState(initialState)
	- Context Hooks useContext
	- Callback hook
		○ useCallback
	- Memo Hook
	- Ref Hook
	- Custom Hooks
		○ Important hooks w.r.to reusability.
		○ We have logic in products to fetch products, like fetchProducts, we hav to fetchProducts when component tproduct and store them in sate. Itf it has to do it in mulitple places, we can write function but those bound to hooks independentl. IN  such cases we can use existing hooks and create reusable hooks.
		○ Navigation router, toRead param so each set of functiality has set of hooks.
		○ Functionality of library in the form hooks.
		○ Facilitating reusability.
		○ Function that uses existin hooks.
		○ Client components only works with hooks.
	
	- Use-state



23-03-2026 21:57 
Props and states
	- Core concepts of react
	- If parent component rendered then all child companrentns redent
	- Props allow to pass data from parent to child (embdded) component
	- State is use change state of component.
	- Component isa function a the core.
		○ State hook useState
		○ Effect Hook useEffect
		○ ContextHook useConte
Navigation in React
	- There is no API that React provides for navigation
	- React router-dom third pary 
		○ library for navigation. Equivalent to router-dom
		○ Create React-app or vite can be used to create app
	- Next.js has navigation library., We are using nextJs 
25-03-2026 02:11 
	- State management
		○ React Context
			§ Available from React 16.3
		○ React Redux
		○ Mob
		○ RxJs
Types of state
	- Local UI sate
		- Handled by the component
	- Persistent state
		- Orders, Blobs
		- Stored on server, can be managed by Redux or React context
	- Client State
		- Is Authenticate, Filter Informaiton.
		- Managed by Redux or Reat context
	- Session sate ( in the browser)
		- Local storage and session storage.
		- Extensions can read the local stored session information if installed.
		- Untrusted extenstion are thread to security.
		- Cookies - Always transmit over the internet. It hides inside the server.
		- Memory store
			§ As long as the application alive until it closed.
		
	- Redux Flow
		- 
		

-======================= CREATION OF REACT PROJECT ======================================

Creation of react project
		

	1. Create and configure the project manually.
	2. Requires knowledge of multiple tools and their configuration
	3. Need to keep up with new version and technologies
	4. Highly customizable
	5. User tool chain
	6. Easy to star tiwith zero configuration even
	7. Customization will challenging.
	

Bundlers - webpack



Testing - Jest/cypes

Linters - eslint and tstlint


Package manager
NPM/Yarn/paaper

Compilers Babel or type script/swc/trubopack

ReactJs development comes from the configuration above things for manual approach.
NextJs - popular
	- Provides with server side and rednering and static web applications.
	- Fullstack development possible with backend development as well.
Create React App
React Native App
Vite




====================config files=======================

NextJs		
ReactJs		
React-dom		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
Typescript/node		
Next.config.ts	Defaults, 	
		

Public folder - src folder.
	- Any resource accessible from browser.
	- Layout.tsx and page.tsx, there is not html files.
	- All files have jsx files.
	- Layout.tsx
		○ Constants
		○ Moduels export - contains the root-component.
	- Page.tsx
	- Components
		○ React application. 






======================COMPONENTS======================

Home

Props/State
	- Comes from the backend.
View
	- JSX  converts to standar html.
Application logic.
- 

Root Layout

Types of components
	- Functional
		○ Presentational
		○ Stateless
		○ Statefull - Using react Hooks	
	- Class based obsolete from React 19
		○ Containers
		○ Statefull
	- Default rednering is always is SSR
	- Components based on

===================nexttjs===================

Next Js routing
	- Provides file based routing.
	- Filebased routing do not required configuration
	- Simplified Route management since we don’t have an configuraion required for routes.
	- Intituttive and readable structures.
		○ The file and folder structure of your app visually rpesents the url sstrcucture.
	- Dynamic Routing Simplified.
		○ By using square bracke i.e 
There are two types of routing.
	- Nextjs 13, introduced AppRouter, ehnanced in 1
	- Page Router Legacy sssetm still supported.
App router

	

App/
	- Api
		

API Calls
	- React does not provide any in-build library for API calls to the server
	- Common libraries
		○ Axios
		○ Fetch
	- Fetch is part of W3c speficificationsand is supported by modern browsers.
	- Axios is an open-source library based on the XMLHTTpRequest(XHR) OBJECT WITH LOT OF FEATURES.

Axios
	- Promised base http client for hthe browser and node.js
Insallation
	Npm install axios
Features
	- Make http request
	- Supports the Promise API
	- Intercept request and response
	- Trannsform request and respponse data
	- Cancel request
	- Automcatic transorms for json data
	- Client side support for security against XSRF
Axios Methods

App Route API
	- userPathName
		○ Returns the current routes pathname (e.g id in /products/{id}
		
	- userSearchParams
	- UseRouter
	- useEffect 








React effects (useEffect)
	- Hook into the liecycle
	- Mount: called once the component is mounted.
	- Dependency array is empty
	- API calls
	- DOM initializations
Unmount
	- Called once when the component is unmounted
	- Cancel the API calls
	- Unregister any events (documents/events)
Update
	- Called when component rendered.
	


\

=========================JEST ================


Jest : Identifying test files
	- Any files inside a flder name __tests_are considred tests
	- Any files with .spec or .test in their filename are considered tests.
It method
	- TO crete unt test
	- Alias test
Describe method
	- An optionnal method for grouping any of it or test statements
	- Alias name suit.
Set, befreEach and afterEach.
		○ 

===== DEPLOYMENT =====
	- Vercile
	- React-bootstrap
		○ Client side
		○ Layouts
	
<img width="1218" height="8862" alt="image" src="https://github.com/user-attachments/assets/6c445920-9457-4e65-837f-d3493b78b963" />
